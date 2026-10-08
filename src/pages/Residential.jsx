
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  ClipboardCheck,
  Hammer,
  KeyRound,
  ShieldCheck,
  Building2,
  MapPin,
  FileCheck2,
} from "lucide-react";

import DivisionHeader from "../components/DivisionHeader";
import DivisionFooter from "../components/DivisionFooter";

const services = [
  {
    number: "01",
    title: "Project Management",
    text: "A clear point of coordination across design, consultants, contractors, budgets and programme.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Construction Delivery",
    text: "Practical management of construction activities, site coordination and quality through completion.",
    icon: Hammer,
  },
  {
    number: "03",
    title: "Investor Representation",
    text: "Technical oversight and transparent reporting for clients managing a property project from abroad.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Turnkey Delivery",
    text: "Coordinated support from early project decisions through construction, finishing and handover.",
    icon: KeyRound,
  },
];

const steps = [
  {
    number: "01",
    title: "Define",
    text: "Understand the vision, location, scope and investment priorities.",
  },
  {
    number: "02",
    title: "Prepare",
    text: "Coordinate feasibility, design, approvals and delivery planning.",
  },
  {
    number: "03",
    title: "Construct",
    text: "Manage site execution, technical coordination and quality.",
  },
  {
    number: "04",
    title: "Handover",
    text: "Coordinate completion, documentation and final delivery.",
  },
];

