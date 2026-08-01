"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  bookingCategories,
  bookingServices,
  type BookingCategory,
} from "@/lib/site-data";

type BookingDay = {
  id: string;
  weekday: string;
  label: string;
  dayIndex: number;
};

const schedule: Record<number, string[]> = {
  0: [],
  1: [],
  2: ["09:00", "09:30", "10:00", "11:00", "12:30", "14:00", "15:30"],
  3: ["09:30", "10:30", "12:00", "13:30", "15:00", "16:30"],
  4: ["10:00", "11:30", "13:00", "14:30", "16:00", "17:00"],
  5: ["09:00", "10:00", "11:30", "13:30", "15:00", "16:30"],
  6: ["09:00", "10:00", "11:00", "12:30", "14:00"],
};

const categoryOffsets: Record<BookingCategory["id"], number> = {
  haende: 0,
  fuesse: 1,
  extras: 2,
};

function createBookingDays() {
  const days: BookingDay[] = [];
  const date = new Date();
  date.setDate(date.getDate() + 1);

  while (date.getDay() !== 2) {
    date.setDate(date.getDate() + 1);
  }

  while (days.length < 6) {
    const id = date.toISOString().slice(0, 10);
    days.push({
      id,
      weekday: date.toLocaleDateString("de-DE", { weekday: "long" }),
      label: date.toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "short",
      }),
      dayIndex: date.getDay(),
    });
    date.setDate(date.getDate() + 1);
  }

  return days;
}

function getSlots(dayIndex: number, categoryId: BookingCategory["id"]) {
  const slots = schedule[dayIndex] ?? [];
  const offset = categoryOffsets[categoryId];

  if (!offset) {
    return slots;
  }

  return slots.filter((_, index) => index % 3 !== offset - 1);
}

