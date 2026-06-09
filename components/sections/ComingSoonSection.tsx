"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const CATEGORIES = ["Brand 3D", "Product 3D", "Launch Film"] as const;
type Category = (typeof CATEGORIES)[number];

interface FormState {
  name: string;
  email: string;
  message: string;
}

export function ComingSoonSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [category, setCategory] = useState<Category>(CATEGORIES[0]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `${category} inquiry from ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Interested in: ${category}`,
      "",
      form.message,
    ].join("\n");

    window.location.href = `mailto:spatialfoundry@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const fieldClass = [
    "w-full border-0 border-b border-white/[0.24] bg-transparent px-0 py-3",
    "font-body text-[17px] text-white outline-none",
    "placeholder:text-white/[0.46]",
    "transition-colors duration-200",
    "hover:border-white/[0.40]",
    "focus:border-white/[0.70]",
    "focus-visible:outline-none",
  ].join(" ");

  return (
    <section className="relative flex min-h-dvh overflow-hidden bg-bg text-white">
      <Image
        src="/images/hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center grayscale"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.82)" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_78%,rgba(255,255,255,0.10),transparent_38%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.62))]"
      />

      <div className="relative z-10 flex min-h-dvh w-full flex-col items-center justify-center px-6 py-10 text-center sm:px-8 md:px-12">
        <div className="mx-auto flex w-full max-w-[720px] flex-col items-center">
          <Image
            src="/logo/logo-wordmark-combination/combination-white.png"
            alt="Spatial Foundry"
            width={920}
            height={192}
            priority
            className="h-auto w-[220px] object-contain sm:w-[280px] md:w-[340px]"
          />

          <p className="mt-12 font-body text-[12px] font-semibold uppercase tracking-[0.28em] text-white/[0.64]">
            Coming soon
          </p>
          <p className="mt-5 max-w-[34rem] font-body text-lg leading-8 text-white/[0.72] md:text-xl">
            The studio is preparing a sharper home for our 3D brand systems,
            spatial campaigns, and motion work.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-9 w-full max-w-[420px]"
          >
            <div className="mb-7">
              <h2 className="font-display text-2xl font-bold leading-tight text-white">
                Send a message
              </h2>
            </div>

            <fieldset className="mb-7">
              <legend className="mb-3 block font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-white/[0.46]">
                What&rsquo;s it about
              </legend>
              <div className="flex flex-wrap gap-2.5">
                {CATEGORIES.map((option) => {
                  const active = category === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setCategory(option)}
                      aria-pressed={active}
                      className={[
                        "min-h-9 rounded-full border px-4 py-1.5 font-body text-[14px] transition-colors duration-200",
                        "focus-visible:outline-2 focus-visible:outline-white/[0.70] focus-visible:outline-offset-2",
                        active
                          ? "border-white bg-white text-bg"
                          : "border-white/[0.28] text-white/[0.72] hover:border-white/[0.55] hover:text-white",
                      ].join(" ")}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid gap-5">
              <label className="block">
                <span className="sr-only">Name</span>
                <input
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className={fieldClass}
                />
              </label>
              <label className="block">
                <span className="sr-only">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={fieldClass}
                />
              </label>
              <label className="block">
                <span className="sr-only">Message</span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className={`${fieldClass} min-h-[104px] resize-none`}
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex min-h-11 items-center gap-3 border border-white/[0.28] px-5 py-3 font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-bg focus-visible:outline-2 focus-visible:outline-white/[0.70] focus-visible:outline-offset-4"
            >
              {submitted ? "Opening mail" : "Send"}
              <ArrowRight size={15} aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
