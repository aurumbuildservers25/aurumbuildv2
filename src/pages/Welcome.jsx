import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col">
      <div className="flex-1 grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 relative">

        {/* Center Brand */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-center">
          <div className="text-xl md:text-2xl font-semibold tracking-[0.28em]">
            AURUMBUILD
          </div>
        </div>

        {/* Industrial */}
        <Link
          to="/home"
          className="group relative flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/3 left-1/4 w-40 h-px bg-[#d7a43a] rotate-45" />
            <div className="absolute top-1/2 left-1/3 w-56 h-px bg-white/20 -rotate-12" />
            <div className="absolute bottom-1/3 right-1/4 w-32 h-px bg-[#d7a43a]/50 rotate-90" />
          </div>

          <div className="relative z-10 text-center px-8">
            <div className="text-xs tracking-[0.35em] text-[#d7a43a] mb-4">
              01
            </div>

            <h2 className="text-4xl md:text-6xl font-medium tracking-tight">
              INDUSTRIAL
            </h2>

            <p className="mt-4 text-sm md:text-base text-white/50 tracking-wide">
              Engineering · Project Control · Digital Assets
            </p>

            <div className="mt-8 text-xs tracking-[0.25em] text-white/50 group-hover:text-white transition">
              ENTER
            </div>
          </div>
        </Link>

        {/* Residential */}
        <Link
          to="/home"
          className="group relative flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/3 right-1/4 w-40 h-px bg-[#d7a43a] -rotate-45" />
            <div className="absolute top-1/2 right-1/3 w-56 h-px bg-white/20 rotate-12" />
            <div className="absolute bottom-1/3 left-1/4 w-32 h-px bg-[#d7a43a]/50 rotate-90" />
          </div>

          <div className="relative z-10 text-center px-8">
            <div className="text-xs tracking-[0.35em] text-[#d7a43a] mb-4">
              02
            </div>

            <h2 className="text-4xl md:text-6xl font-medium tracking-tight">
              RESIDENTIAL
            </h2>

            <p className="mt-4 text-sm md:text-base text-white/50 tracking-wide">
              Development · Construction · Turnkey Delivery
            </p>

            <div className="mt-8 text-xs tracking-[0.25em] text-white/50 group-hover:text-white transition">
              ENTER
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
