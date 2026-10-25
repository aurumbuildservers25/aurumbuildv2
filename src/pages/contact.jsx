
import React, { useState } from "react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

import DivisionHeader from "../components/DivisionHeader";
import DivisionFooter from "../components/DivisionFooter";

const EMAIL = "admin@aurumbuild.eu";
const PHONE = "+48 696 379 094";

export default function Contact() {
  const [projectType, setProjectType] = useState("Residential");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const subject = `${projectType} project enquiry — AURUMBUILD`;

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
        <section className="w-full px-6 pb-20 pt-16 sm:px-10 md:pb-28 md:pt-24 lg:px-20">
          <div className="mx-auto w-full max-w-[1320px]">
            <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
              {/* INTRODUCTION */}
              <div className="min-w-0">
                <div className="mb-8 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#C9A962]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B18D43]">
                    CONTACT
                  </span>
                </div>

                <h1 className="max-w-[650px] text-[clamp(2.9rem,6vw,5.5rem)] font-semibold leading-[1.04] tracking-[-0.055em]">
                  Let's talk about
                  <br className="hidden sm:block" /> your project.
                </h1>

                <p className="mt-7 max-w-[530px] text-[16px] leading-[1.8] text-[#102D5B]/65 md:text-lg">
                  Planning a private property or managing a complex
                  construction project? Tell us what you have in mind.
                  We'll help you find the right starting point.
                </p>

                <div className="mt-12 max-w-[560px] border-t border-[#102D5B]/15">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="group flex items-center gap-4 border-b border-[#102D5B]/15 py-6"
                  >
                    <Mail
                      size={22}
                      strokeWidth={1.5}
                      className="shrink-0 text-[#B18D43]"
                    />

                    <div className="min-w-0 flex-1">
                      <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B18D43]">
                        EMAIL
                      </div>
                      <div className="break-all text-[16px] font-medium sm:text-lg">
                        {EMAIL}
                      </div>
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href="tel:+48696379094"
                    className="group flex items-center gap-4 border-b border-[#102D5B]/15 py-6"
                  >
                    <Phone
                      size={22}
                      strokeWidth={1.5}
                      className="shrink-0 text-[#B18D43]"
                    />

                    <div className="min-w-0 flex-1">
                      <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B18D43]">
                        PHONE
                      </div>
                      <div className="text-[16px] font-medium sm:text-lg">
                        {PHONE}
                      </div>
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </a>
                </div>

                <p className="mt-8 text-[13px] leading-7 text-[#102D5B]/45">
                  One point of contact for AURUMBUILD Residential
                  and Industrial.
                </p>
              </div>

              {/* ENQUIRY FORM */}
              <div className="min-w-0">
                <div className="w-full bg-[#F3EBDD] p-6 sm:p-9 lg:p-12">
                  <div className="mb-7 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#C9A962]" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B18D43]">
                      PROJECT ENQUIRY
                    </span>
                  </div>

                  <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-[1.12] tracking-[-0.045em]">
                    Tell us what
                    <br /> you're building.
                  </h2>

                  <p className="mt-4 text-[15px] leading-7 text-[#102D5B]/60">
                    A few details are enough to begin.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-9 space-y-6"
                  >
                    <fieldset>
                      <legend className="mb-3 text-[13px] font-semibold">
                        Project type
                      </legend>

                      <div className="grid grid-cols-2 gap-2">
                        {["Residential", "Industrial"].map((type) => (
                          <button
                            key={type}
                            type="button"
                            aria-pressed={projectType === type}
                            onClick={() => setProjectType(type)}
                            className={`min-w-0 border px-2 py-4 text-[13px] font-semibold transition-colors sm:text-sm ${
                              projectType === type
                                ? "border-[#102D5B] bg-[#102D5B] text-white"
                                : "border-[#102D5B]/20 bg-[#FFF9EF] text-[#102D5B] hover:border-[#102D5B]"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </fieldset>

                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-[13px] font-semibold"
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
                        className="w-full min-w-0 rounded-none border border-[#102D5B]/20 bg-[#FFF9EF] px-4 py-4 text-[15px] text-[#102D5B] outline-none placeholder:text-[#102D5B]/35 focus:border-[#B18D43]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block text-[13px] font-semibold"
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
                        className="w-full min-w-0 rounded-none border border-[#102D5B]/20 bg-[#FFF9EF] px-4 py-4 text-[15px] text-[#102D5B] outline-none placeholder:text-[#102D5B]/35 focus:border-[#B18D43]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-company"
                        className="mb-2 block text-[13px] font-semibold"
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
                        className="w-full min-w-0 rounded-none border border-[#102D5B]/20 bg-[#FFF9EF] px-4 py-4 text-[15px] text-[#102D5B] outline-none placeholder:text-[#102D5B]/35 focus:border-[#B18D43]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="mb-2 block text-[13px] font-semibold"
                      >
                        About your project *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        required
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        placeholder="Where is the project, and how can we help?"
                        className="w-full min-w-0 resize-y rounded-none border border-[#102D5B]/20 bg-[#FFF9EF] px-4 py-4 text-[15px] leading-7 text-[#102D5B] outline-none placeholder:text-[#102D5B]/35 focus:border-[#B18D43]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-3 bg-[#102D5B] px-5 py-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#1A4078]"
                    >
                      PREPARE EMAIL
                      <ArrowUpRight size={17} />
                    </button>

                    <p className="text-[12px] leading-6 text-[#102D5B]/50">
                      This opens your email application with the
                      enquiry prepared. Review and send it there;
                      the website does not submit automatically.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <DivisionFooter division="residential" />
    </>
  );
}
