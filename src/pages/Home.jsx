import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  ArrowRight, CheckCircle, MapPin, FileCheck, HardHat, Users, KeyRound,
  ShieldCheck, Globe, Star, Cpu, BarChart4, Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SectionWrapper = ({ children, id, className = "" }) => (
  <motion.section
    id={id}
    data-section
    className={`grid align-content-start ${className}`}
    style={{
      paddingTop: "clamp(16px, 3vh, 32px)",
      paddingBottom: "clamp(24px, 5vh, 48px)",
      minHeight: "calc(100vh - var(--header-h-current, 64px))", // ✅ fixed parentheses
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

export default function Home({ t = {}, division = "industrial", setDivision }) {
  useEffect(() => {
    if (division) {
      document.documentElement.setAttribute("data-theme", division);
    }
  }, [division]);

  const safeT = {
    nav: t?.nav || { contact: "Contact" },
    hero: t?.hero || {
      title: "Building Tomorrow, Today.",
      subtitle: "Industrial & Residential Turnkey Projects",
      description:
        "From initial design to final handover, we deliver excellence and precision in every project across Europe.",
      industrial: "Industrial",
      residential: "Residential",
      buildDream: "Build Your Dream",
    },
    about: t?.about || {
      residential: {
        title: "Living the dream",
        description: "Quality residences",
        microclaim: "Excellence",
      },
      industrial: {
        title: "General Contractor",
        description: "Projects built to last",
        microclaim: "Efficiency",
      },
      reach: "European Reach",
      methods: "Proven Methods",
      team: "Expert Team",
      quality: "Quality",
    },
    process: t?.process || {
      title: "Our Process",
      description: "Transparent and efficient",
      steps: {
        land: { title: "Land", desc: "Secure location" },
        permits: { title: "Permits", desc: "Get approval" },
        design: { title: "Design", desc: "Blueprint to life" },
        supervision: { title: "Supervision", desc: "Quality control" },
        handover: { title: "Handover", desc: "Final delivery" },
      },
    },
    technology: t?.technology || {
      title: "Technology",
      challenge_title: "Challenge",
      challenge_desc: "Manual monitoring issues",
      solution_title: "Solution",
      solution_desc: "4D BIM digital twin",
      feature_4dbim_title: "4D BIM",
      feature_4dbim_desc: "Integrated tracking",
      feature_quality_title: "Quality",
      feature_quality_desc: "AI-powered",
      feature_future_title: "Future",
      feature_future_desc: "Smart tools",
      cta: "Explore Technology",
    },
    bim_monitoring: t?.bim_monitoring || {
      title: "BIM Monitoring",
      subtitle: "4D progress tracking",
      benefits: ["Reduce time", "Early detection", "Better control"],
    },
    projects: t?.projects || {
      title: "Our Portfolio",
      industrial: ["Project 1", "Project 2", "Project 3"],
      residential: ["Villa 1", "Apartment 2", "Residence 3"],
    },
  };

  const residentialPalette = {
    background: "transparent",
    title: "#D9B566",
    text_primary: "#24324B",
    text_secondary: "#4A5568",
    accent_main: "#D9B566",
    accent_secondary: "#2C7A7B",
    divider: "rgba(139,105,20,0.25)",
  };

  const industrialPalette = {
    background: "#0C0E14",
    text_primary: "#E2E8F0",
    text_secondary: "#C9D1D9",
    accent_main: "#FFB833",
    accent_hover: "#E19A00",
    accent_secondary: "#7FCF8A",
    divider: "rgba(255,184,51,0.18)",
  };

  const currentPalette =
    division === "residential" ? residentialPalette : industrialPalette;
  const currentContent =
    division === "residential"
      ? safeT.about.residential
      : safeT.about.industrial;

  return (
    <div
      style={{
        backgroundColor:
          division === "industrial" ? "#0C0E14" : "#F5F3F0",
        minHeight: "100vh",
      }}
      className="overflow-x-hidden min-w-0"
    >
      {/* ✅ Hero Section */}
      <header
        id="home"
        data-section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          background:
            division === "industrial"
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
            backgroundColor:
              division === "industrial"
                ? "rgba(0,0,0,0.60)"
                : "rgba(255,255,255,0.75)",
          }}
        ></div>

        <div
          className="relative z-10 text-center px-4 sm:px-6 max-w-screen-xl mx-auto flex flex-col items-center justify-center"
          style={{
            color: division === "industrial" ? "white" : "#24324B",
          }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-3 sm:mb-4"
            style={{
              color:
                division === "industrial" ? "#F1F5F9" : "#24324B",
              textShadow:
                division === "industrial"
                  ? "0 2px 8px rgba(0,0,0,0.3)"
                  : "none",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {safeT.hero.title}
            <span
              className="block text-2xl sm:text-3xl md:text-5xl font-semibold mt-2"
              style={{
                color:
                  division === "industrial" ? "#FFB833" : "#D9B566",
              }}
            >
              {safeT.hero.subtitle}
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto"
            style={{
              color:
                division === "industrial" ? "#C9D1D9" : "#4A5568",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {safeT.hero.description}
          </motion.p>

          <motion.div
            className="my-6 sm:my-10 flex justify-center w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div
              className="p-1.5 rounded-full flex gap-1 border-2 w-full max-w-md"
              style={{
                backgroundColor:
                  division === "industrial"
                    ? "rgba(12,14,20,0.50)"
                    : "rgba(244,246,248,0.80)",
                backdropFilter: "blur(8px)",
                borderColor:
                  division === "industrial"
                    ? "#1E4A6B"
                    : "rgba(36,50,75,0.15)",
              }}
            >
              <button
                onClick={() => setDivision("industrial")}
                className={`flex-1 px-4 sm:px-8 py-2 text-sm sm:text-md font-bold rounded-full transition-all ${
                  division === "industrial" ? "shadow-lg" : ""
                }`}
                style={{
                  backgroundColor:
                    division === "industrial" ? "#FFB833" : "transparent",
                  color:
                    division === "industrial" ? "#0C0E14" : "#24324B",
                }}
              >
                {safeT.hero.industrial}
              </button>
              <button
                onClick={() => setDivision("residential")}
                className={`flex-1 px-4 sm:px-8 py-2 text-sm sm:text-md font-bold rounded-full transition-all ${
                  division === "residential" ? "shadow-md" : ""
                }`}
                style={{
                  backgroundColor:
                    division === "residential" ? "#8B5CF6" : "transparent",
                  color:
                    division === "residential" ? "white" : "#24324B",
                }}
              >
                {safeT.hero.residential}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full flex justify-center"
          >
            {division === "residential" ? (
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
                  {safeT.hero.buildDream}
                </Button>
              </Link>
            ) : (
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
                  {safeT.nav.contact}
                </Button>
              </Link>
            )}
          </motion.div>
        </div>
      </header>
    </div>
  );
}
