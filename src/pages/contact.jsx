
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  Menu,
  Phone,
  X,
} from "lucide-react";

const EMAIL = "admin@aurumbuild.eu";
const PHONE_DISPLAY = "+48 696 379 094";
const PHONE_LINK = "tel:+48696379094";

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [division, setDivision] = useState("Residential");

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  function updateField(field, value) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  function prepareEmail(event) {
    event.preventDefault();

    const subject =
      `AURUMBUILD ${division} enquiry — ${form.name.trim()}`;

    const body = [
      `Division: ${division}`,
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      form.company.trim()
        ? `Company: ${form.company.trim()}`
        : null,
      "",
      "Project details:",
      form.message.trim(),
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.location.href =
      `mailto:${EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="min-h-screen bg-[#FFF9EF] text-[#102D5B]">
      {/* HEADER */}
      <header className="relative z-50 border-b border-[#102D5B]/15 bg-[#FFF9EF]">
        <div className="mx-auto flex h-[76px] w-full max-w-[1600px] items-center justify-between gap-7 px-6 sm:px-10 lg:h-[92px] lg:px-12 xl:px-20">
          <Link
            to="/"
            aria-label="AURUMBUILD home"
            className="shrink-0"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src="/images/aurumbuild-logo-residential.png"
              alt="AURUMBUILD"
              className="block h-auto w-[167px] sm:w-[187px] xl:w-[210px]"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Main navigation"
            className="ml-auto hidden items-center gap-8 lg:flex"
          >
            <Link
              to="/industrial"
              className="inline-flex items-center gap-1.5 text-[12px] font-medium tracking-[0.03em] transition-opacity hover:opacity-65"
            >
              Industrial
              <ArrowUpRight
                size={14}
                strokeWidth={1.7}
              />
            </Link>

            <Link
              to="/residential"
              className="inline-flex items-center gap-1.5 text-[12px] font-medium tracking-[0.03em] transition-opacity hover:opacity-65"
            >
              Residential
              <ArrowUpRight
                size={14}
                strokeWidth={1.7}
              />
            </Link>

            <span
              aria-current="page"
              className="border-b-2 border-[#C9A962] pb-1 text-[12px] font-semibold tracking-[0.03em]"
            >
              Contact
            </span>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-controls="contact-mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
            onClick={() =>
              setMenuOpen((open) => !open)
            }
            className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center lg:hidden"
          >
            {menuOpen ? (
              <X size={25} strokeWidth={1.7} />
            ) : (
              <Menu size={25} strokeWidth={1.7} />
            )}
          </button>
        </div>

        {/* FULL-WIDTH MOBILE NAVIGATION */}
        {menuOpen && (
          <nav
            id="contact-mobile-navigation"
            aria-label="Mobile navigation"
            className="w-full border-t border-[#102D5B]/10 bg-[#FFF9EF] px-6 pb-6 sm:px-10 lg:hidden"
          >
            <div className="mx-auto max-w-[650px]">
              {[
                {
                  label: "Industrial",
                  to: "/industrial",
                },
                {
                  label: "Residential",
                  to: "/residential",
                },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-[56px] items-center justify-between border-b border-[#102D5B]/10 text-[16px] font-medium"
                >
                  {item.label}
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                  />
                </Link>
              ))}

              <div className="flex min-h-[56px] items-center border-b border-[#102D5B]/10 text-[16px] font-semibold text-[#B18D4B]">
                Contact — current page
              </div>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section className="px-6 pb-20 pt-14 sm:px-10 md:px-12 md:pb-28 md:pt-20 lg:px-20">
          <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 xl:gap-28">

            {/* LEFT: CONTACT INFORMATION */}
            <div className="lg:pt-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#C9A962]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#AD8641]">
                  Contact
                </span>
              </div>

              <h1 className="mt-7 max-w-[650px] text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[1.06] tracking-[-0.055em]">
                Let's talk about
                <br />
                your project.
              </h1>

              <p className="mt-7 max-w-[525px] text-[16px] leading-[1.8] text-[#102D5B]/70">
                A home abroad or a complex industrial
                project — tell us what you're planning.
                We'll help you find the right starting point.
              </p>

              {/* EMAIL */}
              <div className="mt-12 max-w-[540px] border-t border-[#102D5B]/15">
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-center gap-5 border-b border-[#102D5B]/15 py-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#C9A962]/60 text-[#B18D4B]">
                    <Mail
                      size={20}
                      strokeWidth={1.6}
                    />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#AD8641]">
                      Email
                    </span>

                    <span className="mt-1 block break-all text-[17px] font-medium sm:text-[19px]">
                      {EMAIL}
                    </span>
                  </span>

                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.5}
                    className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>

                {/* PHONE */}
                <a
                  href={PHONE_LINK}
                  className="group flex items-center gap-5 border-b border-[#102D5B]/15 py-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#C9A962]/60 text-[#B18D4B]">
                    <Phone
                      size={20}
                      strokeWidth={1.6}
                    />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#AD8641]">
                      Phone
                    </span>

                    <span className="mt-1 block text-[17px] font-medium sm:text-[19px]">
                      {PHONE_DISPLAY}
                    </span>
                  </span>

                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.5}
                    className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </div>

              <p className="mt-7 max-w-[460px] text-[13px] leading-6 text-[#102D5B]/55">
                One point of contact for AURUMBUILD
                Residential and Industrial.
              </p>
            </div>

            {/* RIGHT: PROJECT ENQUIRY */}
            <div className="border border-[#102D5B]/10 bg-[#F5EEDF] p-6 sm:p-9 lg:p-10 xl:p-12">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#C9A962]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#AD8641]">
                  Project enquiry
                </span>
              </div>

              <h2 className="mt-5 text-[clamp(1.9rem,3vw,2.65rem)] font-medium leading-[1.15] tracking-[-0.04em]">
                Tell us what you're building.
              </h2>

              <p className="mt-3 text-[14px] leading-7 text-[#102D5B]/65">
                A few details are enough to begin.
              </p>

              <form
                onSubmit={prepareEmail}
                className="mt-9 space-y-6"
              >
                {/* DIVISION SELECTION */}
                <fieldset>
                  <legend className="mb-3 text-[12px] font-semibold text-[#102D5B]">
                    I'm enquiring about
                  </legend>

                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Residential",
                      "Industrial",
                    ].map((item) => (
                      <button
                        type="button"
                        key={item}
                        aria-pressed={
                          division === item
                        }
                        onClick={() =>
                          setDivision(item)
                        }
                        className={`min-h-[46px] border px-3 text-[13px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#102D5B] ${
                          division === item
                            ? "border-[#102D5B] bg-[#102D5B] text-white"
                            : "border-[#102D5B]/20 bg-[#FFF9EF] text-[#102D5B] hover:border-[#102D5B]/60"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </fieldset>

                {/* NAME AND EMAIL */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[12px] font-semibold">
                      Your name *
                    </span>

                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(event) =>
                        updateField(
                          "name",
                          event.target.value
                        )
                      }
                      className="h-12 w-full rounded-none border border-[#102D5B]/20 bg-[#FFFDF8] px-4 text-[15px] text-[#102D5B] outline-none transition-colors focus:border-[#102D5B]"
                      placeholder="Full name"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-[12px] font-semibold">
                      Email address *
                    </span>

                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      maxLength={150}
                      value={form.email}
                      onChange={(event) =>
                        updateField(
                          "email",
                          event.target.value
                        )
                      }
                      className="h-12 w-full rounded-none border border-[#102D5B]/20 bg-[#FFFDF8] px-4 text-[15px] text-[#102D5B] outline-none transition-colors focus:border-[#102D5B]"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>

                {/* COMPANY */}
                <label className="block">
                  <span className="mb-2 block text-[12px] font-semibold">
                    Company{" "}
                    <span className="font-normal text-[#102D5B]/50">
                      (optional)
                    </span>
                  </span>

                  <input
                    type="text"
                    name="company"
                    autoComplete="organization"
                    maxLength={150}
                    value={form.company}
                    onChange={(event) =>
                      updateField(
                        "company",
                        event.target.value
                      )
                    }
                    className="h-12 w-full rounded-none border border-[#102D5B]/20 bg-[#FFFDF8] px-4 text-[15px] text-[#102D5B] outline-none transition-colors focus:border-[#102D5B]"
                    placeholder="Company or organisation"
                  />
                </label>

                {/* PROJECT DETAILS */}
                <label className="block">
                  <span className="mb-2 block text-[12px] font-semibold">
                    About your project *
                  </span>

                  <textarea
                    name="message"
                    rows={5}
                    required
                    maxLength={2000}
                    value={form.message}
                    onChange={(event) =>
                      updateField(
                        "message",
                        event.target.value
                      )
                    }
                    className="min-h-[140px] w-full resize-y rounded-none border border-[#102D5B]/20 bg-[#FFFDF8] px-4 py-3 text-[15px] leading-7 text-[#102D5B] outline-none transition-colors focus:border-[#102D5B]"
                    placeholder="Where is the project, and how can we help?"
                  />
                </label>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="min-h-[52px] w-full bg-[#102D5B] px-6 text-[12px] font-semibold uppercase tracking-[0.13em] text-white transition-colors hover:bg-[#1A4179] sm:w-auto"
                >
                  Open email to send
                </button>

                <p className="text-[12px] leading-6 text-[#102D5B]/60">
                  This opens your email app with the
                  enquiry prepared. Review and send
                  it there; the website does not
                  submit it automatically.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* CORPORATE FOOTER */}
      <footer className="bg-[#102D5B] px-6 py-10 text-white sm:px-10 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-[1440px] gap-8 border-b border-white/15 pb-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-[14px] font-semibold">
              AURUMBUILD Sp. z o.o.
            </p>

            <p className="mt-2 text-[13px] leading-6 text-white/65">
              Registered office:
              <br />
              ul. Stanisława Konarskiego 18C
              <br />
              44-100 Gliwice, Poland
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-white/65">
            <span>KRS 0001252561</span>
            <span>NIP 6312742513</span>
            <span>REGON 54519473000000</span>
          </div>
        </div>

        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 pt-6 text-[12px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} AURUMBUILD Sp. z o.o.
          </span>

          <span>
            Engineering · Construction · Project Delivery
          </span>
        </div>
      </footer>
    </div>
  );
}
