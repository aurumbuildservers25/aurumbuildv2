
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
    background: "#06111C",
    foreground: "#F2F3F0",
    accent: "#F2AA2A",
    muted: "rgba(242,243,240,0.70)",
    border: "rgba(255,255,255,0.14)",
  },
  {
    number: "02",
    name: "Residential",
    path: "/residential",
    category: "Private Homes & Development",
    statement: "Build with confidence.",
    description:
      "Project management, construction and turnkey delivery for private clients and investors in Europe.",
    background: "#F0EEE7",
    foreground: "#102D5B",
    accent: "#B18D4B",
    muted: "rgba(16,45,91,0.76)",
    border: "rgba(16,45,91,0.18)",
  },
];

function DivisionPanel({ division }) {
  const {
    number,
    name,
    path,
    category,
    statement,
    description,
    background,
    foreground,
    accent,
    muted,
    border,
  } = division;

  return (
    <Link
      to={path}
      aria-label={`Explore AURUMBUILD ${name}`}
      className="
        group relative flex min-h-[370px]
        flex-col justify-between overflow-hidden
        px-6 pb-9 pt-9
        transition-[filter] duration-300
        hover:brightness-[1.045]
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-[-4px]
        focus-visible:outline-current
        sm:px-10 sm:py-11
        lg:min-h-[520px] lg:px-12 lg:py-12
        xl:px-20
      "
      style={{
        backgroundColor: background,
        color: foreground,
      }}
    >
      {/* TOP LABEL */}
      <div className="flex items-start justify-between gap-5">
        <div className="flex items-center gap-3">
          <span
            className="h-px w-7 shrink-0"
            style={{ backgroundColor: accent }}
          />

          <span
            className="
              text-[10px] font-semibold uppercase
              tracking-[0.14em]
            "
            style={{ color: accent }}
          >
            {number} / {category}
          </span>
        </div>

        <ArrowUpRight
          size={18}
          strokeWidth={1.5}
          className="
            shrink-0 transition-transform
            duration-300
            group-hover:-translate-y-1
            group-hover:translate-x-1
          "
          aria-hidden="true"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="my-12">
        <h2
          className="
            text-[clamp(2.9rem,4.4vw,5rem)]
            font-semibold leading-[1.04]
            tracking-[-0.055em]
          "
        >
          {name}
        </h2>

        <p
          className="
            mt-5 text-[clamp(1.1rem,1.6vw,1.5rem)]
            font-medium leading-[1.35]
            tracking-[-0.025em]
          "
        >
          {statement}
        </p>

        <p
          className="
            mt-4 max-w-[430px]
            text-[14px] leading-[1.85]
            sm:text-[15px]
          "
          style={{ color: muted }}
        >
          {description}
        </p>
      </div>

      {/* BOTTOM LINK */}
      <div
        className="
          flex items-center justify-between
          border-t pt-5
        "
        style={{ borderColor: border }}
      >
        <span
          className="
            text-[11px] font-semibold
            uppercase tracking-[0.13em]
          "
          style={{ color: foreground }}
        >
          Explore {name}
        </span>

        <ArrowUpRight
          size={19}
          strokeWidth={1.6}
          className="
            transition-transform duration-300
            group-hover:-translate-y-1
            group-hover:translate-x-1
          "
          style={{ color: accent }}
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}

export default function Welcome() {
  return (
    <main className="min-h-screen bg-[#FFF9EF]">
      {/* CORPORATE HEADER */}
      <header className="bg-[#FFF9EF]">
        <div
          className="
            mx-auto flex w-full max-w-[1600px]
            flex-col justify-center gap-5
            px-6 py-7
            sm:px-10
            md:min-h-[132px] md:flex-row
            md:items-center md:justify-between
            md:gap-10 md:py-6
            lg:px-12 xl:px-20
          "
        >
          {/* SAME POSITION AND SIZE AS DIVISION HEADER */}
          <Link
            to="/"
            aria-label="AURUMBUILD home"
            className="block w-fit shrink-0"
          >
            <img
              src="/images/aurumbuild-logo-residential.png"
              alt="AURUMBUILD"
              className="
                block h-auto w-[167px]
                sm:w-[187px] xl:w-[210px]
              "
            />
          </Link>

          {/* QUIETER CORPORATE STATEMENT */}
          <div className="max-w-[420px] md:text-right">
            <p
              className="
                text-[17px] font-medium
                leading-[1.3]
                tracking-[-0.035em]
                text-[#102D5B]
                sm:text-[19px]
              "
            >
              Expertise to plan.
              <br className="hidden sm:block md:hidden" />
              {" "}Responsibility to deliver.
            </p>

            <p
              className="
                mt-1.5 text-[11px]
                leading-[1.6]
                text-[#102D5B]/60
              "
            >
              Engineering, construction and project delivery.
            </p>
          </div>
        </div>
      </header>

      {/* DIVISION GATEWAY */}
      <section
        aria-label="Choose your AURUMBUILD division"
        className="grid lg:grid-cols-2"
      >
        {divisions.map((division) => (
          <DivisionPanel
            key={division.name}
            division={division}
          />
        ))}
      </section>

      {/* QUIET FOOTER */}
      <footer
        className="
          bg-[#FFF9EF] px-6 py-4
          sm:px-10 lg:px-12 xl:px-20
        "
      >
        <div
          className="
            mx-auto flex max-w-[1440px]
            flex-col gap-2
            text-[10px] text-[#102D5B]/55
            sm:flex-row sm:items-center
            sm:justify-between
          "
        >
          <span>
            © {new Date().getFullYear()} AURUMBUILD Sp. z o.o.
          </span>

          <span>
            Engineering · Construction · Project Delivery
          </span>
        </div>
      </footer>
    </main>
  );
}
