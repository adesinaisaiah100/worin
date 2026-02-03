"use client";

import React, { useMemo, useState } from "react";
import { X, Send } from "lucide-react";

type HelpFormProps = {
  onClose?: () => void;
};

type HelpFormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export default function HelpForm({ onClose }: HelpFormProps) {
  const [form, setForm] = useState<HelpFormState>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const canSubmit = useMemo(() => {
    return (
      form.name.trim().length >= 2 &&
      form.phone.trim().length >= 7 &&
      form.email.trim().length >= 5 &&
      form.message.trim().length >= 10
    );
  }, [form]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setSubmitting(true);

    try {
      const res = await fetch("/api/help", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.message,
        }),
      });

      const data = (await res.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!res.ok) {
        throw new Error(data?.error || "Failed to submit. Please try again.");
      }

      setSuccess("Submitted. We’ll get back to you soon.");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="help-form"
      className="w-full px-6 py-12 bg-[#FDFBF7] border-t border-[#C5A059]/30"
      aria-label="Help request form"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 className="text-3xl md:text-4xl font-nunito font-bold text-[#2E1A47]">
              Request Help
            </h3>
            <p className="mt-2 text-gray-600 font-nunito">
              Fill this out and we’ll contact you as soon as possible.
            </p>
          </div>

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 p-2 rounded-full border border-[#C5A059]/40 text-[#2E1A47] hover:bg-[#C5A059]/10 transition-colors"
              aria-label="Close help form"
            >
              <X size={20} />
            </button>
          )}
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-8 rounded-3xl border border-[#C5A059]/30 bg-white shadow-lg p-6 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <label className="flex flex-col gap-2 font-nunito">
              <span className="text-sm font-bold text-[#2E1A47]">Full Name</span>
              <input
                value={form.name}
                onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                className="h-12 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/60"
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </label>

            <label className="flex flex-col gap-2 font-nunito">
              <span className="text-sm font-bold text-[#2E1A47]">Phone Number</span>
              <input
                value={form.phone}
                onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                className="h-12 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/60"
                placeholder="e.g. +234 903 632 3604"
                autoComplete="tel"
                required
              />
            </label>

            <label className="flex flex-col gap-2 font-nunito md:col-span-2">
              <span className="text-sm font-bold text-[#2E1A47]">Email</span>
              <input
                value={form.email}
                onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                className="h-12 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/60"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </label>

            <label className="flex flex-col gap-2 font-nunito md:col-span-2">
              <span className="text-sm font-bold text-[#2E1A47]">
                What do you need help with?
              </span>
              <textarea
                value={form.message}
                onChange={(e) =>
                  setForm((s) => ({ ...s, message: e.target.value }))
                }
                className="min-h-32 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/60"
                placeholder="Tell us what’s going on and how we can support you..."
                required
              />
            </label>
          </div>

          {error && (
            <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 font-nunito">
              {error}
            </div>
          )}

          {success && (
            <div className="mt-5 rounded-xl border border-green-200 bg-green-300/70 px-4 py-3 text-sm text-gray-900 font-nunito">
              {success}
            </div>
          )}

          <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <p className="text-xs text-gray-500 font-nunito">
              By submitting, you agree that we may contact you using the details
              provided.
              🎉
            </p>

            <button
              type="submit"
              disabled={!canSubmit || submitting}
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-[#FFB81C] text-[#2E1A47] font-bold font-nunito hover:bg-[#fbb00e] disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow"
            >
              <Send size={18} />
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}