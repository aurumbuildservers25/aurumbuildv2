import React from "react";
import {
  Atom,
  Flame,
  Anchor,
  Factory,
  Wind,
  Construction,
  ShieldCheck,
  Layers3,
  HardHat,
  Compass,
  ChartNoAxesCombined,
  Settings,
  ArrowRight,
} from "lucide-react";

export default function Industrial() {
  const capabilities = [
    {
      number: "01",
      title: "Project Control",
      text: "Connect project information with physical site reality to measure progress, identify deviations and support informed project decisions.",
    },
    {
      number: "02",
      title: "Technical Supervision",
      text: "Independent engineering oversight focused on quality, compliance, constructability and the realities of execution on site.",
    },
    {
      number: "03",
      title: "Digital Twin",
      text: "Structure verified construction information into a digital asset foundation that can support handover and the operational lifecycle.",
    },
  ];

  const sectors = [
    { icon: Atom, name: "Energy Infrastructure" },
    { icon: Flame, name: "LNG & Gas" },
    { icon: Anchor, name: "Ports & Marine Infrastructure" },
    { icon: Factory, name: "Heavy / Process Industry" },
    { icon: Wind, name: "Wind Energy" },
    { icon: Construction, name: "Large Infrastructure" },
  ];

  const clients = [
    { icon: ShieldCheck, name: "Asset Owners" },
    { icon: Layers3, name: "EPC Contractors" },
    { icon: HardHat, name: "General Contractors" },
    { icon: Compass, name: "Project & Technical Directors" },
    { icon: ChartNoAxesCombined, name: "Project Controls" },
    { icon: Settings, name: "Operators & O&M" },
  ];

  const workflow = [
    {
      number: "01",
      title: "Plan",
      text: "Programme, drawings, BoQ, WBS and project documentation.",
    },
    {
      number: "02",
      title: "Capture",
      text: "Reality capture using appropriate site and survey methods.",
    },
    {
      number: "03",
      title: "Verify",
      text: "Compare planned scope with the physical construction state.",
    },
    {
      number: "04",
      title: "Control",
      text: "Identify progress, deviations and areas requiring attention.",
    },
    {
      number: "05",
      title: "Report",
      text: "Turn verified information into usable project-control output.",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#03070C] text-[#F2F3F0]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[100dvh] overflow-hidden">

        {/* DESKTOP PROCESS VISUAL */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] lg:block"
          style={{
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, rgba(0,0,0,.18) 8%, rgba(0,0,0,.7) 22%, #000 38%, #000 100%)",
            maskImage:
              "linear-gradient(90deg, transparent 0%, rgba(0,0,0,.18) 8%, rgba(0,0,0,.7) 22%, #000 38%, #000 100%)",
          }}
        >
          <img
            src="/images/industrial-process.jpeg"
            alt=""
            className="h-full w-full scale-[1.02] object-cover object-center opacity-[0.78]"
            style={{
              filter: "saturate(.66) contrast(1.06) brightness(.80)",
            }}
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,#03070C_0%,rgba(3,7,12,.78)_12%,rgba(3,7,12,.22)_32%,rgba(3,7,12,.04)_68%)]" />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,12,.14)_0%,transparent_50%,rgba(3,7,12,.42)_100%)]" />

          <div className="absolute bottom-[9%] left-[12%] right-[8%] h-px bg-gradient-to-r from-transparent via-[#63BCD0]/30 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1440px] items-center px-6 pb-20 pt-28 md:px-12 lg:px-20">
          <div className="max-w-[760px]">

            <div className="mb-7 text-[11px] font-semibold tracking-[0.28em] text-[#F2AA2A] md:text-xs">
              AURUMBUILD INDUSTRIAL
            </div>

            <h1 className="max-w-[760px] text-[3.25rem] font-semibold leading-[0.94] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[5.4rem]">
              Control the project.
              <br />
              <span className="text-[#F2AA2A]">
                Verify the reality.
              </span>
            </h1>

            <p className="mt-8 max-w-[670px] text-[17px] leading-[1.8] text-white/65 md:text-lg">
              Engineering, technical supervision and digital project control
              for complex construction. We connect project information with
              physical site reality to verify progress, identify deviations
              and support confident execution.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-7">
              <a
                href="#capabilities"
                className="bg-[#F2AA2A] px-6 py-4 text-[12px] font-semibold tracking-[0.18em] text-[#03070C] transition-opacity hover:opacity-90"
              >
                OUR CAPABILITIES
              </a>

              <a
                href="#pilot"
                className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.16em] text-white/65 transition-colors hover:text-white"
              >
                DISCUSS A PROJECT
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================= */}
      <section
        id="capabilities"
        className="bg-[#F2F3F0] px-6 py-24 text-[#0A1118] md:px-12 md:py-32 lg:px-20"
      >
        <div className="mx-auto max-w-[1440px]">

          <div className="max-w-3xl">
            <div className="mb-5 text-[11px] font-semibold tracking-[0.24em] text-[#A97919]">
              OUR CAPABILITIES
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.035em] md:text-6xl">
              Three capabilities.
              <br />
              One view of the project.
            </h2>
          </div>

          <div className="mt-16 grid border-t border-[#0A1118]/15 md:grid-cols-3">
            {capabilities.map((item) => (
              <div
                key={item.number}
                className="border-b border-[#0A1118]/15 py-9 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
              >
                <div className="text-xs font-semibold text-[#A97919]">
                  {item.number}
                </div>

                <h3 className="mt-7 text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-sm text-[15px] leading-7 text-[#0A1118]/60">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTORS + CLIENTS
      ========================================================= */}
      <section className="bg-[#F2F3F0] px-6 pb-28 text-[#0A1118] md:px-12 md:pb-36 lg:px-20">
        <div className="mx-auto max-w-[1440px] border-t border-[#0A1118]/15 pt-20">

          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

            <div>
              <div className="mb-5 text-[11px] font-semibold tracking-[0.24em] text-[#A97919]">
                COMPLEX CONSTRUCTION
              </div>

              <h2 className="text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                Built for projects where control matters.
              </h2>

              <p className="mt-7 max-w-xl text-[16px] leading-8 text-[#0A1118]/60">
                AURUMBuild works where technical complexity, multiple
                interfaces and demanding execution require a clear
                understanding of what is planned and what is actually
                happening on site.
              </p>
            </div>

            <div className="grid gap-14 md:grid-cols-2">

              <div>
                <div className="mb-7 text-xs font-semibold tracking-[0.18em] text-[#0A1118]/45">
                  SECTORS
                </div>

                <div className="space-y-1">
                  {sectors.map(({ icon: Icon, name }) => (
                    <div
                      key={name}
                      className="flex items-center gap-4 border-t border-[#0A1118]/10 py-4"
                    >
                      <Icon
                        strokeWidth={1.4}
                        className="h-[19px] w-[19px] text-[#A97919]"
                      />
                      <span className="text-[15px] font-medium">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-7 text-xs font-semibold tracking-[0.18em] text-[#0A1118]/45">
                  CLIENTS
                </div>

                <div className="space-y-1">
                  {clients.map(({ icon: Icon, name }) => (
                    <div
                      key={name}
                      className="flex items-center gap-4 border-t border-[#0A1118]/10 py-4"
                    >
                      <Icon
                        strokeWidth={1.4}
                        className="h-[19px] w-[19px] text-[#3F6B68]"
                      />
                      <span className="text-[15px] font-medium">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECT CONTROL
      ========================================================= */}
      <section className="relative bg-[#050B12] px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative mx-auto max-w-[1440px]">

          <div className="max-w-4xl">
            <div className="mb-5 text-[11px] font-semibold tracking-[0.24em] text-[#63BCD0]">
              PROJECT CONTROL
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.035em] md:text-6xl">
              From project information
              <br />
              to verified site reality.
            </h2>

            <p className="mt-7 max-w-2xl text-[16px] leading-8 text-white/55">
              Project documentation describes intent. Construction happens
              in physical space. We create the evidence layer between the two.
            </p>
          </div>

          <div className="relative mt-20 grid md:grid-cols-5">

            <div className="absolute left-0 right-0 top-0 hidden h-px bg-white/15 md:block" />

            {workflow.map((step) => (
              <div
                key={step.number}
                className="relative border-t border-white/15 py-7 md:border-t-0 md:px-6 md:first:pl-0"
              >
                <div className="hidden md:block absolute -top-[4px] left-6 h-[7px] w-[7px] rounded-full bg-[#63BCD0] first:left-0" />

                <div className="text-xs font-semibold text-[#63BCD0]">
                  {step.number}
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/45">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNICAL SUPERVISION
      ========================================================= */}
      <section className="bg-[#F2F3F0] text-[#0A1118]">
        <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[45%_55%]">

          <div className="flex items-center px-6 py-24 md:px-12 md:py-32 lg:px-20">
            <div className="max-w-xl">

              <div className="mb-5 text-[11px] font-semibold tracking-[0.24em] text-[#A97919]">
                TECHNICAL SUPERVISION
              </div>

              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] md:text-5xl">
                Technology supports the work.
                <br />
                Experience controls it.
              </h2>

              <p className="mt-8 text-[16px] leading-8 text-[#0A1118]/60">
                Digital information is valuable only when it is interpreted
                in the context of engineering, construction sequence,
                interfaces and site conditions.
              </p>

              <p className="mt-5 text-[16px] leading-8 text-[#0A1118]/60">
                Our technical supervision combines physical site presence
                with structured project information to support quality,
                constructability and execution.
              </p>
            </div>
          </div>

          <div className="relative min-h-[460px] overflow-hidden lg:min-h-[680px]">
            <img
              src="/images/industrial-supervision.jpeg"
              alt="Industrial technical supervision"
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                filter: "saturate(.72) contrast(1.03)",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#F2F3F0]/35 via-transparent to-transparent lg:from-[#F2F3F0]/15" />
          </div>
        </div>
      </section>

      {/* =========================================================
          DIGITAL TWIN
      ========================================================= */}
      <section className="bg-[#071019] px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-[1440px]">

          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

            <div>
              <div className="mb-5 text-[11px] font-semibold tracking-[0.24em] text-[#63BCD0]">
                DIGITAL TWIN
              </div>

              <h2 className="text-4xl font-semibold tracking-[-0.035em] md:text-6xl">
                The digital bridge between construction and operation.
              </h2>
            </div>

            <div className="lg:pt-10">
              <p className="max-w-2xl text-[16px] leading-8 text-white/55">
                Verified construction information can become the foundation
                of a structured digital asset. The objective is not simply
                to create a 3D model, but to preserve useful information
                beyond construction.
              </p>

              <div className="mt-12 grid gap-4 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">

                <div className="border border-white/10 p-6">
                  <div className="text-xs text-[#63BCD0]">01</div>
                  <div className="mt-4 font-medium">
                    Construction reality
                  </div>
                </div>

                <ArrowRight className="hidden h-4 w-4 text-white/25 sm:block" />

                <div className="border border-white/10 p-6">
                  <div className="text-xs text-[#63BCD0]">02</div>
                  <div className="mt-4 font-medium">
                    Structured digital asset
                  </div>
                </div>

                <ArrowRight className="hidden h-4 w-4 text-white/25 sm:block" />

                <div className="border border-white/10 p-6">
                  <div className="text-xs text-[#63BCD0]">03</div>
                  <div className="mt-4 font-medium">
                    Operation
                  </div>
                </div>

              </div>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-white/40">
                The scope of an operational Digital Twin depends on available
                asset data, systems integration and cooperation with the
                owner or operator.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          PILOT
      ========================================================= */}
      <section
        id="pilot"
        className="bg-[#F2AA2A] px-6 py-20 text-[#071019] md:px-12 md:py-24 lg:px-20"
      >
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>
            <div className="mb-5 text-[11px] font-semibold tracking-[0.24em] text-[#071019]/60">
              PILOT
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.035em] md:text-6xl">
              Start small.
              <br />
              Prove the value.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-[16px] leading-8 text-[#071019]/70">
              Select one defined asset area — a reactor cooler, foundry sand
              plant, clean room in a battery facility, process unit or another
              construction package. We establish the baseline, capture
              physical reality, compare planned versus actual and deliver
              usable project-control output.
            </p>

            <a
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 border-b border-[#071019] pb-2 text-[12px] font-semibold tracking-[0.16em]"
            >
              DISCUSS A PILOT
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
