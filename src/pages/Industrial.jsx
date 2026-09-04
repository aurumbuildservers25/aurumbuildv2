import React from "react";

export default function Industrial() {
  return (
    <main className="min-h-screen bg-[#090D14] text-[#F5F7FA]">

      {/* HERO */}
      <section className="min-h-[100dvh] flex items-center px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl">
          <div className="text-xs tracking-[0.28em] text-[#FFB52E] mb-5">
            AURUMBUILD INDUSTRIAL
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight">
            KNOW WHAT&apos;S BUILT.
            <br />
            CONTROL WHAT COMES NEXT.
          </h1>

          <p className="mt-8 max-w-2xl text-base md:text-xl text-white/60 leading-relaxed">
            We convert physical construction reality into measurable project
            intelligence for project control, technical verification and the
            digital asset lifecycle.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-[#FFB52E] text-[#090D14] px-6 py-3 text-sm font-semibold tracking-wide">
              REQUEST A PILOT
            </button>

            <button className="border border-white/20 px-6 py-3 text-sm tracking-wide">
              SEE HOW IT WORKS
            </button>
          </div>
        </div>
      </section>

      {/* CORE QUESTION */}
      <section className="border-t border-white/10 px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="max-w-5xl">
          <div className="text-xs tracking-[0.28em] text-[#FFB52E] mb-5">
            PROJECT CONTROL
          </div>

          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            WHAT SHOULD BE COMPLETE TODAY —
            <br />
            AND WHAT IS ACTUALLY COMPLETE?
          </h2>

          <p className="mt-8 max-w-2xl text-white/60 text-base md:text-lg leading-relaxed">
            Project documentation describes intent. Construction happens in
            physical space. AURUMBuild creates the evidence layer between the two.
          </p>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="border-t border-white/10 px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="max-w-6xl">
          <div className="text-xs tracking-[0.28em] text-[#FFB52E] mb-5">
            WORKFLOW
          </div>

          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
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
              <div
                key={item}
                className="border-t border-white/15 pt-4"
              >
                <div className="text-xs text-[#FFB52E] mb-2">
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
