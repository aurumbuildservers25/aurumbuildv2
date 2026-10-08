
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAVIGATION = {
  industrial: [
    {
      label: "Residential",
      path: "/residential",
      switchDivision: true,
    },
    {
      label: "Digital Twin",
      path: "/industrial/digital-twin",
    },
    {
      label: "Technologies",
      path: "/industrial/technologies",
    },
    {
      label: "Projects",
      path: "/industrial/projects",
    },
  ],
  residential: [
    {
      label: "Industrial",
      path: "/industrial",
      switchDivision: true,
    },
    {
      label: "Dreamhouse",
      path: "/Dreamhouse",
    },
    {
      label: "Our Services",
      path: "/residential/services",
    },
    {
      label: "Projects",
      path: "/residential/projects",
    },
  ],
};

export default function DivisionHeader({
  division = "residential",
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const isIndustrial =
    division.toLowerCase() === "industrial";

  const links = isIndustrial
    ? NAVIGATION.industrial
    : NAVIGATION.residential;

  const background = isIndustrial
    ? "bg-[#06111C]"
    : "bg-[#FFF9EF]";

  const textColor = isIndustrial
    ? "text-[#F6F5F1]"
    : "text-[#102D5B]";

  const borderColor = isIndustrial
    ? "border-white/15"
    : "border-[#102D5B]/15";

  const activeColor = isIndustrial
    ? "text-[#F2AA2A]"
    : "text-[#B28B45]";

  const contactStyle = isIndustrial
    ? "border border-[#F2AA2A] text-[#F2AA2A] hover:bg-[#F2AA2A] hover:text-[#06111C]"
    : "bg-[#102D5B] text-white hover:bg-[#1B4177]";

  const logo = isIndustrial
    ? "/images/aurumbuild-logo-industrial.svg"
    : "/images/aurumbuild-logo-residential.svg";

  return (
    <header
      className={`relative z-50 ${background} ${textColor}`}
    >
      {/* HEADER BAR */}
      <div
        className={`
          mx-auto flex h-[76px] w-full
          max-w-[1600px] items-center
          justify-between gap-7 border-b
          px-6 sm:px-10
          lg:h-[92px] lg:px-12 xl:px-20
          ${borderColor}
        `}
      >
        {/* LOGO */}
        <Link
          to="/"
          aria-label="AURUMBUILD home"
          onClick={() => setMenuOpen(false)}
          className="shrink-0"
        >
          <img
            src={logo}
            alt="AURUMBUILD"
            className="
              block h-auto w-[167px]
              sm:w-[187px] xl:w-[210px]
            "
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div
          className="
            ml-auto hidden items-center
            justify-end gap-7
            lg:flex xl:gap-9 2xl:gap-11
          "
        >
          <nav
            aria-label={`${division} navigation`}
            className="
              flex items-center gap-6
              xl:gap-9 2xl:gap-11
            "
          >
            {links.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`
                  whitespace-nowrap
                  text-[12px] font-medium
                  tracking-[0.025em]
                  transition-opacity duration-200
                  hover:opacity-70
                  ${
                    pathname === item.path
                      ? activeColor
                      : textColor
                  }
                `}
              >
                <span className="inline-flex items-center gap-1.5">
                  {item.label}

                  {item.switchDivision && (
                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  )}
                </span>
              </Link>
            ))}
          </nav>

          {/* CONTACT — NO ARROW */}
          <Link
            to="/contact"
            className={`
              flex h-[42px] min-w-[116px]
              items-center justify-center
              px-6 text-[11px] font-semibold
              uppercase tracking-[0.12em]
              transition-colors
              ${contactStyle}
            `}
          >
            Contact
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          type="button"
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
          aria-controls={`mobile-nav-${division}`}
          onClick={() => setMenuOpen(!menuOpen)}
          className={`
            ml-auto flex h-11 w-11
            shrink-0 items-center
            justify-center lg:hidden
            ${textColor}
          `}
        >
          {menuOpen ? (
            <X size={25} strokeWidth={1.7} />
          ) : (
            <Menu size={25} strokeWidth={1.7} />
          )}
        </button>
      </div>

      {/* FULL-WIDTH MOBILE MENU */}
      {menuOpen && (
        <nav
          id={`mobile-nav-${division}`}
          aria-label={`${division} mobile navigation`}
          className={`
            w-full border-b px-6 pb-7 pt-3
            shadow-[0_16px_25px_rgba(0,0,0,0.1)]
            sm:px-10 lg:hidden
            ${borderColor} ${background}
          `}
        >
          {links.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`
                flex min-h-[54px]
                items-center justify-between
                border-b text-[16px] font-medium
                ${borderColor}
                ${
                  pathname === item.path
                    ? activeColor
                    : textColor
                }
              `}
            >
              {item.label}

              {item.switchDivision && (
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                />
              )}
            </Link>
          ))}

          {/* MOBILE CONTACT */}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={`
              mt-6 inline-flex min-h-[46px]
              items-center justify-center
              px-7 text-[12px] font-semibold
              uppercase tracking-[0.12em]
              ${contactStyle}
            `}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
