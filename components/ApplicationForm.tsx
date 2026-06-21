"use client";

import { useState } from "react";
import { IconCircleCheck, IconLoader2 } from "@tabler/icons-react";
import { trackList } from "@/lib/tracks";
import Dropdown from "@/components/Dropdown";

interface FormState {
  fullName: string;
  email: string;
  whatsapp: string;
  track: string;
  experience: string;
  message: string;
}

const initialState: FormState = {
  fullName: "",
  email: "",
  whatsapp: "",
  track: "",
  experience: "",
  message: "",
};

const experienceLevels = [
  "Complete beginner",
  "Some self-taught experience",
  "Currently studying a related field",
  "Looking to switch careers",
];

const trackOptions = trackList.map((track) => ({
  value: track.title,
  label: track.title,
}));

const experienceOptions = experienceLevels.map((level) => ({
  value: level,
  label: level,
}));

export default function ApplicationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.track || !form.experience) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Submission failed");

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-card border border-gray-200 bg-light-green p-10 text-center">
        <IconCircleCheck size={40} className="text-primary" aria-hidden="true" />
        <h3 className="text-lg font-semibold text-dark-text">
          Application received!
        </h3>
        <p className="text-sm text-muted">
          We&apos;ll review your application and get back to you within 24
          hours via WhatsApp or email.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-card border border-gray-200 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="fullName" className="text-sm font-medium text-dark-text">
            Full name
          </label>
          <input
            id="fullName"
            type="text"
            required
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            className="rounded-btn border border-gray-300 px-3.5 py-2.5 text-sm text-dark-text outline-none transition-colors focus:border-primary"
            placeholder="Your full name"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-dark-text">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="rounded-btn border border-gray-300 px-3.5 py-2.5 text-sm text-dark-text outline-none transition-colors focus:border-primary"
            placeholder="you@example.com"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="whatsapp" className="text-sm font-medium text-dark-text">
            WhatsApp number
          </label>
          <input
            id="whatsapp"
            type="tel"
            required
            value={form.whatsapp}
            onChange={(e) => update("whatsapp", e.target.value)}
            className="rounded-btn border border-gray-300 px-3.5 py-2.5 text-sm text-dark-text outline-none transition-colors focus:border-primary"
            placeholder="e.g. 0803 123 4567"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="track" className="text-sm font-medium text-dark-text">
            Which track interests you?
          </label>
          <Dropdown
            id="track"
            options={trackOptions}
            value={form.track}
            onChange={(value) => update("track", value)}
            placeholder="Select a track"
            invalid={status === "error" && !form.track}
            aria-label="Which track interests you?"
          />
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="experience" className="text-sm font-medium text-dark-text">
            Your current experience level
          </label>
          <Dropdown
            id="experience"
            options={experienceOptions}
            value={form.experience}
            onChange={(value) => update("experience", value)}
            placeholder="Select an option"
            invalid={status === "error" && !form.experience}
            aria-label="Your current experience level"
          />
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-dark-text">
            Why do you want to join TopStack Academy?
          </label>
          <textarea
            id="message"
            rows={4}
            required
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className="rounded-btn border border-gray-300 px-3.5 py-2.5 text-sm text-dark-text outline-none transition-colors focus:border-primary"
            placeholder="Tell us a bit about your goals..."
          />
        </div>
      </div>

      {status === "error" && (!form.track || !form.experience) && (
        <p className="mt-4 text-sm text-red-600">
          Please select a track and your experience level.
        </p>
      )}
      {status === "error" && form.track && form.experience && (
        <p className="mt-4 text-sm text-red-600">
          Something went wrong submitting your application. Please try again
          or reach us on WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        aria-label="Submit application"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-btn bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" && (
          <IconLoader2 size={18} className="animate-spin" aria-hidden="true" />
        )}
        {status === "submitting" ? "Submitting..." : "Submit application"}
      </button>
    </form>
  );
}
