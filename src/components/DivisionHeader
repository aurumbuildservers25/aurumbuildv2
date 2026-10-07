import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function DivisionHeader({ division = "industrial" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const industrial = division === "industrial";

  const navItems = industrial
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
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b ${
        industrial
          ? "border-white/10 bg-[#03070C]/95 text-[#F2F3F0]"
          : "border-[#0F2740]/10 bg-[#F8F6F1]/95 text-[#0F2740]"
      } backdrop-blur-md`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-16">

        {/* LOGO */}
        <Link
          to={industrial ? "/industrial" : "/residential"}
          className="flex items-center"
          aria-label="AURUMBuild"
        >
          {industrial ? (
            <div className="flex items-center text-[18px] font-semibold tracking-[-0.04em] sm:text-[20px]">
              <span className="text-[#C39242]">AURUM</span>
              <span className="text-[#F2F3F0]">BUILD</span>
            </div>
          ) : (
            <img
              src="/images/aurumbuild-logo.png"
              alt="AURUMBuild"
              className="h-[20px] w-auto sm:h-[23px]"
            />
          )}
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={`text-[13px] font-medium transition-opacity hover:opacity-60 ${
                industrial ? "text-white/70" : "text-[#0F2740]/75"
              }`}
            >
              {label}
            </a>
          ))}

          <button
            type="button"
            className={`ml-2 text-[11px] font-semibold tracking-[0.14em] ${
              industrial ? "text-white/55" : "text-[#0F2740]/55"
            }`}
          >
            EN
          </button>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="grid h-10 w-10 place-items-center lg:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* MOBILE NAV */}
      {menuOpen && (
        <div
          className={`border-t px-5 pb-7 pt-4 lg:hidden ${
            industrial
              ? "border-white/10 bg-[#03070C]"
              : "border-[#0F2740]/10 bg-[#F8F6F1]"
          }`}
        >
          <nav className="flex flex-col">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`border-b py-4 text-[15px] ${
                  industrial
                    ? "border-white/10 text-white/80"
                    : "border-[#0F2740]/10 text-[#0F2740]/80"
                }`}
              >
                {label}
              </a>
            ))}

            <button
              type="button"
              className={`pt-5 text-left text-[11px] font-semibold tracking-[0.14em] ${
                industrial ? "text-white/50" : "text-[#0F2740]/50"
              }`}
            >
              EN
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
