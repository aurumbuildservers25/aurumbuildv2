
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
const PHONE = "+48 696 379 094";

const NAV_ITEMS = [
  { label: "Industrial", to: "/industrial" },
  { label: "Residential", to: "/residential" },
  { label: "Contact", to: "/contact" },
];

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
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function sendEnquiry(event) {
    event.preventDefault();

    const subject = `AURUMBUILD ${division} enquiry`;

    const body = [
      `Division: ${division}`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Company: ${form.company}` : "",
      "",
      "Project details:",
      form.message,
    ]
      .filter((line) => line !== "")
      .join("\n");

    window.location.href =
      `mailto:${EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="min-h-screen bg-[#FFF9EF] text-[#102D5B]">

      {/* HEADER */}
      <header className="relative z-50 border-b border-[#102D5B]/10 bg-[#FFF9EF]">
        <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-6 sm:px-10 lg:h-[90px] lg:px-16 xl:px-20">

          <Link
            to="/"
            aria-label="AURUMBUILD home"
            onClick={() => setMenuOpen(false)}
            className="shrink-0"
          >
            <img
              src="/images/aurumbuild-logo-residential.png"
              alt="AURUMBUILD"
              className="h-auto w-[167px] sm:w-[190px] lg:w-[205px]"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-9 lg:flex"
          >
            {NAV_ITEMS.map((item) => {
              const active = item.to === "/contact";

              return active ? (
                <span
                  key={item.to}
                  aria-current="page"
                  className="border-b-2 border-[#C9A962] pb-1 text-[13px] font-semibold"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-[13px] font-medium transition-colors hover:text-[#B18D4B]"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="contact-mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center lg:hidden"
          >
            {menuOpen ? (
              <X size={25} strokeWidth={1.7} />
            ) : (
              <Menu size={25} strokeWidth={1.7} />
            )}
          </button>
        </div>

        {/* MOBILE NAV — FULL WIDTH, NO OVERLAY */}
        {menuOpen && (
          <nav
            id="contact-mobile-menu"
            aria-label="Mobile navigation"
            className="border-t border-[#102D5B]/10 bg-[#FFF9EF] px-6 pb-5 sm:px-10 lg:hidden"
          >
            {NAV_ITEMS.map((item) => {
              const active = item.to === "/contact";

              return active ? (
                <div
                  key={item.to}
                  aria-current="page"
                  className="flex min-h-[56px] items-center border-b border-[#102D5B]/10 text-[16px] font-semibold text-[#B18D4B]"
                >
                  Contact
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-[56px] items-center justify-between border-b border-[#102D5B]/10 text-[16px] font-medium"
                >
                  {item.label}
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                  />
                </Link>
              );
            })}
          </nav>
        )}
      </header>

      <main>
        {/* INTRO + CONTACT DETAILS + FORM */}
        <section className="px-6 pb-16 pt-12 sm:px-10 md:px-12 md:pb-24 md:pt-20 lg:px-16 xl:px-20">
          <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 xl:gap-28">

            {/* LEFT COLUMN */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#C9A962]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B18D4B]">
                  Contact
                </span>
              </div>

              <h1 className="mt-6 max-w-[600px] text-[clamp(2.65rem,5vw,5.1rem)] font-semibold leading-[1.04] tracking-[-0.055em]">
                Let's build
                <br />
                something together.
              </h1>

              <p className="mt-6 max-w-[490px] text-[16px] leading-[1.7] text-[#102D5B]/65">
                Planning a private property or managing
                a complex construction project?
                Start the conversation with AURUMBUILD.
              </p>

              {/* CONTACT LINKS */}
              <div className="mt-9 max-w-[530px] border-t border-[#102D5B]/15 lg:mt-12">

                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-center gap-4 border-b border-[#102D5B]/15 py-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center text-[#B18D4B]">
                    <Mail size={22} strokeWidth={1.5} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#B18D4B]">
                      Email
                    </span>

                    <span className="mt-1 block break-all text-[16px] font-medium sm:text-[18px]">
                      {EMAIL}
                    </span>
                  </span>

                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.5}
                    className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="tel:+48696379094"
                  className="group flex items-center gap-4 border-b border-[#102D5B]/15 py-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center text-[#B18D4B]">
                    <Phone size={22} strokeWidth={1.5} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#B18D4B]">
                      Phone
                    </span>

                    <span className="mt-1 block text-[16px] font-medium sm:text-[18px]">
                      {PHONE}
                    </span>
                  </span>

                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.5}
                    className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN — ENQUIRY FORM */}
            <div className="bg-[#F3EBDD] p-6 sm:p-9 lg:p-10 xl:p-12">

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#C9A962]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B18D4B]">
                  Project enquiry
                </span>
              </div>

              <h2 className="mt-5 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.04em]">
                Tell us about your project.
              </h2>

              <p className="mt-3 text-[14px] leading-6 text-[#102D5B]/60">
                A few details are enough to get started.
              </p>

              <form
                onSubmit={sendEnquiry}
                className="mt-7 space-y-5"
              >
                {/* DIVISION */}
                <fieldset>
                  <legend className="mb-3 text-[12px] font-semibold">
                    Project type
                  </legend>

                  <div className="grid grid-cols-2 gap-2">
                    {["Residential", "Industrial"].map((item) => (
                      <button
                        key={item}
                        type="button"
                        aria-pressed={division === item}
                        onClick={() => setDivision(item)}
                        className={`min-h-[45px] border px-3 text-[13px] font-semibold transition-colors ${
                          division === item
                            ? "border-[#102D5B] bg-[#102D5B] text-white"
                            : "border-[#102D5B]/20 bg-[#FFF9EF] text-[#102D5B] hover:border-[#102D5B]/50"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </fieldset>

                {/* NAME */}
                <label className="block">
                  <span className="mb-2 block text-[12px] font-semibold">
                    Name *
                  </span>

                  <input
                    type="text"
                    required
                    autoComplete="name"
                    maxLength={100}
                    value={form.name}
                    onChange={(event) =>
                      updateField("name", event.target.value)
                    }
                    placeholder="Your name"
                    className="h-12 w-full rounded-none border border-[#102D5B]/15 bg-[#FFFDF8] px-4 text-[15px] outline-none focus:border-[#102D5B]"
                  />
                </label>

                {/* EMAIL */}
                <label className="block">
                  <span className="mb-2 block text-[12px] font-semibold">
                    Email *
                  </span>

                  <input
                    type="email"
                    required
                    autoComplete="email"
                    maxLength={150}
                    value={form.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                    placeholder="you@example.com"
                    className="h-12 w-full rounded-none border border-[#102D5B]/15 bg-[#FFFDF8] px-4 text-[15px] outline-none focus:border-[#102D5B]"
                  />
                </label>

                {/* COMPANY */}
                <label className="block">
                  <span className="mb-2 block text-[12px] font-semibold">
                    Company{" "}
                    <span className="font-normal text-[#102D5B]/45">
                      (optional)
                    </span>
                  </span>

                  <input
                    type="text"
                    autoComplete="organization"
                    maxLength={150}
                    value={form.company}
                    onChange={(event) =>
                      updateField("company", event.target.value)
                    }
                    placeholder="Company or organisation"
                    className="h-12 w-full rounded-none border border-[#102D5B]/15 bg-[#FFFDF8] px-4 text-[15px] outline-none focus:border-[#102D5B]"
                  />
                </label>

                {/* MESSAGE */}
                <label className="block">
                  <span className="mb-2 block text-[12px] font-semibold">
                    Project details *
                  </span>

                  <textarea
                    required
                    rows={4}
                    maxLength={2000}
                    value={form.message}
                    onChange={(event) =>
                      updateField("message", event.target.value)
                    }
                    placeholder="Where is the project and how can we help?"
                    className="min-h-[120px] w-full resize-y rounded-none border border-[#102D5B]/15 bg-[#FFFDF8] px-4 py-3 text-[15px] leading-6 outline-none focus:border-[#102D5B]"
                  />
                </label>

                <button
                  type="submit"
                  className="flex min-h-[52px] w-full items-center justify-center gap-3 bg-[#102D5B] px-5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#1B4076]"
                >
                  Prepare email
                  <ArrowUpRight size={17} strokeWidth={1.7} />
                </button>

                <p className="text-[12px] leading-5 text-[#102D5B]/55">
                  Your email app will open with the
                  enquiry prepared for you to review
                  and send.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#102D5B] px-6 py-9 text-white sm:px-10 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-6 border-b border-white/15 pb-7 md:flex-row md:items-end">

            <div>
              <p className="text-[14px] font-semibold">
                AURUMBUILD Sp. z o.o.
              </p>

              <p className="mt-2 text-[12px] leading-6 text-white/60">
                Registered office:
                <br />
                ul. Stanisława Konarskiego 18C
                <br />
                44-100 Gliwice, Poland
              </p>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-white/60">
              <span>KRS 0001252561</span>
              <span>NIP 6312742513</span>
              <span>REGON 54519473000000</span>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-2 pt-6 text-[12px] text-white/45 sm:flex-row">
            <span>
              © {new Date().getFullYear()} AURUMBUILD Sp. z o.o.
            </span>

            <span>
              Engineering · Construction · Project Delivery
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
