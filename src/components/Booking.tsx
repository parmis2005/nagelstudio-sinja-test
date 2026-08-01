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
    days.push({
      id: date.toISOString().slice(0, 10),
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
  const selectedDaySlots = selectedDay
    ? getSlots(selectedDay.dayIndex, categoryId)
    : [];

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

    if (
      !name ||
      !phone ||
      !selectedService ||
      !selectedDay ||
      !selectedSlot?.time
    ) {
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
      className="bg-gradient-to-b from-white via-rose-50/30 to-white py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-rose-500">
            Online Terminbuchung
          </span>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-rose-950 sm:text-4xl lg:whitespace-nowrap">
            Termin direkt auf der Website anfragen
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/65 sm:text-base">
            Wähle Leistung, Tag und Uhrzeit kompakt in wenigen Schritten.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 grid items-start gap-4 rounded-[1.35rem] bg-white p-4 shadow-xl shadow-rose-950/10 ring-1 ring-rose-100 md:grid-cols-[minmax(0,1fr)_300px]"
        >
          <div className="space-y-4">
            <div className="rounded-2xl bg-rose-50/70 p-4 ring-1 ring-rose-100">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
                1. Leistung
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {bookingCategories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => selectCategory(category.id)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                      categoryId === category.id
                        ? "border-rose-600 bg-rose-600 text-white"
                        : "border-rose-200 bg-white text-rose-800 hover:bg-rose-100"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => {
                      setServiceId(service.id);
                      setSelectedSlot(null);
                      setConfirmation("");
                    }}
                    className={`rounded-xl border p-3 text-left transition-colors ${
                      serviceId === service.id
                        ? "border-rose-600 bg-white text-rose-950 shadow-sm"
                        : "border-rose-100 bg-white/75 text-foreground/75 hover:border-rose-300"
                    }`}
                  >
                    <span className="block text-sm font-semibold">
                      {service.name}
                    </span>
                    <span className="mt-3 flex justify-between gap-3 text-xs text-foreground/55">
                      <span>{service.duration}</span>
                      <span>{service.price}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white p-4 ring-1 ring-rose-100">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
                2. Termin
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-6">
                {days.map((day) => {
                  const slots = getSlots(day.dayIndex, categoryId);
                  const selected = selectedSlot?.dayId === day.id;

                  return (
                    <button
                      key={day.id}
                      type="button"
                      disabled={!slots.length}
                      onClick={() => {
                        setSelectedSlot({ dayId: day.id, time: "" });
                        setConfirmation("");
                      }}
                      className={`rounded-xl border px-3 py-2.5 text-center transition-colors ${
                        selected
                          ? "border-rose-600 bg-rose-600 text-white"
                          : slots.length
                            ? "border-rose-100 bg-rose-50/70 text-rose-950 hover:bg-rose-100"
                            : "border-rose-100 bg-sand-50 text-foreground/35"
                      }`}
                    >
                      <span className="block text-sm font-semibold">
                        {day.weekday.slice(0, 2)}
                      </span>
                      <span className="mt-1 block text-xs opacity-75">
                        {day.label}
                      </span>
                      <span className="mt-1.5 block text-xs font-medium opacity-70">
                        {slots.length ? `${slots.length} Zeiten` : "voll"}
                      </span>
                    </button>
                  );
                })}
              </div>

              <label className="mt-5 block text-sm font-medium text-foreground/70">
                Uhrzeit
                <select
                  value={selectedSlot?.time ?? ""}
                  disabled={!selectedDay || !selectedDaySlots.length}
                  onChange={(event) => {
                    if (!selectedDay) {
                      return;
                    }
                    setSelectedSlot({
                      dayId: selectedDay.id,
                      time: event.target.value,
                    });
                    setConfirmation("");
                  }}
                  className="mt-2 w-full rounded-xl border border-rose-100 bg-white px-4 py-2.5 text-sm font-semibold text-rose-950 outline-none transition-colors focus:border-rose-500 disabled:bg-sand-50 disabled:text-foreground/35"
                >
                  <option value="">
                    {selectedDay
                      ? "Freie Uhrzeit auswählen"
                      : "Bitte zuerst einen Tag wählen"}
                  </option>
                  {selectedDaySlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot} Uhr
                    </option>
                  ))}
                </select>
              </label>

              <div
                className="pointer-events-none relative mt-6 h-24 overflow-hidden rounded-b-2xl"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 900 150"
                  className="absolute inset-x-0 bottom-0 h-24 w-full"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="booking-polish"
                      x1="0"
                      x2="1"
                      y1="1"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#930c1d" />
                      <stop offset="55%" stopColor="#b80f22" />
                      <stop offset="100%" stopColor="#f15f62" />
                    </linearGradient>
                  </defs>
                  <g className="animate-polish-accent">
                    <path
                      d="M-24 126 C 122 62, 208 132, 334 92 S 530 26, 672 58 S 798 92, 928 26"
                      fill="none"
                      opacity="0.2"
                      stroke="url(#booking-polish)"
                      strokeLinecap="round"
                      strokeWidth="24"
                    />
                    <path
                      d="M-20 124 C 118 72, 210 126, 334 96 S 532 38, 672 66 S 800 92, 926 38"
                      fill="none"
                      opacity="0.72"
                      stroke="url(#booking-polish)"
                      strokeLinecap="round"
                      strokeWidth="7"
                    />
                    <ellipse
                      cx="122"
                      cy="96"
                      fill="#b80f22"
                      opacity="0.65"
                      rx="10"
                      ry="6"
                      transform="rotate(-18 122 96)"
                    />
                    <ellipse
                      cx="188"
                      cy="120"
                      fill="#f15f62"
                      opacity="0.7"
                      rx="7"
                      ry="4"
                      transform="rotate(-18 188 120)"
                    />
                    <ellipse
                      cx="724"
                      cy="52"
                      fill="#b80f22"
                      opacity="0.62"
                      rx="8"
                      ry="5"
                      transform="rotate(-18 724 52)"
                    />
                    <circle cx="592" cy="60" fill="#ffc7c7" opacity="0.8" r="4" />
                    <circle cx="626" cy="72" fill="#ffc7c7" opacity="0.55" r="3" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <aside className="rounded-2xl bg-[#211b1d] p-4 text-white ring-1 ring-rose-950/20 md:sticky md:top-24 md:self-start">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-300">
              Deine Auswahl
            </span>

            <div className="mt-4 rounded-xl bg-white/7 p-3.5 ring-1 ring-white/10">
              <p className="font-serif-display text-xl font-semibold text-white">
                {selectedService?.price ?? "ab 0 €"}
              </p>
              <p className="mt-2 text-sm text-white/70">
                {selectedService?.name ?? "Bitte Leistung wählen"}
              </p>
            </div>

            <div className="mt-4 divide-y divide-white/10 text-sm">
              <div className="flex items-center justify-between py-2.5">
                <span className="text-white/50">Bereich</span>
                <span>{selectedCategory?.label}</span>
              </div>
              <div className="flex items-center justify-between py-2.5">
                <span className="text-white/50">Dauer</span>
                <span>{selectedService?.duration ?? "-"}</span>
              </div>
              <div className="flex items-center justify-between gap-4 py-2.5">
                <span className="text-white/50">Termin</span>
                <span className="text-right">
                  {selectedDay && selectedSlot?.time
                    ? `${selectedDay.label} · ${selectedSlot.time} Uhr`
                    : "Noch offen"}
                </span>
              </div>
            </div>

            <div className="mt-4 space-y-2.5">
              <label className="block text-sm font-medium text-white/70">
                Name
                <input
                  name="name"
                  required
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-white outline-none placeholder:text-white/35 focus:border-rose-300"
                  placeholder="Vor- und Nachname"
                />
              </label>
              <label className="block text-sm font-medium text-white/70">
                Telefon
                <input
                  name="phone"
                  required
                  type="tel"
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-white outline-none placeholder:text-white/35 focus:border-rose-300"
                  placeholder="Telefonnummer"
                />
              </label>
              <label className="block text-sm font-medium text-white/70">
                Hinweis
                <textarea
                  name="note"
                  rows={2}
                  className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-white outline-none placeholder:text-white/35 focus:border-rose-300"
                  placeholder="Optional"
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={!selectedSlot?.time}
              className="mt-4 w-full rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-700 disabled:cursor-not-allowed disabled:bg-white/15 disabled:text-white/35"
            >
              Anfrage senden
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
    </section>
  );
}
