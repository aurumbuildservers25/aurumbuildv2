import React from "react";
import { Link } from "react-router-dom";

export default function DivisionFooter({ division = "industrial" }) {
  const industrial = division === "industrial";

  return (
    <footer
      className={`border-t ${
        industrial
          ? "border-white/10 bg-[#03070C] text-[#F2F3F0]"
          : "border-[#0F2740]/10 bg-[#F8F6F1] text-[#0F2740]"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-12 md:py-16 lg:px-20">

        {/* MAIN FOOTER */}
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-16">

          {/* BRAND */}
          <div>
            <Link
              to={industrial ? "/industrial" : "/residential"}
              aria-label="AURUMBuild"
              className="inline-block"
            >
      <img
  src="/images/aurumbuild-logo.png"
  alt="AURUMBuild"
  className="block h-auto w-[190px] sm:w-[210px]"
  style={{
    opacity: 1,
    visibility: "visible",
    filter: "none",
  }}
/>
            </Link>

            <p
              className={`mt-7 max-w-md text-[15px] leading-7 ${
                industrial ? "text-white/55" : "text-[#0F2740]/65"
              }`}
            >
              {industrial
                ? "Engineering, technical supervision and digital project control for complex construction."
                : "Project management and construction delivery for private and investment projects in Europe."}
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <div
              className={`mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] ${
                industrial ? "text-[#F2AA2A]" : "text-[#C9A962]"
              }`}
            >
              AURUMBuild
            </div>

            <nav className="flex flex-col items-start gap-3 text-[14px]">
              <Link
                to="/industrial"
                className={`transition-opacity hover:opacity-100 ${
                  industrial ? "text-white/60" : "text-[#0F2740]/65"
                }`}
              >
                Industrial
              </Link>

              <Link
                to="/residential"
                className={`transition-opacity hover:opacity-100 ${
                  industrial ? "text-white/60" : "text-[#0F2740]/65"
                }`}
              >
                Residential
              </Link>

              <Link
                to="/contact"
                className={`transition-opacity hover:opacity-100 ${
                  industrial ? "text-white/60" : "text-[#0F2740]/65"
                }`}
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* COMPANY DATA */}
          <div>
            <div
              className={`mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] ${
                industrial ? "text-[#F2AA2A]" : "text-[#C9A962]"
              }`}
            >
              Company
            </div>

            <div
              className={`space-y-2 text-[14px] leading-6 ${
                industrial ? "text-white/55" : "text-[#0F2740]/65"
              }`}
            >
              <p className={industrial ? "text-white/80" : "text-[#0F2740]"}>
                AURUMBUILD Sp. z o.o.
              </p>

              <p>
                <span className="font-medium">NIP</span> 6312742513
              </p>

              <p>
                <span className="font-medium">REGON</span> 54519473000000
              </p>

              <p>
                <span className="font-medium">KRS</span> 0001252561
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className={`mt-14 flex flex-col gap-4 border-t pt-6 text-[12px] md:flex-row md:items-center md:justify-between ${
            industrial
              ? "border-white/10 text-white/35"
              : "border-[#0F2740]/10 text-[#0F2740]/45"
          }`}
        >
          <p>© 2026 AURUMBUILD Sp. z o.o. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <Link
              to="/privacy"
              className="transition-opacity hover:opacity-80"
            >
              Privacy
            </Link>

            <Link
              to="/contact"
              className="transition-opacity hover:opacity-80"
            >
              Contact
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
