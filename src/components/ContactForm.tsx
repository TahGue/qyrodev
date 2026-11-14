"use client";

import { useId, useState, type FormEvent } from "react";
import { ArrowRight, Check, Copy } from "lucide-react";
import { CONTACT_EMAIL } from "@/content/site";

const PROJECT_TYPES = [
  "Custom software",
  "AI system",
  "Business automation",
  "Digital product",
  "Not sure yet",
];

const BUDGETS = ["Under 100k SEK", "100–300k SEK", "300–750k SEK", "750k+ SEK", "Not sure yet"];

type Values = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
};

const EMPTY: Values = { name: "", email: "", company: "", projectType: "", budget: "", message: "" };

type FieldErrors = Partial<Record<keyof Values, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: Values): FieldErrors {
  const errors: FieldErrors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (!values.projectType) errors.projectType = "Choose the closest project type.";
  if (values.message.trim().length < 20) errors.message = "Please describe the project in at least 20 characters.";
  return errors;
}

function buildMailto(values: Values): string {
  const body = [
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    values.company.trim() ? `Company: ${values.company.trim()}` : null,
    `Project type: ${values.projectType}`,
    values.budget ? `Budget: ${values.budget}` : null,
    "",
    values.message.trim(),
  ]
    .filter((line) => line !== null)
    .join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Project enquiry — ${values.projectType}`)}&body=${encodeURIComponent(body)}`;
}

const FIELD_CLASS =
  "mt-2 w-full rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground placeholder:text-subtle focus:border-primary-soft/60 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2";
const LABEL_CLASS = "block text-sm font-medium text-foreground";

export default function ContactForm() {
  const id = useId();
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "ready">("idle");
  const [mailtoHref, setMailtoHref] = useState("");
  const [copied, setCopied] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const fieldId = (name: keyof Values) => `${id}-${name}`;
  const errorId = (name: keyof Values) => `${id}-${name}-error`;

  const setField = (name: keyof Values) => (value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (honeypot) return; // bot trap: silently ignore

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      const first = Object.keys(nextErrors)[0];
      document.getElementById(fieldId(first as keyof Values))?.focus();
      return;
    }

    const href = buildMailto(values);
    setMailtoHref(href);
    setStatus("ready");
    window.location.href = href;
  };

  const copyMessage = async () => {
    try {
      const text = [
        `Name: ${values.name.trim()}`,
        `Email: ${values.email.trim()}`,
        values.company.trim() ? `Company: ${values.company.trim()}` : null,
        `Project type: ${values.projectType}`,
        values.budget ? `Budget: ${values.budget}` : null,
        "",
        values.message.trim(),
      ]
        .filter((line) => line !== null)
        .join("\n");
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  if (status === "ready") {
    return (
      <div className="card p-6 sm:p-8" role="status" aria-live="polite">
        <h3 className="text-lg font-semibold text-foreground">Your details are ready to send</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Your email app should have opened with everything filled in. If it did not, use the button below or write to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-link">
            {CONTACT_EMAIL}
          </a>{" "}
          directly.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={mailtoHref} className="btn btn-primary">
            Open email app <ArrowRight size={16} aria-hidden />
          </a>
          <button type="button" onClick={copyMessage} className="btn btn-secondary">
            {copied ? (
              <>
                <Check size={16} aria-hidden /> Copied
              </>
            ) : (
              <>
                <Copy size={16} aria-hidden /> Copy message
              </>
            )}
          </button>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-subtle">
          We reply within one business day. Your message goes straight to our inbox — this site does not store it.
        </p>

        <button
          type="button"
          className="mt-4 text-sm text-muted underline underline-offset-4 hover:text-foreground"
          onClick={() => setStatus("idle")}
        >
          Edit details
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={fieldId("name")} className={LABEL_CLASS}>
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id={fieldId("name")}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={(e) => setField("name")(e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? errorId("name") : undefined}
            className={FIELD_CLASS}
            placeholder="Your name"
          />
          {errors.name && (
            <p id={errorId("name")} className="mt-1.5 text-xs text-warning">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={fieldId("email")} className={LABEL_CLASS}>
            Business email <span aria-hidden="true">*</span>
          </label>
          <input
            id={fieldId("email")}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            value={values.email}
            onChange={(e) => setField("email")(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? errorId("email") : undefined}
            className={FIELD_CLASS}
            placeholder="you@company.com"
          />
          {errors.email && (
            <p id={errorId("email")} className="mt-1.5 text-xs text-warning">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={fieldId("company")} className={LABEL_CLASS}>
            Company <span className="font-normal text-subtle">(optional)</span>
          </label>
          <input
            id={fieldId("company")}
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={(e) => setField("company")(e.target.value)}
            className={FIELD_CLASS}
            placeholder="Company name"
          />
        </div>

        <div>
          <label htmlFor={fieldId("projectType")} className={LABEL_CLASS}>
            Project type <span aria-hidden="true">*</span>
          </label>
          <select
            id={fieldId("projectType")}
            name="projectType"
            required
            value={values.projectType}
            onChange={(e) => setField("projectType")(e.target.value)}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={errors.projectType ? errorId("projectType") : undefined}
            className={FIELD_CLASS}
          >
            <option value="">Select one</option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p id={errorId("projectType")} className="mt-1.5 text-xs text-warning">
              {errors.projectType}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={fieldId("budget")} className={LABEL_CLASS}>
            Estimated budget <span className="font-normal text-subtle">(optional)</span>
          </label>
          <select
            id={fieldId("budget")}
            name="budget"
            value={values.budget}
            onChange={(e) => setField("budget")(e.target.value)}
            className={FIELD_CLASS}
          >
            <option value="">Prefer not to say</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={fieldId("message")} className={LABEL_CLASS}>
            Project description <span aria-hidden="true">*</span>
          </label>
          <textarea
            id={fieldId("message")}
            name="message"
            required
            rows={6}
            value={values.message}
            onChange={(e) => setField("message")(e.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? errorId("message") : `${id}-message-hint`}
            className={FIELD_CLASS}
            placeholder="What are you trying to build or fix? What does success look like?"
          />
          {errors.message ? (
            <p id={errorId("message")} className="mt-1.5 text-xs text-warning">
              {errors.message}
            </p>
          ) : (
            <p id={`${id}-message-hint`} className="mt-1.5 text-xs text-subtle">
              The more context you give, the more useful our first reply will be.
            </p>
          )}
        </div>
      </div>

      {/* Bot trap: hidden from people and assistive technology. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={fieldId("company") + "-url"}>Website</label>
        <input
          id={fieldId("company") + "-url"}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn btn-primary">
          Send enquiry <ArrowRight size={16} aria-hidden />
        </button>
        <p className="text-xs leading-relaxed text-subtle">
          We reply within one business day. Your message goes straight to our inbox — this site does not store it.
        </p>
      </div>
    </form>
  );
}
