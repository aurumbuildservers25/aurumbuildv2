
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const divisions = [
  {
    number: "01",
    name: "Industrial",
    path: "/industrial",
    category: "Engineering & Project Control",
    statement: "Control the complexity.",
    description:
      "Technical supervision, engineering and digital project control for complex construction.",
    mobileDescription:
      "Engineering · Supervision · Project Control",
    background: "#06111C",
    hoverBackground: "#0B1B2A",
    foreground: "#F2F3F0",
    accent: "#F2AA2A",
    muted: "rgba(242,243,240,0.58)",
    border: "rgba(255,255,255,0.14)",
    light: false,
  },
  {
    number: "02",
    name: "Residential",
    path: "/residential",
    category: "Private Homes & Development",
    statement: "Build with confidence.",
    description:
      "Project management, construction and turnkey delivery for private clients and investors in Europe.",
    mobileDescription:
      "Private Homes · Development · Turnkey Delivery",
    background: "#E5E9E2",
    hoverBackground: "#DAE2D9",
    foreground: "#0F2740",
    accent: "#3F6B68",
    muted: "rgba(15,39,64,0.60)",
    border: "rgba(15,39,64,0.16)",
    light: true,
  },
];

function DivisionPanel({ division }) {
  return (
    <Link
      to={division.path}
      aria-label={`Explore AURUMBuild ${division.name}`}
      className="group relative flex min-h-0 flex-1 flex-col justify-between overflow-hidden px-6 py-6 transition-colors duration-300 sm:px-10 md:min-h-[460px] md:px-10 md:py-10 lg:px-14 lg:py-12 xl:px-20"
      style={{
        backgroundColor: division.background,
        color: division.foreground,
      }}
      onMouseEnter={(event) => {
        event.currentTarget.style.backgroundColor =
          division.hoverBackground;
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.backgroundColor =
          division.background;
      }}
    >
      {/* MOBILE: BOTH DIVISIONS FIT ON FIRST SCREEN */}
      <div className="flex h-full flex-col justify-center md:hidden">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className="h-px w-5 shrink-0"
              style={{ backgroundColor: division.accent }}
            />
            <span
              className="text-[10px] font-semibold uppercase tracking-[0.16em]"
              style={{ color: division.accent }}
            >
              {division.number} / AURUMBUILD
            </span>
          </div>

          <ArrowUpRight
            size={23}
            strokeWidth={1.5}
            style={{ color: division.accent }}
          />
        </div>

        <div className="mt-5">
          <h2 className="text-[clamp(2rem,8vw,3rem)] font-medium leading-none tracking-[-0.045em]">
            {division.name}
          </h2>

          <p
            className="mt-3 text-[12px] leading-5 sm:text-[13px]"
            style={{ color: division.muted }}
          >
            {division.mobileDescription}
          </p>
        </div>

        <div
          className="mt-5 flex items-center justify-between border-t pt-3"
          style={{ borderColor: division.border }}
        >
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.15em]"
            style={{ color: division.accent }}
          >
            Explore {division.name}
          </span>

          <span
            className="text-[11px] font-medium"
            style={{ color: division.muted }}
          >
            →
          </span>
        </div>
      </div>

      {/* DESKTOP: EDITORIAL DIVISION PANELS */}
      <div className="hidden h-full flex-col justify-between md:flex">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className="h-px w-7 shrink-0"
              style={{ backgroundColor: division.accent }}
            />

            <span
              className="text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: division.accent }}
            >
              {division.number} / {division.category}
            </span>
          </div>

          <ArrowUpRight
            size={25}
            strokeWidth={1.5}
            className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            style={{ color: division.accent }}
          />
        </div>

        <div className="my-12 max-w-[560px]">
          <h2 className="text-[clamp(3rem,5.2vw,6rem)] font-medium leading-[1.02] tracking-[-0.055em]">
            {division.name}
          </h2>

          <p
            className="mt-7 text-[clamp(1.35rem,2vw,2rem)] font-normal leading-[1.2] tracking-[-0.035em]"
            style={{ color: division.foreground }}
          >
            {division.statement}
          </p>

          <p
            className="mt-5 max-w-[420px] text-[14px] leading-7 lg:text-[15px]"
            style={{ color: division.muted }}
          >
            {division.description}
          </p>
        </div>

        <div
          className="flex items-center justify-between border-t pt-5"
          style={{ borderColor: division.border }}
        >
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.16em]"
            style={{ color: division.accent }}
          >
            Explore {division.name}
          </span>

          <ArrowUpRight
            size={18}
            strokeWidth={1.6}
            style={{ color: division.accent }}
          />
        </div>
      </div>
    </Link>
  );
}

export default function Welcome() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8F6F1] text-[#0F2740]">
      <div className="flex min-h-screen flex-col">

        {/* BRAND HEADER */}
        <header className="shrink-0 border-b border-[#0F2740]/10 bg-[#F8F6F1]">
          <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-4 px-6 py-6 sm:px-10 md:flex-row md:items-center md:justify-between md:gap-10 md:px-12 md:py-9 lg:px-20">

            <Link
              to="/"
              aria-label="AURUMBuild home"
              className="inline-flex w-fit items-center"
            >
              <img
                src="/images/aurumbuild-logo.png"
                alt="AURUMBuild"
                className="block h-auto w-[165px] max-w-full object-contain sm:w-[185px] lg:w-[200px]"
              />
            </Link>

            {/* MOBILE BRAND STATEMENT */}
            <p className="max-w-[360px] text-[13px] leading-5 text-[#0F2740]/65 md:hidden">
              Engineering and construction.
              <br />
              One company. Two fields of expertise.
            </p>

            {/* DESKTOP BRAND STATEMENT */}
            <div className="hidden max-w-[620px] text-right md:block">
              <p className="text-[clamp(1.25rem,2.1vw,2.15rem)] font-normal leading-[1.18] tracking-[-0.035em]">
                Expertise to plan. Responsibility to deliver.
              </p>

              <p className="mt-2 text-[13px] leading-6 text-[#0F2740]/55">
                Engineering, construction and project delivery.
              </p>
            </div>
          </div>
        </header>

        {/* MOBILE: TWO ENTRANCES IN AVAILABLE VIEWPORT */}
        <section
          className="flex min-h-[390px] flex-1 flex-col md:hidden"
          style={{
            minHeight: "max(390px, calc(100svh - 155px))",
          }}
        >
          {divisions.map((division) => (
            <DivisionPanel
              key={division.name}
              division={division}
            />
          ))}
        </section>

        {/* DESKTOP: TWO BALANCED PANELS */}
        <section className="hidden flex-1 grid-cols-2 md:grid">
          {divisions.map((division) => (
            <DivisionPanel
              key={division.name}
              division={division}
            />
          ))}
        </section>

        {/* MINIMAL FOOTER */}
        <footer className="shrink-0 border-t border-[#0F2740]/10 bg-[#F8F6F1]">
          <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-1 px-6 py-3 text-[10px] text-[#0F2740]/45 sm:flex-row sm:items-center sm:justify-between sm:px-10 md:px-12 md:py-4 lg:px-20">
            <span>© 2026 AURUMBUILD Sp. z o.o.</span>
            <span className="hidden sm:inline">
              Engineering · Construction · Project Delivery
            </span>
          </div>
        </footer>

      </div>
    </main>
  );
}
