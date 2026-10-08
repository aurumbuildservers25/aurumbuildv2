import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Welcome() {
  return (
    <main className="min-h-screen bg-[#F8F6F1] text-[#0F2740]">
      <div className="flex min-h-screen flex-col">

        {/* BRAND HEADER */}
        <header className="border-b border-[#0F2740]/10">
          <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 py-6 md:px-12 md:py-8 lg:px-20">
            <Link to="/" aria-label="AURUMBuild home">
              <img
                src="/aurumbuild-logo.png"
                alt="AURUMBuild"
                className="block h-auto w-[165px] sm:w-[190px] md:w-[210px]"
              />
            </Link>

            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0F2740]/45 sm:block">
              Engineering & Construction
            </span>
          </div>
        </header>

        {/* INTRODUCTION */}
        <section className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-center px-6 py-14 text-center sm:py-16 md:px-12 md:py-20 lg:px-20">
          <span className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#B58D43]">
            AURUMBUILD
          </span>

          <h1 className="max-w-[850px] text-[clamp(2.25rem,5vw,4.8rem)] font-medium leading-[1.1] tracking-[-0.055em]">
            One company.
            <br />
            Two fields of expertise.
          </h1>

          <p className="mt-6 max-w-[560px] text-[15px] leading-7 text-[#0F2740]/60 sm:text-[17px]">
            Engineering, construction and project delivery.
          </p>
        </section>

        {/* DIVISIONS */}
        <section className="grid flex-1 grid-cols-1 md:grid-cols-2">

          {/* INDUSTRIAL */}
          <Link
            to="/industrial"
            className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden bg-[#07121D] px-7 py-9 text-[#F2F3F0] transition-colors duration-300 hover:bg-[#0B1B2A] sm:px-10 sm:py-11 md:min-h-[410px] lg:px-16 lg:py-14"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F2AA2A]">
                01 / Industrial
              </span>

              <ArrowUpRight
                size={22}
                strokeWidth={1.5}
                className="text-[#F2AA2A] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </div>

            <div className="max-w-[500px]">
              <h2 className="text-[clamp(2rem,3.5vw,3.7rem)] font-medium leading-[1.1] tracking-[-0.045em]">
                Control the
                <br />
                complexity.
              </h2>

              <p className="mt-6 max-w-[370px] text-[14px] leading-7 text-white/60 sm:text-[15px]">
                Engineering, technical supervision and digital
                project control for complex construction.
              </p>
            </div>

            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F2AA2A]">
              Explore Industrial
              <span className="h-px w-10 bg-[#F2AA2A]/50 transition-all duration-300 group-hover:w-16" />
            </div>
          </Link>

          {/* RESIDENTIAL */}
          <Link
            to="/residential"
            className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden bg-[#E9E7DF] px-7 py-9 text-[#0F2740] transition-colors duration-300 hover:bg-[#DFE3DC] sm:px-10 sm:py-11 md:min-h-[410px] lg:px-16 lg:py-14"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3F6B68]">
                02 / Residential
              </span>

              <ArrowUpRight
                size={22}
                strokeWidth={1.5}
                className="text-[#3F6B68] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </div>

            <div className="max-w-[500px]">
              <h2 className="text-[clamp(2rem,3.5vw,3.7rem)] font-medium leading-[1.1] tracking-[-0.045em]">
                Build with
                <br />
                confidence.
              </h2>

              <p className="mt-6 max-w-[370px] text-[14px] leading-7 text-[#0F2740]/60 sm:text-[15px]">
                Project management, construction and turnkey
                delivery for private and investment projects in Europe.
              </p>
            </div>

            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#3F6B68]">
              Explore Residential
              <span className="h-px w-10 bg-[#3F6B68]/50 transition-all duration-300 group-hover:w-16" />
            </div>
          </Link>
        </section>

        {/* MINIMAL FOOTER */}
        <footer className="border-t border-[#0F2740]/10 bg-[#F8F6F1]">
          <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-2 px-6 py-5 text-[11px] text-[#0F2740]/45 sm:flex-row sm:items-center sm:justify-between md:px-12 lg:px-20">
            <span>© 2026 AURUMBUILD Sp. z o.o.</span>
            <span>Engineering · Construction · Project Delivery</span>
          </div>
        </footer>

      </div>
    </main>
  );
}
