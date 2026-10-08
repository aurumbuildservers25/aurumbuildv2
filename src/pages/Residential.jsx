
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
} from "lucide-react";

import DivisionHeader from "../components/DivisionHeader";
import DivisionFooter from "../components/DivisionFooter";

const services = [
  {
    number: "01",
    title: "Project Management",
    description:
      "One point of coordination for design, consultants, contractors, budget and programme.",
  },
  {
    number: "02",
    title: "Construction Delivery",
    description:
      "Practical site management, technical coordination and quality oversight through completion.",
  },
  {
    number: "03",
    title: "Investor Representation",
    description:
      "Independent project oversight and clear reporting for clients managing investments from abroad.",
  },
  {
    number: "04",
    title: "Turnkey Delivery",
    description:
      "Coordinated support from early planning and construction through finishing and handover.",
  },
];

const stages = [
  {
    number: "01",
    title: "Plan",
    text: "Understand your vision, site, priorities and project requirements.",
  },
  {
    number: "02",
    title: "Prepare",
    text: "Coordinate design, approvals, consultants and the delivery strategy.",
  },
  {
    number: "03",
    title: "Build",
    text: "Oversee execution, programme, coordination and construction quality.",
  },
  {
    number: "04",
    title: "Deliver",
    text: "Manage completion, documentation and handover.",
  },
];

const navigation = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Dreamhouse", href: "#dreamhouse" },
];

