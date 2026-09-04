import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Residential() {
  const process = [
    {
      number: "01",
      title: "LAND / PROPERTY",
      text: "Identify the right opportunity and understand the project before committing.",
    },
    {
      number: "02",
      title: "PERMITS & PLANNING",
      text: "Coordinate local requirements, approvals and the route toward a buildable project.",
    },
    {
      number: "03",
      title: "DESIGN & CONSTRUCTION",
      text: "Turn the brief into a coordinated design and manage delivery on site.",
    },
    {
      number: "04",
      title: "INVESTOR SUPERVISION",
      text: "Protect quality, programme and the client's interests throughout construction.",
    },
    {
      number: "05",
      title: "TURNKEY HANDOVER",
      text: "Complete the project and deliver a residence ready to use.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F5F3F0] text-[#24324B]">

      {/* ================= HEADER ================= */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-6 flex items-center justify-between">
          <div className="text-[14px] md:text-base font-semibold tracking-[0.22em]">
            AURUMBUILD
          </div>

          <div className="text-[10px] md:text-xs tracking-[0.22em] text-[#B18D45]">
            RESIDENTIAL
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative min-h-[100dvh] overflow-hidden flex items-center">
        {/* subtle architectural background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.16]">
          <svg
            viewBox="0 0 1000 800"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <g
              fill="none"
              stroke="#24324B"
              strokeWidth="1"
            >
              <path d="M120 650 L120 360 L340 220 L560 360 L560 650" />
              <path d="M560 650 L560 300 L760 180 L890 280 L890 650" />
              <path d="M185 650 L185 410 L495 410 L495 650" />
              <path d="M610 650 L610 360 L835 360 L835 650" />
              <path d="M120 520 L560 520" />
              <path d="M560 470 L890 470" />
              <path d="M340 220 L340 650" />
              <path d="M760 180 L760 650" />
            </g>

            <g
              fill="none"
              stroke="#D9B566"
              strokeWidth="2"
            >
              <path d="M95 675 L915 675" />
              <path d="M560 300 L760 180" />
            </g>
          </svg>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-5 md:px-10 pt-28 pb-16">
          <div className="max-w-4xl">

            <div className="text-[10px] md:text-xs tracking-[0.28em] text-[#B18D45] mb-6">
              PRIVATE CLIENTS · DEVELOPERS · INVESTORS
            </div>

            <h1 className="text-[2.8rem] sm:text-6xl md:text-7xl lg:text-[5.6rem] font-semibold leading-[0.96] tracking-[-0.035em]">
              BUILD YOUR HOME ABROAD.
              <br />
              <span className="text-[#B18D45]">
                WE HANDLE THE COMPLEXITY.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-[15px] md:text-xl leading-relaxed text-[#4A5568]">
              From the first opportunity to planning, construction,
              supervision and turnkey handover, AURUMBuild manages the
              project locally while you remain in control wherever you live.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-[#24324B] text-white px-7 py-4 text-xs font-semibold tracking-[0.12em]">
                START YOUR PROJECT
              </button>

              <Link
                to="/dreamhouse"
                className="border border-[#24324B]/25 px-7 py-4 text-xs font-semibold tracking-[0.12em] flex items-center justify-center gap-2"
              >
                EXPLORE DREAMHOUSE
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHO WE SERVE ================= */}
      <section className="border-t border-[#24324B]/10 py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">

          <div className="text-[10px] tracking-[0.28em] text-[#B18D45] mb-5">
            WHO WE WORK FOR
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20">

            <div>
              <div className="text-sm text-[#2C7A7B] mb-4">
                01
              </div>

              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                PRIVATE CLIENTS
              </h2>

              <p className="mt-5 text-[#4A5568] leading-relaxed max-w-lg">
                For clients building a villa, residence or second home abroad
                who want one reliable team to manage the complexity on the
                ground.
              </p>
            </div>

            <div>
              <div className="text-sm text-[#2C7A7B] mb-4">
                02
              </div>

              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                DEVELOPERS & INVESTORS
              </h2>

              <p className="mt-5 text-[#4A5568] leading-relaxed max-w-lg">
                Development management, construction coordination and investor
                representation for projects requiring professional control and
                local execution.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="bg-[#EFECE7] py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">

          <div className="max-w-3xl mb-14">
            <div className="text-[10px] tracking-[0.28em] text-[#B18D45] mb-5">
              FROM IDEA TO HANDOVER
            </div>

            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
              ONE PROJECT.
              <br />
              ONE CLEAR JOURNEY.
            </h2>

            <p className="mt-6 text-[#4A5568] max-w-2xl leading-relaxed">
              AURUMBuild coordinates the stages that usually become fragmented
              when a client is building in another country.
            </p>
          </div>

          <div className="border-t border-[#24324B]/15">
            {process.map((item) => (
              <div
                key={item.number}
                className="grid grid-cols-[48px_1fr] md:grid-cols-[80px_280px_1fr] gap-4 md:gap-8 py-6 md:py-7 border-b border-[#24324B]/15"
              >
                <div className="text-xs text-[#B18D45] pt-1">
                  {item.number}
                </div>

                <div className="font-semibold tracking-wide text-sm md:text-base">
                  {item.title}
                </div>

                <div className="col-start-2 md:col-start-auto text-sm md:text-base text-[#4A5568] leading-relaxed max-w-xl">
                  {item.text}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= INDUSTRIAL DISCIPLINE ================= */}
      <section className="py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-20 items-center">

          <div>
            <div className="text-[10px] tracking-[0.28em] text-[#2C7A7B] mb-5">
              A DIFFERENT STANDARD OF CONTROL
            </div>

            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
              INDUSTRIAL DISCIPLINE.
              <br />
              RESIDENTIAL ATTENTION.
            </h2>

            <p className="mt-7 text-[#4A5568] leading-relaxed max-w-2xl">
              Our work in complex construction environments shapes the way we
              manage residential projects: structured planning, clear
              documentation, disciplined coordination and measurable progress.
            </p>

            <p className="mt-4 text-[#4A5568] leading-relaxed max-w-2xl">
              Where useful, 3D modelling, reality capture and digital project
              information can give private clients, developers and investors
              greater visibility during design, construction and handover.
            </p>
          </div>

          {/* graphic */}
          <div className="border border-[#24324B]/15 bg-white/35 p-7 md:p-10">
            <div className="text-[10px] tracking-[0.25em] text-[#B18D45] mb-8">
              PROJECT VISIBILITY
            </div>

            <div className="space-y-6">

              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span>DESIGN</span>
                  <span className="text-[#2C7A7B]">01</span>
                </div>
                <div className="h-px bg-[#24324B]/15">
                  <div className="h-px w-[45%] bg-[#D9B566]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span>CONSTRUCTION</span>
                  <span className="text-[#2C7A7B]">02</span>
                </div>
                <div className="h-px bg-[#24324B]/15">
                  <div className="h-px w-[68%] bg-[#D9B566]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span>SUPERVISION</span>
                  <span className="text-[#2C7A7B]">03</span>
                </div>
                <div className="h-px bg-[#24324B]/15">
                  <div className="h-px w-[82%] bg-[#D9B566]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span>HANDOVER</span>
                  <span className="text-[#2C7A7B]">04</span>
                </div>
                <div className="h-px bg-[#24324B]/15">
                  <div className="h-px w-full bg-[#2C7A7B]" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
