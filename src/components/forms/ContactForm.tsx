"use client";

import { useState, useSyncExternalStore, type FormEvent } from "react";
import Button from "@/components/ui/Button";
import { submitContact, type ContactPayload } from "@/lib/api";

const interests = [
  { value: "general", label: "General enquiry" },
  { value: "trial", label: "Book a trial session" },
  { value: "3-month", label: "3-month membership" },
  { value: "6-month", label: "6-month membership" },
  { value: "personal-training", label: "Personal training" },
];

type Errors = Partial<Record<keyof ContactPayload, string>>;
type Status = "idle" | "submitting" | "success" | "error";

function validate(v: ContactPayload): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Enter a valid email address.";
  if (v.phone.trim() && !/^[+\d][\d\s()-]{6,17}$/.test(v.phone.trim())) e.phone = "Enter a valid phone number.";
  if (v.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
  return e;
}

const field =
  "mt-1.5 w-full rounded-[10px] border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-ink focus:ring-2 focus:ring-olive";

const noopSubscribe = () => () => {};
/** Reads ?interest= on the client only; server/hydration snapshot is "general" (keeps the page static). */
function useUrlInterest() {
  return useSyncExternalStore(
    noopSubscribe,
    () => {
      const v = new URLSearchParams(window.location.search).get("interest");
      return interests.some((i) => i.value === v) ? (v as string) : "general";
    },
    () => "general",
  );
}

export default function ContactForm() {
  const urlInterest = useUrlInterest();
  const [interestOverride, setInterestOverride] = useState<string | null>(null);
  const [values, setValues] = useState<Omit<ContactPayload, "interest">>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const payload: ContactPayload = { ...values, interest: interestOverride ?? urlInterest };
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");
  const [delivered, setDelivered] = useState(false);

  const set = (k: keyof ContactPayload, val: string) =>
    k === "interest" ? setInterestOverride(val) : setValues((p) => ({ ...p, [k]: val }));
  const blur = (k: keyof ContactPayload) => setErrors((p) => ({ ...p, [k]: validate(payload)[k] }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(payload);
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`cf-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    setStatus("submitting");
    const res = await submitContact(payload);
    if (res.ok) {
      setDelivered(res.delivered);
      setStatus("success");
    } else {
      setServerError(res.error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-[10px] bg-ink p-8 text-bone">
        <h3 className="font-display text-3xl text-olive">Thanks, {values.name.split(" ")[0]}!</h3>
        <p className="mt-3 text-stone">
          {delivered
            ? "Your message has been sent. We'll be in touch soon."
            : "Demo mode: the form works, but no backend is connected yet, so nothing was actually sent."}
        </p>
        <button
          type="button"
          className="mt-6 text-sm font-semibold uppercase tracking-wider text-olive underline underline-offset-4"
          onClick={() => {
            setStatus("idle");
            setValues((p) => ({ ...p, message: "" }));
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  const err = (k: keyof ContactPayload) => (errors[k] ? "border-red-600" : "border-ink/20");

  return (
    <form id="contact-form" onSubmit={onSubmit} noValidate className="space-y-5 scroll-mt-28">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="text-sm font-medium">Name *</label>
          <input id="cf-name" name="name" autoComplete="name" value={values.name} onChange={(e) => set("name", e.target.value)} onBlur={() => blur("name")} aria-invalid={!!errors.name} aria-describedby={errors.name ? "err-name" : undefined} className={`${field} ${err("name")}`} />
          {errors.name && <p id="err-name" className="mt-1 text-xs text-red-700">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="cf-email" className="text-sm font-medium">Email *</label>
          <input id="cf-email" name="email" type="email" autoComplete="email" value={values.email} onChange={(e) => set("email", e.target.value)} onBlur={() => blur("email")} aria-invalid={!!errors.email} aria-describedby={errors.email ? "err-email" : undefined} className={`${field} ${err("email")}`} />
          {errors.email && <p id="err-email" className="mt-1 text-xs text-red-700">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="cf-phone" className="text-sm font-medium">Phone (optional)</label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={(e) => set("phone", e.target.value)} onBlur={() => blur("phone")} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "err-phone" : undefined} className={`${field} ${err("phone")}`} />
          {errors.phone && <p id="err-phone" className="mt-1 text-xs text-red-700">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="cf-interest" className="text-sm font-medium">I&apos;m interested in</label>
          <select id="cf-interest" name="interest" value={payload.interest} onChange={(e) => set("interest", e.target.value)} className={`${field} border-ink/20`}>
            {interests.map((i) => (
              <option key={i.value} value={i.value}>{i.label}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className="text-sm font-medium">Message *</label>
        <textarea id="cf-message" name="message" rows={5} value={values.message} onChange={(e) => set("message", e.target.value)} onBlur={() => blur("message")} aria-invalid={!!errors.message} aria-describedby={errors.message ? "err-message" : undefined} className={`${field} ${err("message")}`} />
        {errors.message && <p id="err-message" className="mt-1 text-xs text-red-700">{errors.message}</p>}
      </div>
      {status === "error" && (
        <p role="alert" className="rounded-[10px] bg-red-50 px-4 py-3 text-sm text-red-800">{serverError}</p>
      )}
      <Button type="submit" disabled={status === "submitting"} arrow>
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
