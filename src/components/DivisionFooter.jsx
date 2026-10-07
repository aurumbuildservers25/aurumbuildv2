import React from "react";
import { Link } from "react-router-dom";

export default function DivisionFooter({ division = "industrial" }) {
  const industrial = division === "industrial";

  const links = industrial
    ? [
        ["Capabilities", "#capabilities"],
        ["Sectors", "#sectors"],
        ["Approach", "#approach"],
        ["Contact", "#contact"],
      ]
    : [
        ["Services", "#services"],
        ["Dreamhouse", "#dreamhouse"],
        ["Approach", "#approach"],
        ["Contact", "#contact"],
      ];

  return (
    <footer
      id="contact"
      className={
        industrial
          ? "border-t border-white/10 bg-[#03070C] text-[#F2F3F0]"
          : "border-t border-[#0F2740]/10 bg-[#F8F6F1] text-[#0F2740]"
      }
    >
      <div className="mx-auto max-w-[1440px] px-5 py-12 md:px-10 md:py-16 lg:px-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          {/* BRAND */}
          <div>
            {industrial ? (
              <div className="flex items-center text-[20px] font-semibold tracking-[-0.04em]">
                <span className="text-[#C39242]">AURUM</span>
                <span className="text-[#F2F3F0]">BUILD</span>
              </div>
            ) : (
              <img
                src="/images/aurumbuild-logo.png"
                alt="AURUMBuild"
                className="h-[24px] w-auto"
              />
            )}

            <p
              className={`mt-5 max-w-sm text-sm leading-6 ${
                industrial ? "text-white/50" : "text-[#0F2740]/55"
              }`}
            >
              {industrial
                ? "Engineering, technical supervision and digital project control for complex construction."
                : "One trusted partner for residential projects in Europe — from first decisions to completed home."}
            </p>
          </div>

          {/* NAVIGATION */}
          <nav className="grid grid-cols-2 gap-x-10 gap-y-4 md:flex md:gap-8">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className={`text-sm transition-opacity hover:opacity-60 ${
                  industrial ? "text-white/60" : "text-[#0F2740]/65"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div
          className={`mt-12 flex flex-col gap-3 border-t pt-6 text-xs md:flex-row md:items-center md:justify-between ${
            industrial
              ? "border-white/10 text-white/35"
              : "border-[#0F2740]/10 text-[#0F2740]/40"
          }`}
        >
          <span>© {new Date().getFullYear()} AURUMBuild</span>

          <Link
            to="/"
            className="transition-opacity hover:opacity-60"
          >
            AURUMBuild
          </Link>
        </div>
      </div>
    </footer>
  );
}
