import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
      <main className="h-[100dvh] bg-[#090d14] text-white flex flex-col overflow-hidden">

      {/* Brand */}
      <div className="h-[14vh] min-h-[90px] flex items-center justify-center px-6">
        <div className="text-xl sm:text-2xl font-semibold tracking-[0.24em]">
          AURUMBUILD
        </div>
      </div>

      {/* Division Selection */}
      <div className="flex-1 grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">

        {/* Industrial */}
        <Link
          to="/home"
          className="group relative flex items-center justify-center px-6 border-t border-white/10 md:border-t-0 md:border-r"
        >
          <div className="text-center">
            <div className="text-[11px] tracking-[0.28em] text-[#ffb52e] mb-3">
              01
            </div>

            <h1 className="text-[clamp(2.3rem,11vw,4.5rem)] md:text-6xl font-semibold tracking-tight">
              INDUSTRIAL
            </h1>

            <p className="mt-3 text-[13px] sm:text-sm text-white/55">
              Project Control · Technical Supervision · Digital Twin
            </p>

            <div className="mt-5 text-xs tracking-[0.22em] text-[#ffb52e]">
              ENTER
            </div>
          </div>
        </Link>

        {/* Residential */}
        <Link
          to="/home"
          className="group relative flex items-center justify-center px-6 border-t border-white/10"
        >
          <div className="text-center">
            <div className="text-[11px] tracking-[0.28em] text-[#ffb52e] mb-3">
              02
            </div>

            <h1 className="text-[clamp(2.3rem,11vw,4.5rem)] md:text-6xl font-semibold tracking-tight">
              RESIDENTIAL
            </h1>

            <p className="mt-3 text-[13px] sm:text-sm text-white/55">
              Development · Construction · Turnkey Delivery
            </p>

            <div className="mt-5 text-xs tracking-[0.22em] text-[#ffb52e]">
              ENTER
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
