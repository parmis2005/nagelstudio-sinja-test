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
    <section
      id="terminbuchung"
      className="bg-gradient-to-b from-white via-rose-50/40 to-sand-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-[1.75rem] bg-[#211b1d] shadow-2xl shadow-rose-950/20 ring-1 ring-rose-900/20">
          <div className="grid gap-0 lg:grid-cols-[0.85fr_1.4fr]">
            <div className="flex flex-col justify-between bg-rose-950 px-6 py-8 text-white sm:px-10 lg:min-h-[34rem]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-200">
                  Online Terminbuchung
                </span>
                <h2 className="mt-5 font-serif-display text-4xl font-semibold leading-tight sm:text-5xl">
                  Dein Termin direkt im Studio.
                </h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-rose-100/80 sm:text-base">
                  Wähle Leistung, freien Tag und Uhrzeit. Danach frage ich den
                  Termin persönlich für dich an.
                </p>
              </div>

              <div className="mt-10 grid gap-3 text-sm">
                {["Leistung wählen", "Uhrzeit aussuchen", "Anfrage senden"].map(
                  (step, index) => (
                    <div
                      key={step}
                      className="flex items-center gap-3 rounded-full bg-white/8 px-4 py-3 ring-1 ring-white/10"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-600 text-xs font-semibold text-white">
                        {index + 1}
                      </span>
                      <span className="font-medium text-rose-50">{step}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid gap-5 bg-background p-4 sm:p-6 xl:grid-cols-[minmax(0,1fr)_350px]"
            >
              <div className="rounded-[1.35rem] bg-white p-5 shadow-sm ring-1 ring-rose-100 sm:p-7">
                <div className="flex flex-col gap-5 border-b border-rose-100 pb-6 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-500">
                      Angebot auswählen
                    </span>
                    <h3 className="mt-3 font-serif-display text-3xl font-semibold text-rose-950">
                      Freie Termine
                    </h3>
                    <p className="mt-2 text-sm text-foreground/60">
                      {selectedService?.name ?? "Leistung wählen"}
                    </p>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-3 lg:min-w-[420px]">
                    {bookingCategories.map((category) => (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => selectCategory(category.id)}
                        className={`rounded-xl border px-4 py-3 text-left transition-colors ${
                          categoryId === category.id
                            ? "border-rose-600 bg-rose-600 text-white shadow-sm"
                            : "border-rose-100 bg-rose-50/45 text-foreground/75 hover:border-rose-300 hover:bg-rose-50"
                        }`}
                      >
                        <span className="block text-sm font-semibold">
                          {category.label}
                        </span>
                        <span
                          className={`mt-1 block text-xs ${
                            categoryId === category.id
                              ? "text-white/75"
                              : "text-foreground/45"
                          }`}
                        >
                          {category.description}
                        </span>
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
                      className={`rounded-xl border p-4 text-left transition-all ${
                        serviceId === service.id
                          ? "border-rose-600 bg-rose-50 text-rose-950 shadow-sm"
                          : "border-rose-100 bg-white text-foreground/75 hover:-translate-y-0.5 hover:border-rose-300 hover:shadow-sm"
                      }`}
                    >
                      <span className="block text-sm font-semibold">
                        {service.name}
                      </span>
                      <span className="mt-3 flex justify-between text-xs text-foreground/55">
                        <span>{service.duration}</span>
                        <span>{service.price}</span>
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-8 overflow-x-auto pb-2">
                  <div className="grid min-w-[860px] grid-cols-6 gap-3">
                    {days.map((day) => {
                      const slots = getSlots(day.dayIndex, categoryId);

                      return (
                        <div
                          key={day.id}
                          className="rounded-2xl bg-rose-50/45 p-3 ring-1 ring-rose-100"
                        >
                          <div className="text-center">
                            <p className="text-sm font-semibold text-rose-950">
                              {day.weekday}
                            </p>
                            <p className="mt-1 text-xs text-foreground/50">
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
                                      setSelectedSlot({
                                        dayId: day.id,
                                        time: slot,
                                      });
                                      setConfirmation("");
                                    }}
                                    className={`w-full rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                                      selected
                                        ? "bg-rose-600 text-white shadow-sm shadow-rose-900/20"
                                        : "bg-white text-rose-950 ring-1 ring-rose-100 hover:bg-rose-100"
                                    }`}
                                  >
                                    {slot}
                                  </button>
                                );
                              })
                            ) : (
                              <div className="rounded-xl border border-dashed border-rose-200 bg-white/60 px-3 py-6 text-center text-xs font-medium text-foreground/45">
                                Keine freien Termine
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <aside className="rounded-[1.35rem] bg-[#211b1d] p-6 text-white shadow-xl ring-1 ring-white/10 xl:sticky xl:top-24 xl:self-start">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-300">
                  Deine Auswahl
                </span>

                <div className="mt-7 rounded-2xl bg-white/7 p-5 ring-1 ring-white/10">
                  <p className="font-serif-display text-3xl font-semibold text-white">
                    {selectedService?.price ?? "ab 0 €"}
                  </p>
                  <p className="mt-3 text-sm text-white/70">
                    {selectedService?.name ?? "Bitte Leistung wählen"}
                  </p>
                </div>

                <div className="mt-6 divide-y divide-white/10 text-sm">
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
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-rose-300"
                      placeholder="Vor- und Nachname"
                    />
                  </label>
                  <label className="block text-sm font-medium text-white/70">
                    Telefon
                    <input
                      name="phone"
                      required
                      type="tel"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-rose-300"
                      placeholder="Telefonnummer"
                    />
                  </label>
                  <label className="block text-sm font-medium text-white/70">
                    Hinweis
                    <textarea
                      name="note"
                      rows={3}
                      className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-rose-300"
                      placeholder="Optional"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!selectedSlot}
                  className="mt-6 w-full rounded-full bg-rose-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-rose-950/20 transition-colors hover:bg-rose-700 disabled:cursor-not-allowed disabled:bg-white/15 disabled:text-white/35"
                >
                  Auswahl bestätigen
                </button>

                {confirmation && (
                  <p
                    className="mt-4 rounded-xl bg-white/10 p-4 text-sm font-medium text-white"
                    aria-live="polite"
                  >
                    {confirmation}
                  </p>
                )}
              </aside>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
