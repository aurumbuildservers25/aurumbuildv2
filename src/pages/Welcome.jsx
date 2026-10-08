import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Welcome() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8F6F1] text-[#0F2740]">
      <div className="flex min-h-screen flex-col">

        {/* BRAND INTRODUCTION */}
        <header className="shrink-0 bg-[#F8F6F1]">
          <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-7 px-6 pb-9 pt-7 sm:px-10 md:flex-row md:items-end md:justify-between md:gap-12 md:px-12 md:pb-11 md:pt-10 lg:px-20 lg:pb-12 lg:pt-12">

            <div className="flex shrink-0 flex-col items-start">
              <Link
                to="/"
                aria-label="AURUMBuild home"
                className="inline-flex items-center"
              >
                <img
                  src="/images/aurumbuild-logo.png"
                  alt="AURUMBuild"
                  className="block h-auto w-[170px] max-w-full object-contain sm:w-[190px] lg:w-[205px]"
                />
              </Link>

              <span className="mt-4 text-[10px] font-medium uppercase tracking-[0.19em] text-[#0F2740]/50">
                Engineering & Construction
              </span>
            </div>

            <div className="max-w-[670px] md:text-right">
              <p className="text-[clamp(1.45rem,2.5vw,2.7rem)] font-medium leading-[1.18] tracking-[-0.045em] text-[#0F2740]">
                Expertise to plan.
                <br className="hidden sm:block" />
                {" "}Responsibility to deliver.
              </p>

              <p className="mt-3 max-w-[540px] text-[13px] leading-6 text-[#0F2740]/55 md:ml-auto md:text-[14px]">
                One company connecting engineering,
                construction and project delivery.
              </p>
            </div>
          </div>
        </header>

        {/* TWO BUSINESS DIVISIONS */}
        <section className="grid w-full flex-1 grid-cols-1 md:grid-cols-2">

          {/* INDUSTRIAL */}
          <Link
            to="/industrial"
            aria-label="Explore AURUMBuild Industrial"
            className="group relative isolate flex min-h-[340px] flex-col justify-between overflow-hidden bg-[#06111C] px-6 py-8 text-[#F2F3F0] transition-colors duration-300 hover:bg-[#0A1A29] sm:px-10 sm:py-10 md:min-h-[470px] md:px-12 md:py-12 lg:px-16 lg:py-14 xl:px-20"
          >
            {/* Restrained architectural lines */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.055]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffffff 1px, transparent 1px)",
                backgroundSize: "25% 100%",
              }}
            />

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#F2AA2A]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F2AA2A] sm:text-[11px]">
                  01 / Industrial
                </span>
              </div>

              <ArrowUpRight
                size={24}
                strokeWidth={1.5}
                className="shrink-0 text-[#F2AA2A] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </div>

            <div className="relative z-10 my-12 max-w-[570px] md:my-14">
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
                Engineering & Project Control
              </p>

              <h2 className="text-[clamp(2.5rem,4.5vw,5.1rem)] font-medium leading-[1.03] tracking-[-0.055em]">
                Control the
                <br />
                complexity.
              </h2>

              <p className="mt-7 max-w-[400px] text-[14px] leading-7 text-white/60 md:text-[15px]">
                Technical supervision, engineering and digital
                project control for complex construction.
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between border-t border-white/15 pt-5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.17em] text-[#F2AA2A]">
                Enter Industrial
              </span>

              <span className="text-[10px] uppercase tracking-[0.13em] text-white/35">
                Explore division
              </span>
            </div>
          </Link>

          {/* RESIDENTIAL */}
          <Link
            to="/residential"
            aria-label="Explore AURUMBuild Residential"
            className="group relative isolate flex min-h-[340px] flex-col justify-between overflow-hidden bg-[#E8E9E2] px-6 py-8 text-[#0F2740] transition-colors duration-300 hover:bg-[#DFE5DD] sm:px-10 sm:py-10 md:min-h-[470px] md:px-12 md:py-12 lg:px-16 lg:py-14 xl:px-20"
          >
            {/* Subtle division identity */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.055]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #0F2740 1px, transparent 1px)",
                backgroundSize: "25% 100%",
              }}
            />

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#3F6B68]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#3F6B68] sm:text-[11px]">
                  02 / Residential
                </span>
              </div>

              <ArrowUpRight
                size={24}
                strokeWidth={1.5}
                className="shrink-0 text-[#3F6B68] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </div>

            <div className="relative z-10 my-12 max-w-[570px] md:my-14">
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#0F2740]/45">
                Private Homes & Development
              </p>

              <h2 className="text-[clamp(2.5rem,4.5vw,5.1rem)] font-medium leading-[1.03] tracking-[-0.055em]">
                Build with
                <br />
                confidence.
              </h2>

              <p className="mt-7 max-w-[400px] text-[14px] leading-7 text-[#0F2740]/60 md:text-[15px]">
                Project management, construction and turnkey
                delivery for private clients and investors in Europe.
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between border-t border-[#0F2740]/15 pt-5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.17em] text-[#3F6B68]">
                Enter Residential
              </span>

              <span className="text-[10px] uppercase tracking-[0.13em] text-[#0F2740]/40">
                Explore division
              </span>
            </div>
          </Link>
        </section>

        {/* MINIMAL COMPANY FOOTER */}
        <footer className="shrink-0 border-t border-[#0F2740]/10 bg-[#F8F6F1]">
          <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-2 px-6 py-4 text-[11px] text-[#0F2740]/45 sm:flex-row sm:items-center sm:justify-between sm:px-10 md:px-12 lg:px-20">
            <span>© 2026 AURUMBUILD Sp. z o.o.</span>
            <span>Engineering · Construction · Project Delivery</span>
          </div>
        </footer>

      </div>
    </main>
  );
}
