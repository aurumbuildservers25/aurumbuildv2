import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

const SectionWrapper = ({ children, id, className = "" }) => (
  <motion.section
    id={id}
    data-section
    className={`grid align-content-start ${className}`}
    style={{
      paddingTop: "clamp(16px, 3vh, 32px)",
      paddingBottom: "clamp(24px, 5vh, 48px)",
      minHeight: "calc(100vh - var(--header-h-current, 64px))",
    }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    <div id={`${id}-heading`} tabIndex="-1"></div>
    {children}
  </motion.section>
);

export default function Home({ division = "industrial", setDivision = () => {} }) {
  const { t } = useI18n();

  useEffect(() => {
    if (division) document.documentElement.setAttribute("data-theme", division);
  }, [division]);

  const isIndustrial = division === "industrial";

  return (
    <div
      style={{
        backgroundColor: isIndustrial ? "#0C0E14" : "#F5F3F0",
        minHeight: "100vh",
      }}
      className="overflow-x-hidden min-w-0"
    >
      {/* HERO */}
      <header
        id="home"
        data-section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: isIndustrial
            ? "linear-gradient(to bottom, #0C0E14 0%, #132132 100%)"
            : "linear-gradient(to bottom, #ECEBE9 0%, #E8E6E3 100%)",
        }}
      >
        <div className="absolute inset-0 grid grid-cols-2 opacity-30">
          <div
            className="h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1547898141-9453293a34a0?auto=format&fit=crop&w=1200&q=80')",
            }}
          ></div>
          <div
            className="h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80')",
            }}
          ></div>
        </div>
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: isIndustrial
              ? "rgba(0,0,0,0.60)"
              : "rgba(255,255,255,0.75)",
          }}
        ></div>
        <div
          className="relative z-10 text-center px-4 sm:px-6 max-w-screen-xl mx-auto flex flex-col items-center justify-center"
          style={{ color: isIndustrial ? "white" : "#24324B" }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-3 sm:mb-4"
            style={{
              color: isIndustrial ? "#F1F5F9" : "#24324B",
              textShadow: isIndustrial ? "0 2px 8px rgba(0,0,0,0.3)" : "none",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t.hero.title}
            <span
              className="block text-2xl sm:text-3xl md:text-5xl font-semibold mt-2"
              style={{
                color: isIndustrial ? "#FFB833" : "#D9B566",
              }}
            >
              {t.hero.subtitle}
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto"
            style={{ color: isIndustrial ? "#C9D1D9" : "#4A5568" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.hero.description}
          </motion.p>

          {/* Toggle */}
          <motion.div
            className="my-6 sm:my-10 flex justify-center w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div
              className="p-1.5 rounded-full flex gap-1 border-2 w-full max-w-md"
              style={{
                backgroundColor: isIndustrial
                  ? "rgba(12,14,20,0.50)"
                  : "rgba(244,246,248,0.80)",
                backdropFilter: "blur(8px)",
                borderColor: isIndustrial
                  ? "#1E4A6B"
                  : "rgba(36,50,75,0.15)",
              }}
            >
              <button
                onClick={() => setDivision("industrial")}
                className={`flex-1 px-4 sm:px-8 py-2 text-sm sm:text-md font-bold rounded-full transition-all ${
                  isIndustrial ? "shadow-lg" : ""
                }`}
                style={{
                  backgroundColor: isIndustrial ? "#FFB833" : "transparent",
                  color: isIndustrial ? "#0C0E14" : "#24324B",
                }}
              >
                {t.hero.industrial}
              </button>
              <button
                onClick={() => setDivision("residential")}
                className={`flex-1 px-4 sm:px-8 py-2 text-sm sm:text-md font-bold rounded-full transition-all ${
                  !isIndustrial ? "shadow-md" : ""
                }`}
                style={{
                  backgroundColor: !isIndustrial ? "#8B5CF6" : "transparent",
                  color: !isIndustrial ? "white" : "#24324B",
                  boxShadow: !isIndustrial
                    ? "0 4px 12px rgba(139,92,246,0.25)"
                    : "none",
                }}
              >
                {t.hero.residential}
              </button>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full flex justify-center"
          >
            {isIndustrial ? (
              <Link to={createPageUrl("contact")} className="inline-block">
                <Button
                  className="font-semibold transition-all duration-300 px-8 py-3 text-sm sm:text-md rounded-full"
                  style={{
                    backgroundColor: "#8B5CF6",
                    color: "white",
                    boxShadow:
                      "0 8px 24px rgba(139,92,246,0.45), 0 0 40px rgba(139,92,246,0.20)",
                  }}
                >
                  {t.nav.contact}
                </Button>
              </Link>
            ) : (
              <Link to={createPageUrl("dreamhouse")} className="inline-block">
                <Button
                  className="font-semibold transition-all duration-300 px-8 py-3 text-sm sm:text-md rounded-full"
                  style={{
                    backgroundColor: "#D9B566",
                    color: "#24324B",
                    boxShadow:
                      "0 8px 24px rgba(217,181,102,0.45), 0 0 40px rgba(217,181,102,0.20)",
                  }}
                >
                  {t.hero.buildDream}
                </Button>
              </Link>
            )}
          </motion.div>
        </div>
      </header>

      {/* ABOUT */}
      <SectionWrapper id="about" className="border-b">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <motion.h2
            className="font-bold tracking-tight mb-4"
            style={{
              fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)",
              color: isIndustrial ? "#FFB833" : "#D9B566",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            {isIndustrial
              ? t.about.industrial.title
              : t.about.residential.title}
          </motion.h2>
          <p
            style={{
              color: isIndustrial ? "#C9D1D9" : "#4A5568",
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
            }}
          >
            {isIndustrial
              ? t.about.industrial.description
              : t.about.residential.description}
          </p>
          <p
            style={{
              color: isIndustrial ? "#7FCF8A" : "#2C7A7B",
              marginTop: "0.5rem",
              fontWeight: 600,
            }}
          >
            {isIndustrial
              ? t.about.industrial.microclaim
              : t.about.residential.microclaim}
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
}
