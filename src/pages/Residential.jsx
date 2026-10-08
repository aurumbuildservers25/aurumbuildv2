
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  MoveUpRight,
} from "lucide-react";

import DivisionHeader from "../components/DivisionHeader";
import DivisionFooter from "../components/DivisionFooter";

const NAVY = "#0F2740";
const IVORY = "#FFFDF8";
const GOLD = "#C9A962";

const services = [
  {
    number: "01",
    title: "Project Management",
    detail: "Planning, coordination, programme and budget.",
  },
  {
    number: "02",
    title: "Construction Delivery",
    detail: "Site management, technical coordination and quality.",
  },
  {
    number: "03",
    title: "Investor Representation",
    detail: "Oversight and reporting for clients based abroad.",
  },
  {
    number: "04",
    title: "Turnkey Delivery",
    detail: "One coordinated route through to completion.",
  },
];

const journey = [
  {
    number: "01",
    title: "Imagine",
    detail: "Your vision and priorities.",
  },
  {
    number: "02",
    title: "Prepare",
    detail: "Design, approvals and planning.",
  },
  {
    number: "03",
    title: "Build",
    detail: "Execution and quality control.",
  },
  {
    number: "04",
    title: "Arrive",
    detail: "Completion and handover.",
  },
];

export default function Residential() {
  return (
    <>
      <DivisionHeader division="residential" />

      <main
        className="overflow-x-hidden text-[#0F2740]"
        style={{ backgroundColor: IVORY }}
      >
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-[#0F2740]/10">
          <div className="mx-auto grid max-w-[1600px] lg:min-h-[610px] lg:grid-cols-[1.05fr_0.95fr]">

            <div className="relative z-10 flex flex-col justify-center px-6 pb-16 pt-14 sm:px-10 md:px-12 md:py-20 lg:px-20">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#C9A962]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08B4A]">
                  Residential
                </span>
              </div>

              <h1 className="mt-8 max-w-[750px] text-[clamp(3rem,5.5vw,5.8rem)] font-medium leading-[1.04] tracking-[-0.06em]">
                Build abroad.
                <br />
                With confidence.
              </h1>

              <p className="mt-7 max-w-[520px] text-[16px] leading-[1.75] text-[#0F2740]/65 md:text-[17px]">
                From planning to handover, one trusted
                partner for your property project in Europe.
              </p>

              <Link
                to="/contact"
                className="mt-9 inline-flex min-h-12 w-fit items-center gap-8 bg-[#0F2740] px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.13em] text-white transition-colors hover:bg-[#23425D]"
              >
                Discuss your project
                <ArrowUpRight size={17} />
              </Link>
            </div>

            {/* ARCHITECTURAL GEOMETRY */}
            <div className="relative hidden min-h-[610px] overflow-hidden border-l border-[#0F2740]/10 lg:block">
              <div className="absolute inset-0 bg-[#F1ECE2]" />

              <div className="absolute bottom-0 left-[15%] top-[14%] w-px bg-[#0F2740]/10" />
              <div className="absolute bottom-0 left-[45%] top-0 w-px bg-[#0F2740]/10" />
              <div className="absolute bottom-0 left-[75%] top-[24%] w-px bg-[#0F2740]/10" />

              <div className="absolute left-[15%] right-0 top-[22%] h-px bg-[#0F2740]/10" />
              <div className="absolute bottom-[25%] left-0 right-[15%] h-px bg-[#0F2740]/10" />

              <div className="absolute right-[12%] top-[18%] h-[40%] w-[48%] border border-[#0F2740]/20" />

              <div className="absolute right-[18%] top-[24%] h-[40%] w-[48%] border border-[#C9A962]/65" />

              <div className="absolute bottom-[12%] left-[14%]">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B08B4A]">
                  From vision to reality
                </span>

                <p className="mt-4 text-[clamp(1.6rem,2.4vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.04em]">
                  Your project.
                  <br />
                  Carefully delivered.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EDITORIAL INTRO */}
        <section className="px-6 py-16 sm:px-10 md:px-12 md:py-24 lg:px-20">
          <div className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08B4A]">
                A clear way forward
              </p>

              <div className="mt-6 hidden h-px w-20 bg-[#C9A962] lg:block" />
            </div>

            <div>
              <h2 className="max-w-[840px] text-[clamp(2rem,3.7vw,4rem)] font-medium leading-[1.16] tracking-[-0.045em]">
                Building in another country
                shouldn't mean managing
                everything alone.
              </h2>

              <p className="mt-7 max-w-[650px] text-[15px] leading-8 text-[#0F2740]/60 md:text-[16px]">
                We bring local coordination,
                construction experience and technical
                oversight together, giving you one
                reliable point of contact throughout
                the project.
              </p>
            </div>
          </div>
        </section>

        {/* WHO WE WORK WITH - ASYMMETRIC */}
        <section className="overflow-hidden border-y border-[#0F2740]/10">
          <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[0.85fr_1.15fr]">

            <div className="relative flex min-h-[340px] flex-col justify-between bg-[#0F2740] p-8 text-white sm:p-12 lg:min-h-[520px] lg:p-16">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A962]">
                  Private Clients
                </span>

                <ArrowUpRight
                  size={22}
                  strokeWidth={1.3}
                  className="text-[#C9A962]"
                />
              </div>

              <div className="relative z-10">
                <p className="max-w-[420px] text-[clamp(2rem,3.4vw,3.8rem)] font-medium leading-[1.13] tracking-[-0.045em]">
                  A home that
                  feels like yours.
                </p>

                <p className="mt-6 max-w-[360px] text-[14px] leading-7 text-white/65">
                  For families and individuals creating
                  a primary home, second residence
                  or holiday property abroad.
                </p>
              </div>

              <div className="pointer-events-none absolute -right-12 top-[23%] h-48 w-48 border border-white/10 sm:h-64 sm:w-64" />
              <div className="pointer-events-none absolute -right-4 top-[30%] h-48 w-48 border border-[#C9A962]/30 sm:h-64 sm:w-64" />
            </div>

            <div className="relative flex min-h-[340px] flex-col justify-between bg-[#F2EDE3] p-8 sm:p-12 lg:min-h-[520px] lg:p-16">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A9823E]">
                  Investors & Developers
                </span>

                <ArrowUpRight
                  size={22}
                  strokeWidth={1.3}
                  className="text-[#A9823E]"
                />
              </div>

              <div className="relative z-10">
                <p className="max-w-[520px] text-[clamp(2rem,3.4vw,3.8rem)] font-medium leading-[1.13] tracking-[-0.045em]">
                  Structured delivery
                  for your investment.
                </p>

                <p className="mt-6 max-w-[400px] text-[14px] leading-7 text-[#0F2740]/65">
                  For residential investments and
                  developments requiring planning,
                  coordination and transparent
                  construction oversight.
                </p>
              </div>

              <div className="pointer-events-none absolute right-[12%] top-[25%] h-40 w-40 border border-[#0F2740]/10 sm:h-60 sm:w-60" />
              <div className="pointer-events-none absolute right-[17%] top-[30%] h-40 w-40 border border-[#C9A962]/40 sm:h-60 sm:w-60" />
            </div>
          </div>
        </section>

        {/* SERVICES - COMPOSITION, NOT CARDS */}
        <section
          id="services"
          className="scroll-mt-24 px-6 py-16 sm:px-10 md:px-12 md:py-24 lg:px-20"
        >
          <div className="mx-auto max-w-[1360px]">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08B4A]">
                  What we do
                </p>

                <h2 className="mt-5 text-[clamp(2.2rem,3.8vw,4rem)] font-medium leading-[1.12] tracking-[-0.045em]">
                  One partner.
                  <br />
                  Every critical
                  <br className="hidden lg:block" />
                  step.
                </h2>

                <p className="mt-7 max-w-[350px] text-[15px] leading-8 text-[#0F2740]/60">
                  The right level of support,
                  shaped around the needs
                  of your project.
                </p>

                <div className="mt-10 hidden h-24 w-24 border-l border-t border-[#C9A962] lg:block" />
              </div>

              <div className="border-t border-[#0F2740]/20">
                {services.map((service) => (
                  <div
                    key={service.number}
                    className="grid gap-3 border-b border-[#0F2740]/15 py-7 sm:grid-cols-[46px_1fr] sm:gap-6 md:py-9"
                  >
                    <span className="pt-1 text-[11px] font-semibold tracking-[0.15em] text-[#B08B4A]">
                      {service.number}
                    </span>

                    <div>
                      <h3 className="text-[22px] font-medium leading-[1.2] tracking-[-0.035em] md:text-[27px]">
                        {service.title}
                      </h3>

                      <p className="mt-2 text-[14px] leading-7 text-[#0F2740]/60">
                        {service.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECT JOURNEY - CONNECTED GEOMETRY */}
        <section
          id="approach"
          className="scroll-mt-24 bg-[#0F2740] px-6 py-16 text-white sm:px-10 md:px-12 md:py-24 lg:px-20"
        >
          <div className="mx-auto max-w-[1360px]">
            <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A962]">
                  The journey
                </p>

                <h2 className="mt-5 text-[clamp(2.2rem,3.8vw,4rem)] font-medium leading-[1.12] tracking-[-0.045em]">
                  From idea
                  <br />
                  to arrival.
                </h2>
              </div>

              <p className="max-w-[400px] text-[15px] leading-8 text-white/60">
                A connected process with clear
                decisions, consistent coordination
                and a defined path to completion.
              </p>
            </div>

            <div className="relative mt-14">
              <div className="absolute left-4 top-4 bottom-4 w-px bg-white/20 md:left-0 md:right-0 md:top-4 md:bottom-auto md:h-px md:w-auto" />

              <div className="grid gap-9 md:grid-cols-4 md:gap-8">
                {journey.map((step) => (
                  <div
                    key={step.number}
                    className="relative pl-12 md:pl-0 md:pt-12"
                  >
                    <div className="absolute left-[9px] top-[9px] h-[15px] w-[15px] border-2 border-[#C9A962] bg-[#0F2740] md:left-0 md:top-[9px]" />

                    <span className="text-[11px] font-semibold tracking-[0.18em] text-[#C9A962]">
                      {step.number}
                    </span>

                    <h3 className="mt-4 text-[24px] font-medium tracking-[-0.035em]">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-[220px] text-[14px] leading-7 text-white/60">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DREAMHOUSE - EDITORIAL FEATURE */}
        <section
          id="dreamhouse"
          className="scroll-mt-24 overflow-hidden"
        >
          <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">

            <div className="relative hidden min-h-[460px] overflow-hidden bg-[#F2EDE3] lg:block">
              <div className="absolute inset-[13%] border border-[#0F2740]/15" />
              <div className="absolute inset-[19%] border border-[#C9A962]/60" />
              <div className="absolute bottom-[19%] left-[19%] h-px w-[62%] bg-[#0F2740]/20" />

              <div className="absolute bottom-[10%] left-[12%] text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A9823E]">
                A place to call your own
              </div>
            </div>

            <div className="flex flex-col justify-center px-6 py-16 sm:px-10 md:px-12 md:py-24 lg:px-20">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08B4A]">
                Dreamhouse
              </p>

              <h2 className="mt-5 text-[clamp(2.2rem,3.8vw,4rem)] font-medium leading-[1.12] tracking-[-0.045em]">
                Your home.
                <br />
                Thoughtfully
                <br className="hidden lg:block" />
                delivered.
              </h2>

              <p className="mt-7 max-w-[440px] text-[15px] leading-8 text-[#0F2740]/60">
                A dedicated path for private
                clients planning and building
                a home abroad, with coordinated
                support from concept to handover.
              </p>

              <Link
                to="/Dreamhouse"
                className="mt-8 inline-flex w-fit items-center gap-3 border-b border-[#0F2740]/40 pb-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition-opacity hover:opacity-60"
              >
                Explore Dreamhouse
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* APPROVED FINAL CTA - PRESERVED */}
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
