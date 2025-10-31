// src/pages/Home.jsx
import React, { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { createPageUrl } from "@/utils"
import { motion } from "framer-motion"

export default function Home({ t = {}, division = "industrial", setDivision }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", division)
  }, [division])

  const isIndustrial = division === "industrial"

  const safeT = {
    hero: t?.hero || {
      title: "Building Tomorrow, Today.",
      subtitle: "Industrial & Residential Turnkey Projects",
      description:
        "From initial design to final handover, we deliver excellence and precision in every project across Europe.",
      industrial: "Industrial",
      residential: "Residential",
      buildDream: "Build Your Dream",
    },
    nav: t?.nav || { contact: "Contact" },
  }

  return (
    <div
      style={{
        backgroundColor: isIndustrial ? "#0C0E14" : "#F5F3F0",
        color: isIndustrial ? "#E2E8F0" : "#24324B",
        minHeight: "100vh",
        transition: "background-color 0.5s ease, color 0.5s ease",
      }}
    >
      <header
        className="h-screen flex flex-col justify-center items-center text-center px-6"
        style={{
          background: isIndustrial
            ? "linear-gradient(to bottom, #0C0E14 0%, #132132 100%)"
            : "linear-gradient(to bottom, #ECEBE9 0%, #E8E6E3 100%)",
        }}
      >
        <motion.h1
          className="text-5xl font-extrabold mb-3"
          style={{
            color: isIndustrial ? "#F1F5F9" : "#24324B",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {safeT.hero.title}
        </motion.h1>

        <motion.h2
          className="text-3xl font-semibold mb-6"
          style={{
            color: isIndustrial ? "#FFB833" : "#D9B566",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {safeT.hero.subtitle}
        </motion.h2>

        <motion.p
          className="max-w-2xl text-lg mb-10"
          style={{ color: isIndustrial ? "#C9D1D9" : "#4A5568" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {safeT.hero.description}
        </motion.p>

        {/* ✅ THEME TOGGLE */}
        <div
          className="p-1.5 rounded-full flex gap-1 border-2 max-w-md w-full mb-8"
          style={{
            backgroundColor: isIndustrial
              ? "rgba(12,14,20,0.5)"
              : "rgba(244,246,248,0.8)",
            borderColor: isIndustrial ? "#1E4A6B" : "rgba(36,50,75,0.15)",
            backdropFilter: "blur(8px)",
          }}
        >
          <button
            onClick={() => setDivision("industrial")}
            className="flex-1 px-6 py-2 font-bold rounded-full transition-all"
            style={{
              backgroundColor: isIndustrial ? "#FFB833" : "transparent",
              color: isIndustrial ? "#0C0E14" : "#24324B",
              boxShadow: isIndustrial
                ? "0 4px 12px rgba(255,184,51,0.4)"
                : "none",
            }}
          >
            {safeT.hero.industrial}
          </button>
          <button
            onClick={() => setDivision("residential")}
            className="flex-1 px-6 py-2 font-bold rounded-full transition-all"
            style={{
              backgroundColor: !isIndustrial ? "#8B5CF6" : "transparent",
              color: !isIndustrial ? "#FFF" : "#24324B",
              boxShadow: !isIndustrial
                ? "0 4px 12px rgba(139,92,246,0.4)"
                : "none",
            }}
          >
            {safeT.hero.residential}
          </button>
        </div>

        {/* CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {isIndustrial ? (
            <Link to={createPageUrl("contact")}>
              <Button
                className="font-semibold px-8 py-3 rounded-full"
                style={{
                  backgroundColor: "#8B5CF6",
                  color: "white",
                  boxShadow:
                    "0 8px 24px rgba(139,92,246,0.45), 0 0 40px rgba(139,92,246,0.2)",
                }}
              >
                {safeT.nav.contact}
              </Button>
            </Link>
          ) : (
            <Link to={createPageUrl("dreamhouse")}>
              <Button
                className="font-semibold px-8 py-3 rounded-full"
                style={{
                  backgroundColor: "#D9B566",
                  color: "#24324B",
                  boxShadow:
                    "0 8px 24px rgba(217,181,102,0.45), 0 0 40px rgba(217,181,102,0.2)",
                }}
              >
                {safeT.hero.buildDream}
              </Button>
            </Link>
          )}
        </motion.div>
      </header>
    </div>
  )
}