export default function Residential() {
  return (
    <>
      <DivisionHeader division="residential" />

      <main className="overflow-x-hidden bg-[#F8F6F1] text-[#0F2740]">

        {/* DIVISION NAVIGATION */}
        <nav
          aria-label="Residential navigation"
          className="border-b border-[#0F2740]/10 bg-[#F8F6F1]"
        >
          <div className="mx-auto flex max-w-[1440px] items-center gap-6 overflow-x-auto px-6 py-4 sm:px-10 md:px-12 lg:px-20">
            <span className="hidden shrink-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B58B42] md:block">
              Residential
            </span>

            <span className="hidden h-4 w-px bg-[#0F2740]/15 md:block" />

            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.09em] text-[#0F2740]/65 transition-colors hover:text-[#0F2740]"
              >
                {item.label}
              </a>
            ))}

            <Link
              to="/contact"
              className="ml-auto shrink-0 text-[11px] font-semibold uppercase tracking-[0.09em] text-[#0F2740]"
            >
              Contact <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </nav>

        {/* HERO */}
        <section className="border-b border-[#0F2740]/10">
          <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[1.12fr_0.88fr]">
            <div className="flex flex-col justify-center px-6 pb-16 pt-14 sm:px-10 md:px-12 md:py-20 lg:min-h-[560px] lg:px-20 lg:py-20">
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#C9A962]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A77E36]">
                  AURUMBUILD RESIDENTIAL
                </span>
              </div>

              <h1 className="mt-8 max-w-[780px] text-[clamp(2.9rem,5.6vw,5.8rem)] font-medium leading-[1.04] tracking-[-0.06em]">
                Build abroad.
                <br />
                With confidence.
              </h1>

              <p className="mt-7 max-w-[520px] text-[16px] leading-[1.7] text-[#0F2740]/65 md:text-[17px]">
                From planning to handover, one trusted
                partner for your property project in Europe.
              </p>

              <div className="mt-9">
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center justify-between gap-8 bg-[#0F2740] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#23425D]"
                >
                  Discuss your project
                  <ArrowUpRight size={17} strokeWidth={1.8} />
                </Link>
              </div>
            </div>

            {/* DESKTOP BRAND COMPOSITION */}
            <div className="relative hidden min-h-[560px] overflow-hidden border-l border-[#0F2740]/10 bg-[#EAE8E1] lg:flex lg:flex-col lg:justify-between">
              <div className="flex items-start justify-between p-12">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0F2740]/45">
                  AURUMBUILD / 02
                </span>

                <ArrowUpRight
                  size={25}
                  strokeWidth={1.2}
                  className="text-[#B58B42]"
                />
              </div>

              <div className="px-12 pb-14">
                <div className="mb-7 h-px w-16 bg-[#C9A962]" />

                <p className="max-w-[360px] text-[clamp(1.8rem,2.5vw,2.8rem)] font-normal leading-[1.2] tracking-[-0.04em]">
                  Your vision.
                  <br />
                  Our responsibility.
                </p>

                <p className="mt-6 max-w-[320px] text-[13px] leading-6 text-[#0F2740]/55">
                  Private homes and residential
                  investments, managed with care
                  and technical understanding.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE SERVE */}
        <section
          id="clients"
          className="scroll-mt-24 px-6 py-16 sm:px-10 md:px-12 md:py-24 lg:px-20"
        >
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A77E36]">
                  Who we work with
                </p>

                <h2 className="mt-5 text-[clamp(2.1rem,3.8vw,3.8rem)] font-medium leading-[1.12] tracking-[-0.045em]">
                  Built around
                  <br />
                  your ambitions.
                </h2>
              </div>

              <p className="max-w-[580px] self-end text-[15px] leading-[1.8] text-[#0F2740]/65 md:text-[16px]">
                Building or investing in another country
                involves many moving parts. We bring
                the people, decisions and delivery
                process together under clear coordination.
              </p>
            </div>

            <div className="mt-12 grid border-y border-[#0F2740]/15 md:grid-cols-2">
              <div className="py-9 md:pr-12 md:py-12">
                <span className="text-[11px] font-semibold tracking-[0.14em] text-[#B58B42]">
                  01
                </span>

                <h3 className="mt-5 text-[25px] font-medium tracking-[-0.035em]">
                  Private Clients
                </h3>

                <p className="mt-3 max-w-[480px] text-[14px] leading-7 text-[#0F2740]/60">
                  Homes, holiday residences and
                  personal property projects
                  requiring dependable local coordination.
                </p>
              </div>

              <div className="border-t border-[#0F2740]/15 py-9 md:border-l md:border-t-0 md:py-12 md:pl-12">
                <span className="text-[11px] font-semibold tracking-[0.14em] text-[#B58B42]">
                  02
                </span>

                <h3 className="mt-5 text-[25px] font-medium tracking-[-0.035em]">
                  Investors & Developers
                </h3>

                <p className="mt-3 max-w-[480px] text-[14px] leading-7 text-[#0F2740]/60">
                  Residential investments and
                  developments needing structured
                  management and delivery oversight.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES - NAVY CONTRAST */}
        <section
          id="services"
          className="scroll-mt-24 bg-[#0F2740] px-6 py-16 text-[#F8F6F1] sm:px-10 md:px-12 md:py-24 lg:px-20"
        >
          <div className="mx-auto max-w-[1280px]">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end md:gap-12">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C9A962]">
                  What we deliver
                </p>

                <h2 className="mt-5 text-[clamp(2.1rem,3.8vw,3.8rem)] font-medium leading-[1.12] tracking-[-0.045em]">
                  One partner.
                  <br />
                  Clear responsibility.
                </h2>
              </div>

              <p className="max-w-[380px] text-[14px] leading-7 text-white/60">
                The right level of support for
                your project, from targeted
                management to coordinated delivery.
              </p>
            </div>

            <div className="mt-12 grid border-t border-white/20 md:grid-cols-2">
              {services.map((service, index) => (
                <div
                  key={service.number}
                  className={`border-b border-white/20 py-8 md:py-10 ${
                    index % 2 === 0
                      ? "md:pr-10"
                      : "md:border-l md:border-white/20 md:pl-10"
                  }`}
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="text-[11px] font-semibold tracking-[0.15em] text-[#C9A962]">
                      {service.number}
                    </span>

                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.4}
                      className="text-white/35"
                    />
                  </div>

                  <h3 className="mt-7 text-[23px] font-medium leading-[1.2] tracking-[-0.035em] md:text-[27px]">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-[440px] text-[14px] leading-7 text-white/60">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section
          id="approach"
          className="scroll-mt-24 px-6 py-16 sm:px-10 md:px-12 md:py-24 lg:px-20"
        >
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A77E36]">
                  Our approach
                </p>

                <h2 className="mt-5 text-[clamp(2.1rem,3.8vw,3.8rem)] font-medium leading-[1.12] tracking-[-0.045em]">
                  A clear path
                  <br />
                  to completion.
                </h2>
              </div>

              <p className="max-w-[540px] self-end text-[15px] leading-[1.8] text-[#0F2740]/65">
                Every project is different.
                Our process creates structure
                without unnecessary complexity,
                keeping decisions and responsibilities clear.
              </p>
            </div>

            <div className="mt-12 grid border-t border-[#0F2740]/15 sm:grid-cols-2 lg:grid-cols-4">
              {stages.map((stage, index) => (
                <div
                  key={stage.number}
                  className={`border-b border-[#0F2740]/15 py-7 sm:pr-7 lg:py-9 ${
                    index > 0
                      ? "lg:border-l lg:pl-7"
                      : ""
                  } ${
                    index % 2 === 1
                      ? "sm:border-l sm:pl-7 lg:pl-7"
                      : ""
                  }`}
                >
                  <span className="text-[11px] font-semibold tracking-[0.14em] text-[#B58B42]">
                    {stage.number}
                  </span>

                  <h3 className="mt-6 text-[23px] font-medium tracking-[-0.035em]">
                    {stage.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-7 text-[#0F2740]/60">
                    {stage.text}
                  </p>
                </div>
              ))}
            </div>

            {/* DREAMHOUSE - INTEGRATED, NOT ANOTHER LARGE SECTION */}
            <div
              id="dreamhouse"
              className="mt-12 scroll-mt-24 border border-[#0F2740]/15 md:mt-16"
            >
              <div className="grid gap-7 p-7 sm:p-9 md:grid-cols-[1fr_1fr] md:items-center md:gap-12 lg:p-12">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A77E36]">
                    Dreamhouse
                  </p>

                  <h3 className="mt-4 text-[clamp(1.7rem,2.7vw,2.8rem)] font-medium leading-[1.15] tracking-[-0.04em]">
                    Your home.
                    <br />
                    Thoughtfully delivered.
                  </h3>
                </div>

                <div>
                  <p className="max-w-[440px] text-[14px] leading-7 text-[#0F2740]/65">
                    Our dedicated offering for
                    private clients planning and
                    building a home abroad.
                  </p>

                  <Link
                    to="/Dreamhouse"
                    className="mt-6 inline-flex items-center gap-3 border-b border-[#0F2740]/35 pb-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-opacity hover:opacity-60"
                  >
                    Explore Dreamhouse
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL GREEN SECTION - THE ONLY GREEN */}
        <section className="bg-[#3F6B68] px-6 py-16 text-white sm:px-10 md:px-12 md:py-24 lg:px-20">
          <div className="mx-auto grid max-w-[1280px] gap-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
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
                className="mt-7 inline-flex min-h-12 items-center gap-8 bg-[#F8F6F1] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0F2740] transition-colors hover:bg-white"
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
