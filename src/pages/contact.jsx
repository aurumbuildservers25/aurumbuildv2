import React, { useState } from "react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

import DivisionHeader from "../components/DivisionHeader";
import DivisionFooter from "../components/DivisionFooter";

const EMAIL = "admin@aurumbuild.eu";
const PHONE = "+48 696 379 094";

const fieldClass =
  "block w-full min-w-0 rounded-none border-0 border-b border-[#102D5B]/20 " +
  "bg-transparent px-0 py-4 text-[16px] text-[#102D5B] " +
  "outline-none transition-colors placeholder:text-[#102D5B]/35 " +
  "focus:border-[#C9A962] focus:ring-0";

export default function Contact() {
  const [projectType, setProjectType] = useState("Residential");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const subject = `AURUMBUILD — ${projectType} enquiry`;

    const body = [
      `Project type: ${projectType}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "Not specified"}`,
      "",
      "Project details:",
      message,
    ].join("\n");

    window.location.href =
      `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <DivisionHeader division="residential" />

      <main className="w-full min-w-0 overflow-x-hidden bg-[#FFF9EF] text-[#102D5B]">
        {/* HERO */}
        <section className="w-full px-6 pb-7 pt-9 sm:px-10 md:pb-12 md:pt-16 lg:px-20">
          <div className="mx-auto w-full max-w-[1360px]">
            <div className="mb-5 flex items-center gap-3 md:mb-7">
              <span className="h-px w-8 bg-[#C9A962]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B18D43]">
                CONTACT
              </span>
            </div>

            <h1 className="max-w-[1000px] text-[clamp(2.35rem,5.8vw,6.2rem)] font-semibold leading-[1.03] tracking-[-0.055em]">
              Your vision.
              <br />
              Our conversation.
            </h1>
          </div>
        </section>

        {/* CONTACT DETAILS */}
        <section className="w-full px-6 sm:px-10 lg:px-20">
          <div className="mx-auto w-full max-w-[1360px] border-t border-[#102D5B]/20">
            <div className="grid md:grid-cols-2">
              {/* EMAIL */}
              <a
                href={`mailto:${EMAIL}`}
                className="group flex min-w-0 items-center gap-4 border-b border-[#102D5B]/20 py-5 md:gap-5 md:border-r md:py-8 md:pr-10"
              >
                <Mail
                  size={22}
                  strokeWidth={1.4}
                  className="shrink-0 text-[#B18D43]"
                />

                <div className="min-w-0 flex-1">
                  <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B18D43]">
                    EMAIL
                  </div>

                  <div className="break-all text-[16px] font-medium tracking-[-0.025em] sm:text-lg">
                    {EMAIL}
                  </div>
                </div>

                <ArrowUpRight
                  size={19}
                  strokeWidth={1.5}
                  className="shrink-0 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              {/* PHONE */}
              <a
                href="tel:+48696379094"
                className="group flex min-w-0 items-center gap-4 border-b border-[#102D5B]/20 py-5 md:gap-5 md:py-8 md:pl-10"
              >
                <Phone
                  size={22}
                  strokeWidth={1.4}
                  className="shrink-0 text-[#B18D43]"
                />

                <div className="min-w-0 flex-1">
                  <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B18D43]">
                    PHONE
                  </div>

                  <div className="text-[16px] font-medium tracking-[-0.025em] sm:text-lg">
                    {PHONE}
                  </div>
                </div>

                <ArrowUpRight
                  size={19}
                  strokeWidth={1.5}
                  className="shrink-0 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </section>

        {/* INTRO COPY */}
        <section className="w-full px-6 pb-12 pt-7 sm:px-10 md:pb-20 md:pt-12 lg:px-20">
          <div className="mx-auto w-full max-w-[1360px]">
            <p className="max-w-[760px] text-[15px] leading-[1.8] text-[#102D5B]/65 md:text-[17px]">
              Whether you're planning a private residence or a complex
              industrial development, we're ready to understand your goals,
              discuss your ideas and help define the next steps. Feel free to
              reach out anytime.
            </p>
          </div>
        </section>

        {/* PROJECT ENQUIRY */}
        <section
          id="enquiry"
          className="w-full px-6 pb-24 pt-6 sm:px-10 md:pb-32 md:pt-12 lg:px-20"
        >
          <div className="mx-auto grid w-full max-w-[1360px] gap-12 border-t border-[#102D5B]/20 pt-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:pt-20">
            {/* FORM INTRO */}
            <div className="min-w-0">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#C9A962]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B18D43]">
                  PROJECT ENQUIRY
                </span>
              </div>

              <h2 className="max-w-[500px] text-[clamp(2.25rem,4vw,4.3rem)] font-semibold leading-[1.07] tracking-[-0.055em]">
                Tell us what
                <br />
                you're building.
              </h2>

              <p className="mt-5 max-w-[390px] text-[15px] leading-7 text-[#102D5B]/60 md:text-[16px] md:leading-8">
                A few details are enough to begin. We'll take it from there.
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="w-full min-w-0">
              {/* PROJECT TYPE */}
              <fieldset className="mb-10">
                <legend className="mb-4 text-[13px] font-semibold">
                  What is your project about?
                </legend>

                <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                  {["Residential", "Industrial"].map((type) => {
                    const selected = projectType === type;

                    return (
                      <button
                        key={type}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => setProjectType(type)}
                        className={`min-h-[48px] border px-4 text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors sm:px-7 sm:text-[13px] ${
                          selected
                            ? "border-[#102D5B] bg-[#102D5B] text-white"
                            : "border-[#102D5B]/25 bg-transparent text-[#102D5B] hover:border-[#102D5B]"
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div className="grid gap-x-8 gap-y-9 md:grid-cols-2">
                {/* NAME */}
                <div className="min-w-0">
                  <label
                    htmlFor="contact-name"
                    className="block text-[13px] font-semibold"
                  >
                    Your name *
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Full name"
                    className={fieldClass}
                  />
                </div>

                {/* EMAIL */}
                <div className="min-w-0">
                  <label
                    htmlFor="contact-email"
                    className="block text-[13px] font-semibold"
                  >
                    Email address *
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className={fieldClass}
                  />
                </div>

                {/* COMPANY */}
                <div className="min-w-0 md:col-span-2">
                  <label
                    htmlFor="contact-company"
                    className="block text-[13px] font-semibold"
                  >
                    Company{" "}
                    <span className="font-normal text-[#102D5B]/45">
                      (optional)
                    </span>
                  </label>

                  <input
                    id="contact-company"
                    type="text"
                    autoComplete="organization"
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                    placeholder="Company or organisation"
                    className={fieldClass}
                  />
                </div>

                {/* MESSAGE */}
                <div className="min-w-0 md:col-span-2">
                  <label
                    htmlFor="contact-message"
                    className="block text-[13px] font-semibold"
                  >
                    Tell us about your project *
                  </label>

                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Location, project type, timeline, or anything you'd like us to know..."
                    className={`${fieldClass} resize-y`}
                  />
                </div>
              </div>

              {/* SUBMIT */}
              <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
                <button
                  type="submit"
                  className="inline-flex min-h-[56px] items-center justify-center gap-5 bg-[#102D5B] px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#1B4179]"
                >
                  PREPARE ENQUIRY
                  <ArrowUpRight size={18} strokeWidth={1.6} />
                </button>

                <p className="max-w-[310px] text-[12px] leading-6 text-[#102D5B]/50">
                  Opens your email app with the enquiry prepared. Review and
                  send it from there.
                </p>
              </div>
            </form>
          </div>
        </section>

        {/* CLOSING */}
        <section className="w-full bg-[#102D5B] px-6 py-11 text-[#FFF9EF] sm:px-10 lg:px-20">
          <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-[19px] font-medium tracking-[-0.03em] md:text-2xl">
              Expertise to plan. Responsibility to deliver.
            </p>

            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/50">
              AURUMBUILD · RESIDENTIAL & INDUSTRIAL
            </span>
          </div>
        </section>
      </main>

      <DivisionFooter division="residential" />
    </>
  );
}