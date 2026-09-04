import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <main className="h-[100dvh] text-white flex flex-col overflow-hidden bg-[#0B0F16]">

      {/* Brand */}
      <div className="h-[11vh] min-h-[72px] flex items-center justify-center px-6">
        <div className="text-[17px] sm:text-xl font-semibold tracking-[0.24em] text-[#F5F7FA]">
          AURUMBUILD
        </div>
      </div>

      {/* Division Selection */}
      <div className="flex-1 grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">

        {/* Industrial */}
        <Link
          to="/industrial"
          className="
            group
            relative
            flex
            items-center
            justify-center
            px-6
            border-t
            border-white/10
            md:border-t-0
            md:border-r
            bg-[#090D14]
          "
        >
          <div className="text-center">
            <div className="text-[10px] tracking-[0.28em] text-[#FFB52E] mb-3">
              01
            </div>

            <h1 className="text-[clamp(2rem,9.2vw,4.2rem)] md:text-6xl font-semibold tracking-tight text-[#F5F7FA]">
              INDUSTRIAL
            </h1>

            <p className="mt-3 text-[12px] sm:text-sm text-white/65">
              Project Control · Technical Supervision · Digital Twin
            </p>

            <div className="mt-4 text-[11px] tracking-[0.22em] text-[#FFB52E]">
              ENTER
            </div>
          </div>
        </Link>

        {/* Residential */}
        <Link
          to="/home"
          className="
            group
            relative
            flex
            items-center
            justify-center
            px-6
            border-t
            border-white/10
            bg-[#17140F]
          "
        >
          <div className="text-center">
            <div className="text-[10px] tracking-[0.28em] text-[#D9A24A] mb-3">
              02
            </div>

            <h1 className="text-[clamp(2rem,9.2vw,4.2rem)] md:text-6xl font-semibold tracking-tight text-[#F7F3EC]">
              RESIDENTIAL
            </h1>

            <p className="mt-3 text-[12px] sm:text-sm text-[#F7F3EC]/65">
              Development · Construction · Turnkey Delivery
            </p>

            <div className="mt-4 text-[11px] tracking-[0.22em] text-[#D9A24A]">
              ENTER
            </div>
          </div>
        </Link>
      </div>

      {/* Site update notice */}
      <div className="px-5 py-3 border-t border-white/10 bg-[#0B0F16] text-center">
        <div className="text-[9px] tracking-[0.24em] text-[#FFB52E]">
          AURUMBUILD WEBSITE IS EVOLVING
        </div>

        <div className="mt-1 text-[10px] sm:text-xs text-white/45">
          We’re currently refining our Industrial and Residential experiences.
        </div>
      </div>

    </main>
  );
}