export default function Residential() {
  return (
    <>
      <DivisionHeader division="residential" />

      <main className="overflow-hidden bg-[#F8F6F1] text-[#0F2740]">

        {/* HERO */}
        <section className="relative border-b border-[#0F2740]/10">
          <div className="mx-auto grid max-w-[1600px] lg:min-h-[680px] lg:grid-cols-[1.08fr_0.92fr]">

            <div className="flex flex-col justify-center px-6 pb-20 pt-16 sm:px-10 md:px-12 md:py-24 lg:px-20 lg:py-28">
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-8 bg-[#C9A962]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3F6B68]">
                  AURUMBUILD RESIDENTIAL
                </span>
              </div>

              <h1 className="max-w-[780px] text-[clamp(2.9rem,5.3vw,5.9rem)] font-medium leading-[1.05] tracking-[-0.055em]">
                Build abroad.
                <br />
                <span className="text-[#3F6B68]">
                  We handle the complexity.
                </span>
              </h1>

              <p className="mt-8 max-w-[560px] text-[16px] leading-8 text-[#0F2740]/65 md:text-[17px]">
                A trusted partner on the ground for your
                property project in Europe. We coordinate
                design, construction and delivery, so you
                can focus on the decisions that matter.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center gap-3 bg-[#0F2740] px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#23425D]"
                >
                  Start your project
                  <ArrowUpRight size={17} />
                </Link>

                <a
                  href="#approach"
                  className="inline-flex min-h-12 items-center gap-2 border-b border-[#0F2740]/30 text-[12px] font-semibold uppercase tracking-[0.12em] hover:border-[#0F2740]"
                >
                  How we work
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* PURPOSEFUL ARCHITECTURAL VISUAL */}
            <div className="relative hidden overflow-hidden bg-[#E3E9E2] lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E7ECE5] via-[#DCE6DD] to-[#B8CCC1]" />

              <div className="absolute inset-x-[14%] top-[16%] h-px bg-[#0F2740]/15" />
              <div className="absolute bottom-[15%] left-[14%] top-[16%] w-px bg-[#0F2740]/15" />
              <div className="absolute bottom-[15%] right-[14%] top-[16%] w-px bg-[#0F2740]/15" />

              <div className="absolute bottom-[13%] left-[18%] max-w-[330px]">
                <div className="border-l-2 border-[#3F6B68] pl-7">
                  <p className="text-[clamp(1.6rem,2.5vw,2.5rem)] font-normal leading-[1.18] tracking-[-0.04em]">
                    Your vision.
                    <br />
                    Our responsibility.
                  </p>

                  <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#3F6B68]">
                    From concept to completion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="px-6 py-20 sm:px-10 md:px-12 md:py-28 lg:px-20">
          <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B18D4B]">
                The right partner
              </span>
            </div>

            <div>
              <h2 className="max-w-[850px] text-[clamp(2rem,3.7vw,4rem)] font-medium leading-[1.14] tracking-[-0.045em]">
                Building a home abroad should feel exciting.
                Not overwhelming.
              </h2>

              <p className="mt-8 max-w-[740px] text-[16px] leading-8 text-[#0F2740]/60">
                Planning a private residence or property investment
                across borders brings together architects,
                contractors, local regulations and many important
                decisions. AURUMBuild Residential provides
                experienced coordination and technical oversight
                to bring clarity to the process.
              </p>
            </div>
          </div>
        </section>

        {/* CLIENT TYPES */}
        <section className="bg-[#ECECE6] px-6 py-20 sm:px-10 md:px-12 md:py-24 lg:px-20">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-12">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3F6B68]">
                Who we support
              </span>

              <h2 className="mt-5 text-[clamp(2rem,3.6vw,3.7rem)] font-medium leading-[1.1] tracking-[-0.045em]">
                Your project.
                <br />
                Our commitment.
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden border border-[#0F2740]/10 bg-[#0F2740]/10 md:grid-cols-2">
              <div className="bg-[#F8F6F1] p-8 sm:p-10 lg:p-14">
                <MapPin
                  size={27}
                  strokeWidth={1.5}
                  className="text-[#3F6B68]"
                />

                <h3 className="mt-9 text-[27px] font-medium tracking-[-0.035em]">
                  Private Clients
                </h3>

                <p className="mt-5 max-w-[450px] text-[15px] leading-8 text-[#0F2740]/65">
                  For families and individuals building a
                  primary home, holiday property or second
                  residence abroad. We provide a reliable
                  local point of coordination throughout
                  the project.
                </p>
              </div>

              <div className="bg-[#F8F6F1] p-8 sm:p-10 lg:p-14">
                <Building2
                  size={27}
                  strokeWidth={1.5}
                  className="text-[#3F6B68]"
                />

                <h3 className="mt-9 text-[27px] font-medium tracking-[-0.035em]">
                  Investors & Developers
                </h3>

                <p className="mt-5 max-w-[450px] text-[15px] leading-8 text-[#0F2740]/65">
                  For residential investments and development
                  projects requiring structured planning,
                  construction coordination and transparent
                  delivery oversight.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="px-6 py-20 sm:px-10 md:px-12 md:py-28 lg:px-20"
        >
          <div className="mx-auto max-w-[1400px]">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B18D4B]">
                  What we do
                </span>

                <h2 className="mt-5 text-[clamp(2.2rem,4vw,4.2rem)] font-medium leading-[1.1] tracking-[-0.045em]">
                  One partner.
                  <br />
                  Clear responsibility.
                </h2>
              </div>

              <p className="max-w-[430px] text-[15px] leading-7 text-[#0F2740]/60">
                Flexible support tailored to the project,
                from individual management services to
                coordinated turnkey delivery.
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden border border-[#0F2740]/10 bg-[#0F2740]/10 md:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.number}
                    className="bg-[#F8F6F1] p-8 transition-colors duration-300 hover:bg-white sm:p-10 lg:p-12"
                  >
                    <div className="flex items-start justify-between">
                      <Icon
                        size={28}
                        strokeWidth={1.5}
                        className="text-[#3F6B68]"
                      />

                      <span className="text-[11px] font-semibold tracking-[0.15em] text-[#B18D4B]">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="mt-12 text-[25px] font-medium tracking-[-0.035em]">
                      {service.title}
                    </h3>

                    <p className="mt-5 max-w-[460px] text-[15px] leading-7 text-[#0F2740]/60">
                      {service.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section
          id="approach"
          className="bg-[#0F2740] px-6 py-20 text-[#F8F6F1] sm:px-10 md:px-12 md:py-28 lg:px-20"
        >
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A962]">
                  How we work
                </span>

                <h2 className="mt-5 text-[clamp(2.2rem,4vw,4.2rem)] font-medium leading-[1.1] tracking-[-0.045em]">
                  From first conversation
                  <br />
                  to final handover.
                </h2>
              </div>

              <p className="max-w-[440px] self-end text-[15px] leading-8 text-white/60">
                We bring structure to the project journey,
                with defined stages, clear communication
                and attention to the decisions that
                shape the final result.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="border-t border-white/20 pt-7"
                >
                  <span className="text-[12px] font-semibold tracking-[0.2em] text-[#C9A962]">
                    {step.number}
                  </span>

                  <h3 className="mt-11 text-[25px] font-medium tracking-[-0.035em]">
                    {step.title}
                  </h3>

                  <p className="mt-5 text-[14px] leading-7 text-white/55">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIFFERENCE */}
        <section className="px-6 py-20 sm:px-10 md:px-12 md:py-28 lg:px-20">
          <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B18D4B]">
                Why AURUMBuild
              </span>

              <h2 className="mt-5 text-[clamp(2.2rem,4vw,4rem)] font-medium leading-[1.1] tracking-[-0.045em]">
                Personal attention.
                <br />
                Professional control.
              </h2>

              <p className="mt-8 max-w-[520px] text-[16px] leading-8 text-[#0F2740]/60">
                We combine construction experience,
                structured project management and
                practical technical understanding.
                Our focus is clear communication,
                informed decisions and quality
                throughout the delivery process.
              </p>
            </div>

            <div className="border-t border-[#0F2740]/15">
              {[
                "One point of coordination",
                "Technical understanding",
                "Transparent communication",
                "Quality-focused oversight",
                "Support for international clients",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-5 border-b border-[#0F2740]/15 py-6"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3F6B68]/10">
                    <Check
                      size={17}
                      className="text-[#3F6B68]"
                    />
                  </span>

                  <p className="text-[15px] font-medium leading-6">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DREAMHOUSE */}
        <section className="bg-[#E8EAE2] px-6 py-20 sm:px-10 md:px-12 md:py-24 lg:px-20">
          <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3F6B68]">
                Dreamhouse
              </span>

              <h2 className="mt-5 text-[clamp(2.2rem,4vw,4rem)] font-medium leading-[1.1] tracking-[-0.045em]">
                Your home.
                <br />
                Thoughtfully delivered.
              </h2>
            </div>

            <div>
              <p className="max-w-[520px] text-[16px] leading-8 text-[#0F2740]/65">
                Dreamhouse is our dedicated offering
                for private clients planning a home
                abroad, bringing design coordination,
                construction management and
                delivery into one clear process.
              </p>

              <Link
                to="/Dreamhouse"
                className="mt-8 inline-flex items-center gap-3 border-b border-[#3F6B68] pb-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#3F6B68] transition-opacity hover:opacity-70"
              >
                Explore Dreamhouse
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#3F6B68] px-6 py-20 text-white sm:px-10 md:px-12 md:py-28 lg:px-20">
          <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E2D1A3]">
                Start a conversation
              </span>

              <h2 className="mt-5 text-[clamp(2.5rem,5vw,5.2rem)] font-medium leading-[1.07] tracking-[-0.05em]">
                Tell us what
                <br />
                you want to build.
              </h2>
            </div>

            <div>
              <p className="max-w-[450px] text-[16px] leading-8 text-white/75">
                Whether you already own land,
                have a concept in mind or are
                exploring an investment,
                let's discuss your plans.
              </p>

              <Link
                to="/contact"
                className="mt-9 inline-flex min-h-12 items-center gap-4 bg-[#F8F6F1] px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.13em] text-[#0F2740] transition-colors hover:bg-white"
              >
                Discuss your project
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <DivisionFooter division="residential" />
    </>
  );
}
