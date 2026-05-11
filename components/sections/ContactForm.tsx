"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

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
  const [submitted, setSubmitted]     = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
    "hover:border-fg/20",
    "focus:border-fg/35 focus:bg-fg/[0.03]",
    "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2",
  ].join(" ");

  const labelClass = "mb-2 block font-body text-[11px] font-medium uppercase tracking-widest text-fg/50";

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

      {/* Custom dropdown */}
      <div ref={dropdownRef} className="relative">
        <label className={labelClass}>Project Type</label>
        <button
          type="button"
          onClick={() => setDropdownOpen((o) => !o)}
          className={[
            "w-full rounded-xl border px-4 py-3.5 font-body text-sm text-left",
            "flex items-center justify-between gap-2",
            "outline-none transition-all duration-200",
            "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2",
            dropdownOpen
              ? "border-fg/35 bg-fg/[0.03]"
              : "border-fg/10 bg-fg/[0.02] hover:border-fg/20",
            form.projectType ? "text-fg" : "text-fg/30",
          ].join(" ")}
          aria-haspopup="listbox"
          aria-expanded={dropdownOpen}
        >
          <span>{form.projectType || "Select a project type"}</span>
          <ChevronDown
            size={14}
            className={`shrink-0 text-fg/40 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
          />
        </button>

        {dropdownOpen && (
          <div
            role="listbox"
            className="absolute left-0 right-0 top-full z-50 mt-1.5 overflow-hidden rounded-xl border border-fg/10 bg-bg shadow-lg"
          >
            {projectTypes.map((type, i) => (
              <button
                key={type}
                role="option"
                type="button"
                aria-selected={form.projectType === type}
                onClick={() => {
                  setForm((prev) => ({ ...prev, projectType: type }));
                  setDropdownOpen(false);
                }}
                className={[
                  "w-full px-4 py-3 text-left font-body text-sm transition-colors duration-150",
                  "hover:bg-surface",
                  form.projectType === type ? "text-fg font-medium" : "text-fg/65",
                  i !== 0 ? "border-t border-fg/[0.06]" : "",
                ].join(" ")}
              >
                {type}
              </button>
            ))}
          </div>
        )}
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
        <p className="font-body text-xs text-fg/45">
          We typically respond within 48 hours.
        </p>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full border border-fg/15 px-7 py-3.5 font-body text-[0.875rem] font-medium uppercase tracking-[0.12em] text-fg transition-all duration-[350ms] hover:border-fg/25 hover:bg-surface disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-accent"
        >
          {submitted ? "Opening mail…" : "Send Message"}
          <ArrowRight size={13} />
        </button>
      </div>
    </form>
  );
}
