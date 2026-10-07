import React from "react";

export default function Industrial() {
  return (
    <main className="min-h-screen bg-[#03070C] text-[#F2F3F0]">

      {/* HERO */}
      <section className="relative min-h-[100dvh] overflow-hidden">

        {/* DESKTOP INDUSTRIAL GRAPHIC — HIDDEN ON MOBILE */}
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

          {/* IMAGE INTEGRATION / DARK FADE */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#03070C_0%,rgba(3,7,12,.78)_12%,rgba(3,7,12,.22)_32%,rgba(3,7,12,.04)_68%)]" />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,12,.14)_0%,transparent_50%,rgba(3,7,12,.42)_100%)]" />

          {/* FUTURE ANIMATION TRACE */}
          <div className="absolute bottom-[9%] left-[12%] right-[8%] h-px bg-gradient-to-r from-transparent via-[#63BCD0]/30 to-transparent" />
        </div>

        {/* HERO COPY */}
        <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1400px] items-center px-[26px] py-16 lg:px-12 xl:px-16">

          <div className="w-full lg:w-[53%] lg:max-w-[760px]">

            <div className="mb-5 text-[10px] font-semibold tracking-[0.24em] text-[#F2AA2A]">
              AURUMBUILD INDUSTRIAL
            </div>

            <h1 className="max-w-[760px] text-[2.65rem] font-semibold leading-[0.97] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[4.8rem] xl:text-[5.4rem]">
              Control the project.
              <br />
              <span className="text-[#F2AA2A]">
                Verify the reality.
              </span>
            </h1>

            <p className="mt-8 max-w-[650px] text-base leading-[1.7] text-white/60 md:text-lg">
              Engineering, technical supervision and digital project control
              for complex construction. We connect project information with
              physical site reality to verify progress, identify deviations
              and support confident execution.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">

              <a
                href="#capabilities"
                className="bg-[#F2AA2A] px-6 py-4 text-[10px] font-bold tracking-[0.15em] text-[#03070C]"
              >
                OUR CAPABILITIES
              </a>

              <a
                href="#contact"
                className="text-[10px] font-bold tracking-[0.15em] text-white/80"
              >
                DISCUSS A PROJECT →
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* CORE QUESTION */}
      <section className="border-t border-white/10 px-[26px] py-24 md:px-12 md:py-32 lg:px-20">
        <div className="max-w-5xl">

          <div className="mb-5 text-xs tracking-[0.28em] text-[#F2AA2A]">
            PROJECT CONTROL
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            WHAT SHOULD BE COMPLETE TODAY —
            <br />
            AND WHAT IS ACTUALLY COMPLETE?
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
            Project documentation describes intent. Construction happens in
            physical space. AURUMBuild creates the evidence layer between the
            two.
          </p>

        </div>
      </section>

      {/* WORKFLOW */}
      <section
        id="capabilities"
        className="border-t border-white/10 px-[26px] py-24 md:px-12 md:py-32 lg:px-20"
      >
        <div className="max-w-6xl">

          <div className="mb-5 text-xs tracking-[0.28em] text-[#F2AA2A]">
            WORKFLOW
          </div>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            FROM SITE REALITY TO PROJECT INTELLIGENCE.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {[
              "DOCUMENTATION",
              "CAPTURE",
              "POINT CLOUD",
              "3D REALITY",
              "PLANNED VS ACTUAL",
              "PROGRESS DATA",
            ].map((item, index) => (
              <div key={item} className="border-t border-white/15 pt-4">
                <div className="mb-2 text-xs text-[#F2AA2A]">
                  0{index + 1}
                </div>

                <div className="text-sm font-medium tracking-wide">
                  {item}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
