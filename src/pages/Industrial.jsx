import React from "react";
import DivisionHeader from "@/components/DivisionHeader";
import DivisionFooter from "@/components/DivisionFooter";

export default function Industrial() {
  return (
    <div className="min-h-screen bg-[#03070C] text-[#F2F3F0]">
      <DivisionHeader division="industrial" />

      <main className="pt-16">

        {/* HERO */}
        <section className="relative min-h-[calc(100dvh-4rem)] overflow-hidden">
          
          {/* DESKTOP TECHNICAL VISUAL */}
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

          {/* HERO CONTENT */}
          <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-4rem)] max-w-[1440px] items-center px-5 py-16 md:px-10 lg:px-16">
            <div className="max-w-[760px] lg:max-w-[680px]">

              <div className="mb-6 text-[11px] font-medium tracking-[0.26em] text-[#F2AA2A]">
                AURUMBUILD INDUSTRIAL
              </div>

              <h1 className="max-w-[760px] text-[3rem] font-semibold leading-[0.96] tracking-[-0.045em] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem]">
                Control the project.
                <br />
                <span className="text-[#F2AA2A]">
                  Verify the reality.
                </span>
              </h1>

              <p className="mt-8 max-w-[620px] text-[16px] leading-7 text-white/58 md:text-[18px] md:leading-8">
                Engineering, technical supervision and digital project control
                for complex construction. We connect project information with
                physical site reality to verify progress, identify deviations
                and support confident execution.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a
                  href="#capabilities"
                  className="bg-[#F2AA2A] px-6 py-3.5 text-[12px] font-semibold tracking-[0.11em] text-[#03070C] transition-opacity hover:opacity-90"
                >
                  OUR CAPABILITIES
                </a>

                <a
                  href="#contact"
                  className="text-[12px] font-medium tracking-[0.08em] text-white/70 transition-colors hover:text-white"
                >
                  DISCUSS A PROJECT →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECT CONTROL */}
        <section
          id="capabilities"
          className="border-t border-white/10 px-5 py-24 md:px-10 md:py-32 lg:px-16"
        >
          <div className="mx-auto max-w-[1440px]">
            <div className="max-w-5xl">

              <div className="mb-5 text-[11px] font-medium tracking-[0.26em] text-[#F2AA2A]">
                PROJECT CONTROL
              </div>

              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] md:text-6xl">
                What should be complete today — and what is actually complete?
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
                Project documentation describes intent. Construction happens in
                physical space. AURUMBuild creates the evidence layer between
                the two.
              </p>
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section
          id="approach"
          className="border-t border-white/10 px-5 py-24 md:px-10 md:py-32 lg:px-16"
        >
          <div className="mx-auto max-w-[1440px]">

            <div className="mb-5 text-[11px] font-medium tracking-[0.26em] text-[#F2AA2A]">
              WORKFLOW
            </div>

            <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.035em] md:text-6xl">
              From site reality to project intelligence.
            </h2>

            <div className="mt-14 grid gap-8 md:grid-cols-3 lg:grid-cols-6">
              {[
                "Documentation",
                "Capture",
                "Point cloud",
                "3D reality",
                "Planned vs actual",
                "Progress data",
              ].map((item, index) => (
                <div
                  key={item}
                  className="border-t border-white/15 pt-4"
                >
                  <div className="mb-3 text-[11px] text-[#F2AA2A]">
                    0{index + 1}
                  </div>

                  <div className="text-sm font-medium tracking-wide text-white/80">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <DivisionFooter division="industrial" />
    </div>
  );
}
