"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const projectTypes = [
  "3D Brand Identity",
  "Icon System",
  "Motion & Film",
  "Web Illustrations",
  "Not Sure Yet",
];

interface FormState {
  name:        string;
  company:     string;
  email:       string;
  projectType: string;
  message:     string;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name:        "",
    company:     "",
    email:       "",
    projectType: "",
    message:     "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Form handler: mailto: for now — swap for POST /api/contact + Resend/Formspree when ready
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `New project inquiry from ${form.name}${form.company ? ` at ${form.company}` : ""}`;
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Project Type: ${form.projectType}`,
      `\nMessage:\n${form.message}`,
    ].join("\n");

    window.location.href = `mailto:spatialfoundry@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const fieldClass = [
    "w-full rounded-xl border border-fg/10 bg-fg/[0.02]",
    "px-4 py-3.5 font-body text-sm text-fg",
    "placeholder-fg/25 outline-none",
    "transition-all duration-200",
    "focus:border-fg/40 focus:bg-fg/[0.04]",
    "hover:border-fg/20",
  ].join(" ");

  const labelClass = "mb-2 block font-body text-xs font-medium uppercase tracking-widest text-fg";

  // Inline SVG chevron rendered with currentColor — looks right in both themes without a data URI
  const chevronDataUri =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'>` +
      `<path d='M1 1l5 5 5-5' stroke='currentColor' stroke-width='1.5' fill='none' stroke-linecap='round'/>` +
      `</svg>`
    );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>Name *</label>
          <input
            id="name" name="name" type="text" required
            placeholder="Your name"
            value={form.name} onChange={handleChange}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>Company</label>
          <input
            id="company" name="company" type="text"
            placeholder="Your company"
            value={form.company} onChange={handleChange}
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Email *</label>
        <input
          id="email" name="email" type="email" required
          placeholder="hello@yourcompany.com"
          value={form.email} onChange={handleChange}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="projectType" className={labelClass}>Project Type</label>
        <select
          id="projectType" name="projectType"
          value={form.projectType} onChange={handleChange}
          className={`${fieldClass} appearance-none text-fg`}
          style={{
            backgroundImage:    `url("${chevronDataUri}")`,
            backgroundRepeat:   "no-repeat",
            backgroundPosition: "right 16px center",
          }}
        >
          <option value="" disabled>Select a project type</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Tell us about the project *</label>
        <textarea
          id="message" name="message" required rows={6}
          placeholder="What are you building? What problem does the 3D work need to solve? Where are you in the process?"
          value={form.message} onChange={handleChange}
          className={`${fieldClass} resize-none`}
        />
      </div>

      <div className="flex items-center justify-between gap-4 pt-2">
        <p className="font-body text-xs text-fg">
          We typically respond within 48 hours.
        </p>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full border border-fg/20 px-6 py-2.5 font-body text-xs font-medium uppercase tracking-widest text-fg transition-all duration-300 hover:border-fg hover:bg-fg hover:text-bg disabled:opacity-40"
        >
          {submitted ? "Opening email client…" : "Send Message"}
          <ArrowRight size={11} />
        </button>
      </div>
    </form>
  );
}
