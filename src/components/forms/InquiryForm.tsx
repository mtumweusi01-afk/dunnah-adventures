"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Dictionary } from "@/i18n/dictionary-type";
import type { Tour } from "@/data/types";
import type { Locale } from "@/i18n/config";
import { Button } from "@/components/ui/Button";
import { CONTACT, WEB3FORMS_ACCESS_KEY } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export function InquiryForm({
  dict,
  locale,
  tours,
}: {
  dict: Dictionary;
  locale: Locale;
  tours: Tour[];
}) {
  const [status, setStatus] = useState<Status>("idle");
  const searchParams = useSearchParams();
  const presetSlug = searchParams.get("tour");
  const presetTour = tours.find((t) => t.slug === presetSlug)?.title[locale];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!WEB3FORMS_ACCESS_KEY) {
      const name = String(data.get("name") ?? "");
      const email = String(data.get("email") ?? "");
      const phone = String(data.get("phone") ?? "");
      const tour = String(data.get("tour") ?? "");
      const message = String(data.get("message") ?? "");
      const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Interested in: ${tour}`,
        "",
        message,
      ].join("\n");
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
        "Kenya safari inquiry — Dunnah Adventures"
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("submitting");
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("subject", "New inquiry — Dunnah Adventures");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground">
          {dict.contact.formNameLabel}
          <input
            required
            name="name"
            type="text"
            className="rounded-lg border border-border bg-surface px-4 py-2.5 text-base text-foreground focus-visible:outline-2 focus-visible:outline-offset-2"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground">
          {dict.contact.formEmailLabel}
          <input
            required
            name="email"
            type="email"
            className="rounded-lg border border-border bg-surface px-4 py-2.5 text-base text-foreground focus-visible:outline-2 focus-visible:outline-offset-2"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground">
          {dict.contact.formPhoneLabel}
          <input
            name="phone"
            type="tel"
            className="rounded-lg border border-border bg-surface px-4 py-2.5 text-base text-foreground focus-visible:outline-2 focus-visible:outline-offset-2"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground">
          {dict.contact.formTourLabel}
          <select
            name="tour"
            defaultValue={presetTour ?? ""}
            className="rounded-lg border border-border bg-surface px-4 py-2.5 text-base text-foreground focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <option value="">—</option>
            {tours.map((t) => (
              <option key={t.slug} value={t.title[locale]}>
                {t.title[locale]}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground">
        {dict.contact.formMessageLabel}
        <textarea
          required
          name="message"
          rows={5}
          placeholder={dict.contact.formMessagePlaceholder}
          className="rounded-lg border border-border bg-surface px-4 py-2.5 text-base text-foreground focus-visible:outline-2 focus-visible:outline-offset-2"
        />
      </label>

      <Button type="submit" variant="primary" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? dict.contact.formSubmitting : dict.contact.formSubmit}
      </Button>

      {status === "success" && (
        <p className="text-sm font-medium text-brand-secondary">{dict.contact.formSuccess}</p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-brand-primary">{dict.contact.formError}</p>
      )}
    </form>
  );
}
