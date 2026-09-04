import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <main className="h-[100dvh] text-white flex flex-col overflow-hidden bg-[#0B0F16]">

      {/* Brand */}
      <div className="h-[13vh] min-h-[82px] flex items-center justify-center px-6">
        <div className="text-lg sm:text-xl font-semibold tracking-[0.24em] text-[#F5F7FA]">
          AURUMBUILD
        </div>
      </div>

      {/* Division Selection */}
      <div className="flex-1 grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">

        {/* Industrial */}
        <Link
          to="/Industrial"
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
            <div className="text-[11px] tracking-[0.28em] text-[#FFB52E] mb-3">
              01
            </div>

            <h1 className="text-[clamp(2.15rem,10vw,4.3rem)] md:text-6xl font-semibold tracking-tight text-[#F5F7FA]">
              INDUSTRIAL
            </h1>

            <p className="mt-3 text-[13px] sm:text-sm text-white/65">
              Project Control · Technical Supervision · Digital Twin
            </p>

            <div className="mt-5 text-xs tracking-[0.22em] text-[#FFB52E]">
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
            bg-[#12110F]
          "
        >
          <div className="text-center">
            <div className="text-[11px] tracking-[0.28em] text-[#D9A24A] mb-3">
              02
            </div>

            <h1 className="text-[clamp(2.15rem,10vw,4.3rem)] md:text-6xl font-semibold tracking-tight text-[#F7F3EC]">
              RESIDENTIAL
            </h1>

            <p className="mt-3 text-[13px] sm:text-sm text-[#F7F3EC]/65">
              Development · Construction · Turnkey Delivery
            </p>

            <div className="mt-5 text-xs tracking-[0.22em] text-[#D9A24A]">
              ENTER
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
