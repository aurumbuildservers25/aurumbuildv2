
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import DivisionHeader from "../components/DivisionHeader";
import DivisionFooter from "../components/DivisionFooter";

const PHOTO = "/images/residential-pool-v22.jpg";

const services = [
  {
    number: "01",
    label: "PROJECT MANAGEMENT",
    title: "Clarity from the first decision.",
    description:
      "Coordination across designers, consultants, contractors, budgets and programme.",
  },
  {
    number: "02",
    label: "CONSTRUCTION",
    title: "Delivery with oversight.",
    description:
      "Site coordination, quality control and technical supervision.",
  },
  {
    number: "03",
    label: "TURNKEY",
    title: "From concept to keys.",
    description:
      "Integrated support through completion and handover.",
  },
];

const steps = [
  {
    number: "01",
    title: "Define",
    description:
      "Understand your vision, location, scope and priorities.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Align design, permissions, budget and programme.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Coordinate construction, quality and site delivery.",
  },
  {
    number: "04",
    title: "Handover",
    description:
      "Bring the project to completion with clear documentation.",
  },
];

const mobileNavigation = [
  { label: "Residential", href: "#top", current: true },
  { label: "Our Services", href: "#services" },
  { label: "How We Work", href: "#process" },
  { label: "Dreamhouse", href: "#dreamhouse" },
  { label: "Industrial Division", href: "/industrial", route: true },
  { label: "Contact", href: "/contact", route: true },
];

function ResidentialHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-[#102D5B]/10 bg-[#FFF9EF]">
      <div className="mx-auto flex h-[76px] max-w-[1500px] items-center justify-between px-6 sm:px-10 md:h-[90px] md:px-12 lg:px-20">
        <Link
          to="/"
          aria-label="AURUMBuild home"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/images/aurumbuild-logo.png"
            alt="AURUMBuild"
            className="block h-auto w-[165px] object-contain sm:w-[185px] lg:w-[200px]"
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex xl:gap-9"
        >
          <Link
            to="/industrial"
            className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#102D5B]/55 transition-colors hover:text-[#102D5B]"
          >
            Industrial
          </Link>

          <a
            href="#top"
            className="border-b-2 border-[#C9A962] pb-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#102D5B]"
          >
            Residential
          </a>

          <a
            href="#services"
            className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#102D5B]/65 transition-colors hover:text-[#102D5B]"
          >
            Services
          </a>

          <a
            href="#process"
            className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#102D5B]/65 transition-colors hover:text-[#102D5B]"
          >
            How We Work
          </a>

          <a
            href="#dreamhouse"
            className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#102D5B]/65 transition-colors hover:text-[#102D5B]"
          >
            Dreamhouse
          </a>

          <Link
            to="/contact"
            className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#102D5B]/65 transition-colors hover:text-[#102D5B]"
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="residential-mobile-menu"
          onClick={() => setMenuOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center text-[#102D5B] lg:hidden"
        >
          {menuOpen ? (
            <X size={25} strokeWidth={1.7} />
          ) : (
            <Menu size={25} strokeWidth={1.7} />
          )}
        </button>
      </div>

      {/* FULL-WIDTH MOBILE MENU */}
      {menuOpen && (
        <nav
          id="residential-mobile-menu"
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full z-50 border-t border-[#102D5B]/10 bg-[#FFF9EF] px-6 pb-7 pt-5 shadow-[0_18px_30px_rgba(16,45,91,0.08)] sm:px-10 lg:hidden"
        >
          <div className="mx-auto max-w-[650px]">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B18D4B]">
              Explore
            </p>

            {mobileNavigation.map((item) => {
              const content = (
                <>
                  <span>{item.label}</span>

                  {item.current ? (
                    <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#B18D4B]">
                      Current
                    </span>
                  ) : (
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.5}
                      className="text-[#102D5B]/45"
                    />
                  )}
                </>
              );

              const className = `flex min-h-[54px] items-center justify-between gap-4 border-b border-[#102D5B]/10 py-3 text-[17px] font-medium tracking-[-0.02em] ${
                item.current
                  ? "text-[#B18D4B]"
                  : "text-[#102D5B]"
              }`;

              return item.route ? (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={className}
                >
                  {content}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={className}
                >
                  {content}
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}

export default function Residential() {
  return (
    <>
      <DivisionHeader division="residential" />

      <main
        id="top"
        className="overflow-x-hidden bg-[#FFF9EF] text-[#102D5B]"
      >
        {/* HERO */}
        <section className="grid lg:min-h-[610px] lg:grid-cols-[1.04fr_0.96fr]">
          <div className="flex flex-col justify-center px-6 pb-12 pt-14 sm:px-10 md:px-12 md:py-20 lg:px-16 xl:px-20">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9A962]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#AD8641]">
                Residential
              </span>
            </div>

            <h1 className="mt-7 max-w-[720px] text-[clamp(2.85rem,5.3vw,5.7rem)] font-medium leading-[1.06] tracking-[-0.055em]">
              Build abroad.
              <br />
              With confidence.
            </h1>

            <p className="mt-6 max-w-[500px] text-[15px] leading-[1.75] text-[#102D5B]/70 md:text-[17px]">
              From first plans to final handover,
              one trusted partner for your property
              project in Europe.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex min-h-12 w-fit items-center gap-7 bg-[#102D5B] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#1A4179]"
            >
              Discuss your project
              <ArrowUpRight size={17} strokeWidth={1.6} />
            </Link>
          </div>

          <div className="relative h-[270px] overflow-hidden bg-[#D9C6A8] sm:h-[390px] lg:h-auto lg:min-h-[610px]">
            <img
              src={PHOTO}
              alt="Mediterranean stone villa with a swimming pool and sea view"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </section>

        {/* INTRODUCTION & CLIENTS */}
        <section
          id="approach"
          className="scroll-mt-24 px-6 py-20 sm:px-10 md:px-12 md:py-28 lg:px-20"
        >
          <div className="mx-auto max-w-[1320px]">
            <div className="grid gap-9 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#AD8641]">
                  A clear way forward
                </p>

                <h2 className="mt-5 max-w-[730px] text-[clamp(2.1rem,3.8vw,4rem)] font-medium leading-[1.13] tracking-[-0.045em]">
                  Building abroad shouldn't mean
                  managing everything alone.
                </h2>
              </div>

              <div className="self-end">
                <p className="text-[15px] leading-8 text-[#102D5B]/70">
                  Different countries, different teams,
                  countless decisions. We bring design,
                  construction and delivery together
                  under one clear point of coordination.
                </p>

                <div className="my-6 h-px w-14 bg-[#C9A962]" />

                <p className="text-[15px] leading-8 text-[#102D5B]/70">
                  Whether it's a family retreat or a
                  property investment, we keep the
                  process understandable and the
                  responsibilities clear.
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-0 border-y border-[#102D5B]/15 md:mt-20 md:grid-cols-2">
              <article className="py-9 md:py-12 md:pr-12">
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#AD8641]">
                  01 / Private Clients
                </span>

                <h3 className="mt-5 max-w-[440px] text-[clamp(1.75rem,2.7vw,2.8rem)] font-medium leading-[1.15] tracking-[-0.04em]">
                  A home that feels like yours.
                </h3>

                <p className="mt-4 max-w-[430px] text-[14px] leading-7 text-[#102D5B]/65">
                  For individuals and families creating
                  a primary residence, holiday home or
                  second home abroad.
                </p>
              </article>

              <article className="border-t border-[#102D5B]/15 py-9 md:border-l md:border-t-0 md:py-12 md:pl-12">
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#AD8641]">
                  02 / Investors & Developers
                </span>

                <h3 className="mt-5 max-w-[440px] text-[clamp(1.75rem,2.7vw,2.8rem)] font-medium leading-[1.15] tracking-[-0.04em]">
                  A project with a clear direction.
                </h3>

                <p className="mt-4 max-w-[430px] text-[14px] leading-7 text-[#102D5B]/65">
                  For property investors and developers
                  seeking coordinated planning,
                  execution and oversight.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="scroll-mt-24 bg-[#102D5B] px-6 py-20 text-white sm:px-10 md:px-12 md:py-28 lg:px-20"
        >
          <div className="mx-auto max-w-[1320px]">
            <div className="grid gap-7 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A962]">
                  What we do
                </p>

                <h2 className="mt-5 text-[clamp(2.2rem,4vw,4.2rem)] font-medium leading-[1.1] tracking-[-0.045em]">
                  One partner.
                  <br />
                  Clear responsibility.
                </h2>
              </div>

              <p className="max-w-[430px] text-[15px] leading-8 text-white/65">
                Support shaped around your project,
                from targeted management services
                to coordinated turnkey delivery.
              </p>
            </div>

            <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr] lg:grid-rows-2">
              {services.map((service, index) => (
                <article
                  key={service.number}
                  className={`flex flex-col justify-between p-8 sm:p-10 ${
                    index === 0
                      ? "min-h-[320px] bg-[#1D4174] lg:row-span-2 lg:min-h-[530px] lg:p-12"
                      : "min-h-[240px] border border-white/15 bg-white/[0.045]"
                  }`}
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#D7B778]">
                    {service.number} / {service.label}
                  </span>

                  <div className="mt-14">
                    <h3
                      className={`max-w-[430px] font-medium leading-[1.13] tracking-[-0.04em] ${
                        index === 0
                          ? "text-[clamp(2rem,3.1vw,3.6rem)]"
                          : "text-[clamp(1.6rem,2.2vw,2.3rem)]"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p className="mt-5 max-w-[400px] text-[14px] leading-7 text-white/65">
                      {service.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section
          id="process"
          className="scroll-mt-24 px-6 py-20 sm:px-10 md:px-12 md:py-28 lg:px-20"
        >
          <div className="mx-auto max-w-[1320px]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#AD8641]">
              How we work
            </p>

            <h2 className="mt-5 text-[clamp(2.1rem,3.8vw,4rem)] font-medium leading-[1.12] tracking-[-0.045em]">
              From first conversation
              <br />
              to final handover.
            </h2>

            <p className="mt-6 max-w-[580px] text-[15px] leading-8 text-[#102D5B]/65">
              A straightforward journey with defined
              stages and clear communication.
            </p>

            <div className="relative mt-14">
              <div className="absolute bottom-5 left-[7px] top-[7px] w-px bg-[#C9A962]/70 md:bottom-auto md:left-0 md:right-0 md:top-[7px] md:h-px md:w-auto" />

              <div className="grid gap-10 md:grid-cols-4 md:gap-7">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="relative pl-10 md:pl-0 md:pt-10"
                  >
                    <span className="absolute left-0 top-0 h-[15px] w-[15px] rounded-full border-[3px] border-[#C9A962] bg-[#FFF9EF] md:top-0" />

                    <span className="text-[11px] font-semibold tracking-[0.15em] text-[#AD8641]">
                      {step.number}
                    </span>

                    <h3 className="mt-3 text-[25px] font-medium tracking-[-0.035em]">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-[250px] text-[14px] leading-7 text-[#102D5B]/65">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY WORK WITH US */}
        <section className="border-y border-[#102D5B]/10 bg-[#F4EADB] px-6 py-20 sm:px-10 md:px-12 md:py-24 lg:px-20">
          <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-24">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#AD8641]">
                Why work with us
              </p>

              <h2 className="mt-5 text-[clamp(2.1rem,3.7vw,4rem)] font-medium leading-[1.12] tracking-[-0.045em]">
                Personal attention.
                <br />
                Professional control.
              </h2>

              <p className="mt-7 max-w-[540px] text-[15px] leading-8 text-[#102D5B]/65">
                Construction knowledge and practical
                coordination, combined with the attention
                your project deserves.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "One point of contact",
                "Technical understanding",
                "Clear communication",
                "Quality-focused oversight",
                "International perspective",
                "Defined responsibilities",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="flex min-h-[76px] items-center gap-3 border-b border-[#102D5B]/15 py-4"
                >
                  <span className="h-1.5 w-1.5 shrink-0 bg-[#C9A962]" />

                  <span className="text-[14px] font-medium leading-6">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DREAMHOUSE */}
        <section
          id="dreamhouse"
          className="grid scroll-mt-24 lg:grid-cols-2"
        >
          <div className="relative h-[290px] overflow-hidden bg-[#D9C6A8] sm:h-[420px] lg:h-auto lg:min-h-[510px]">
            <img
              src={PHOTO}
              alt="Mediterranean home with swimming pool"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-16 sm:px-10 md:px-12 md:py-20 lg:px-16 xl:px-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#AD8641]">
              Dreamhouse
            </p>

            <h2 className="mt-5 text-[clamp(2.1rem,3.7vw,4rem)] font-medium leading-[1.12] tracking-[-0.045em]">
              Your home.
              <br />
              Thoughtfully delivered.
            </h2>

            <p className="mt-7 max-w-[500px] text-[15px] leading-8 text-[#102D5B]/65">
              Our dedicated approach for private
              clients planning a home abroad,
              bringing design coordination,
              construction management and delivery
              into one process.
            </p>

            <Link
              to="/Dreamhouse"
              className="mt-8 inline-flex w-fit items-center gap-3 border-b border-[#102D5B]/35 pb-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-opacity hover:opacity-65"
            >
              Explore Dreamhouse
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>

        {/* APPROVED GREEN CONTACT SECTION */}
        <section className="bg-[#3F6B68] px-6 py-20 text-white sm:px-10 md:px-12 md:py-28 lg:px-20">
          <div className="mx-auto grid max-w-[1320px] gap-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E4D2A7]">
                Start a conversation
              </p>

              <h2 className="mt-5 text-[clamp(2.5rem,4.8vw,5rem)] font-medium leading-[1.08] tracking-[-0.05em]">
                Tell us what
                <br />
                you want to build.
              </h2>
            </div>

            <div>
              <p className="max-w-[450px] text-[15px] leading-[1.8] text-white/80">
                Whether you're exploring an idea,
                planning a home or preparing an
                investment, we'd like to understand
                your project.
              </p>

              <Link
                to="/contact"
                className="mt-7 inline-flex min-h-12 items-center gap-8 bg-[#FFF9EF] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#102D5B] transition-colors hover:bg-white"
              >
                Discuss your project
                <ArrowUpRight size={17} strokeWidth={1.8} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <DivisionFooter division="residential" />
    </>
  );
}