export default function Booking() {
  const days = useMemo(() => createBookingDays(), []);
  const [categoryId, setCategoryId] =
    useState<BookingCategory["id"]>("haende");
  const services = useMemo(
    () => bookingServices.filter((service) => service.categoryId === categoryId),
    [categoryId]
  );
  const [serviceId, setServiceId] = useState("klassische-manikure");
  const [selectedSlot, setSelectedSlot] = useState<{
    dayId: string;
    time: string;
  } | null>(null);
  const [confirmation, setConfirmation] = useState("");

  const selectedService = bookingServices.find(
    (service) => service.id === serviceId
  );
  const selectedDay = days.find((day) => day.id === selectedSlot?.dayId);
  const selectedCategory = bookingCategories.find(
    (category) => category.id === categoryId
  );

  function selectCategory(nextCategoryId: BookingCategory["id"]) {
    const nextService = bookingServices.find(
      (service) => service.categoryId === nextCategoryId
    );
    setCategoryId(nextCategoryId);
    setServiceId(nextService?.id ?? "");
    setSelectedSlot(null);
    setConfirmation("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();

    if (!name || !phone || !selectedService || !selectedDay || !selectedSlot) {
      return;
    }

    const booking = {
      name,
      phone,
      note: String(formData.get("note") ?? "").trim(),
      service: selectedService.name,
      day: `${selectedDay.weekday}, ${selectedDay.label}`,
      time: selectedSlot.time,
      createdAt: new Date().toISOString(),
    };

    const existing = JSON.parse(
      window.localStorage.getItem("bookingRequests") ?? "[]"
    ) as (typeof booking)[];
    window.localStorage.setItem(
      "bookingRequests",
      JSON.stringify([...existing, booking])
    );

    setConfirmation(
      `${booking.service} am ${booking.day} um ${booking.time} Uhr ist vorgemerkt. Wir melden uns zur Bestätigung.`
    );
    event.currentTarget.reset();
  }

  return (
    <section id="terminbuchung" className="bg-sand-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-background shadow-2xl shadow-rose-950/10 ring-1 ring-rose-100">
          <div className="flex items-start justify-between gap-6 border-b border-rose-100 px-6 py-7 sm:px-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-500">
                Online Terminbuchung
              </span>
              <h2 className="mt-3 font-serif-display text-3xl font-semibold text-rose-950 sm:text-4xl">
                Angebot und freien Termin wählen
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-3 border-b border-rose-100 text-sm font-semibold text-foreground/50">
            {["1. Angebot wählen", "2. Termin auswählen", "3. Bestätigung"].map(
              (step, index) => (
                <div
                  key={step}
                  className={`px-4 py-4 sm:px-10 ${
                    index === 1
                      ? "bg-white text-gold-500"
                      : "bg-sand-100/60"
                  }`}
                >
                  {step}
                </div>
              )
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid gap-8 p-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:p-10"
          >
            <div className="rounded-[1.5rem] bg-white p-5 shadow-sm ring-1 ring-rose-100 sm:p-7">
              <div className="flex flex-col gap-5 border-b border-rose-100 pb-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <span className="text-sm font-semibold text-gold-500">
                    Angebot wechseln
                  </span>
                  <h3 className="mt-5 font-serif-display text-3xl font-semibold text-rose-950">
                    Freie Termine
                  </h3>
                  <p className="mt-2 text-foreground/60">
                    {selectedService?.name ?? "Leistung wählen"}
                  </p>
                </div>

                <div className="grid gap-2 sm:grid-cols-3 lg:min-w-[420px]">
                  {bookingCategories.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => selectCategory(category.id)}
                      className={`rounded-lg border px-4 py-3 text-left text-sm transition-colors ${
                        categoryId === category.id
                          ? "border-rose-500 bg-rose-50 text-rose-900"
                          : "border-rose-100 bg-sand-50 text-foreground/70 hover:bg-rose-50"
                      }`}
                    >
                      <span className="font-semibold">{category.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => {
                      setServiceId(service.id);
                      setSelectedSlot(null);
                      setConfirmation("");
                    }}
                    className={`rounded-lg border p-4 text-left transition-colors ${
                      serviceId === service.id
                        ? "border-rose-500 bg-rose-50 text-rose-900"
                        : "border-rose-100 bg-sand-50 text-foreground/75 hover:bg-rose-50"
                    }`}
                  >
                    <span className="block text-sm font-semibold">
                      {service.name}
                    </span>
                    <span className="mt-2 flex justify-between text-xs text-foreground/60">
                      <span>{service.duration}</span>
                      <span>{service.price}</span>
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-8 grid gap-4 overflow-x-auto pb-2 lg:grid-cols-6">
                {days.map((day) => {
                  const slots = getSlots(day.dayIndex, categoryId);

                  return (
                    <div key={day.id} className="min-w-[140px]">
                      <div className="text-center">
                        <p className="font-semibold text-foreground">
                          {day.weekday}
                        </p>
                        <p className="mt-1 text-sm text-foreground/50">
                          {day.label}
                        </p>
                      </div>

                      <div className="mt-4 space-y-2">
                        {slots.length ? (
                          slots.map((slot) => {
                            const selected =
                              selectedSlot?.dayId === day.id &&
                              selectedSlot.time === slot;

                            return (
                              <button
                                key={slot}
                                type="button"
                                onClick={() => {
                                  setSelectedSlot({ dayId: day.id, time: slot });
                                  setConfirmation("");
                                }}
                                className={`w-full rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                                  selected
                                    ? "bg-rose-600 text-white shadow-sm"
                                    : "bg-sand-200 text-foreground hover:bg-rose-100"
                                }`}
                              >
                                {slot}
                              </button>
                            );
                          })
                        ) : (
                          <div className="rounded-lg border border-dashed border-rose-100 px-3 py-6 text-center text-sm text-foreground/45">
                            Keine freien Termine
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <aside className="rounded-[1.5rem] bg-[#211b1d] p-7 text-white shadow-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">
                Deine Auswahl
              </span>

              <div className="mt-8">
                <p className="font-serif-display text-3xl font-semibold text-gold-400">
                  {selectedService?.price ?? "ab 0 €"}
                </p>
                <p className="mt-3 text-sm text-white/70">
                  {selectedService?.name ?? "Bitte Leistung wählen"}
                </p>
              </div>

              <div className="mt-8 divide-y divide-white/10 text-sm">
                <div className="flex items-center justify-between py-4">
                  <span className="text-white/50">Bereich</span>
                  <span>{selectedCategory?.label}</span>
                </div>
                <div className="flex items-center justify-between py-4">
                  <span className="text-white/50">Dauer</span>
                  <span>{selectedService?.duration ?? "-"}</span>
                </div>
                <div className="flex items-center justify-between gap-4 py-4">
                  <span className="text-white/50">Termin</span>
                  <span className="text-right">
                    {selectedDay && selectedSlot
                      ? `${selectedDay.weekday}, ${selectedDay.label} · ${selectedSlot.time}`
                      : "Bitte Uhrzeit wählen"}
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <label className="block text-sm font-medium text-white/70">
                  Name
                  <input
                    name="name"
                    required
                    className="mt-2 w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-rose-300"
                    placeholder="Vor- und Nachname"
                  />
                </label>
                <label className="block text-sm font-medium text-white/70">
                  Telefon
                  <input
                    name="phone"
                    required
                    type="tel"
                    className="mt-2 w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-rose-300"
                    placeholder="Telefonnummer"
                  />
                </label>
                <label className="block text-sm font-medium text-white/70">
                  Hinweis
                  <textarea
                    name="note"
                    rows={3}
                    className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-rose-300"
                    placeholder="Optional"
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={!selectedSlot}
                className="mt-6 w-full rounded-full bg-rose-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-rose-700 disabled:cursor-not-allowed disabled:bg-white/15 disabled:text-white/35"
              >
                Auswahl bestätigen
              </button>

              {confirmation && (
                <p
                  className="mt-4 rounded-lg bg-white/10 p-4 text-sm font-medium text-white"
                  aria-live="polite"
                >
                  {confirmation}
                </p>
              )}
            </aside>
          </form>
        </div>
      </div>
    </section>
  );
}
