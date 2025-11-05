// src/sections/PortfolioSection.jsx
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function PortfolioSection({ initialDivision = "industrial", safeT = {} }) {
  const [division, setDivision] = useState(initialDivision);

  const titleText = safeT?.portfolio_title ?? "Our Portfolio";
  const residential = safeT?.projects?.residential ?? [
    "Coastal Residence, Italy",
    "Modern Villa, Turkey",
    "Luxury Apartments, Poland",
  ];

  const isIndustrial = division === "industrial";
  const pageBg = isIndustrial ? "#0C0E14" : "#F5F3F0";
  const text = isIndustrial ? "#F1F5F9" : "#24324B";
  const accent = isIndustrial ? "#FFB833" : "#D9B566";
  const toggleBorder = isIndustrial ? "rgba(255,255,255,0.10)" : "rgba(36,50,75,0.15)";
  const toggleBg = isIndustrial ? "rgba(27,42,58,0.70)" : "rgba(36,50,75,0.06)";
  const tabTextIdle = isIndustrial ? "#E2E8F0" : "#24324B";

  const industrialOne = {
    img: null,
    comingSoon: true,
    title: "Foundry, Poland",
    type: "industrial",
  };

  const residentialThree = [
    {
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      title: residential[0],
      type: "residential",
    },
    {
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      title: residential[1],
      type: "residential",
    },
    {
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      title: residential[2],
      type: "residential",
    },
  ];

  const projects = isIndustrial
    ? [industrialOne, { placeholder: true }, { placeholder: true }]
    : residentialThree;

  const cardBg = isIndustrial ? "#132132" : "#F7F7F5";
  const cardBorder = isIndustrial ? "rgba(255,255,255,0.06)" : "rgba(36,50,75,0.08)";
  const titleColor = accent;

  return (
    <section className="w-full" style={{ backgroundColor: pageBg, color: text }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <h2
          className="text-center font-bold mb-6"
          style={{
            fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)",
            color: accent,
            lineHeight: 1.15,
          }}
        >
          {titleText}
        </h2>

        <div
          className="mx-auto mb-6 flex items-center rounded-full px-1"
          style={{
            width: 280,
            height: 44,
            border: `1px solid ${toggleBorder}`,
            backgroundColor: toggleBg,
          }}
        >
          <button
            type="button"
            onClick={() => setDivision("industrial")}
            className="flex-1 h-[36px] rounded-full font-semibold text-sm"
            style={{
              color: division === "industrial" ? pageBg : tabTextIdle,
              backgroundColor: division === "industrial" ? accent : "transparent",
              boxShadow:
                division === "industrial"
                  ? "0 0 0 2px rgba(0,0,0,0.15) inset, 0 6px 14px rgba(0,0,0,0.25)"
                  : "none",
              transition: "all .2s ease",
            }}
          >
            Industrial
          </button>

          <button
            type="button"
            onClick={() => setDivision("residential")}
            className="flex-1 h-[36px] rounded-full font-semibold text-sm"
            style={{
              color: division === "residential" ? pageBg : tabTextIdle,
              backgroundColor: division === "residential" ? accent : "transparent",
              boxShadow:
                division === "residential"
                  ? "0 0 0 2px rgba(0,0,0,0.15) inset, 0 6px 14px rgba(0,0,0,0.25)"
                  : "none",
              transition: "all .2s ease",
            }}
          >
            Residential
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${division}-projects-stable`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{ minHeight: 400 }}
          >
            {projects.map((proj, i) => {
              if (proj.placeholder) {
                return (
                  <div key={`ghost-${i}`} className="opacity-0 pointer-events-none">
                    <Card className="overflow-hidden group border" style={{ backgroundColor: cardBg, borderColor: cardBorder }}>
                      <div className="aspect-[4/3]" />
                      <CardContent className="p-5">
                        <h3 className="text-lg font-bold" style={{ color: titleColor }}>
                          &nbsp;
                        </h3>
                      </CardContent>
                    </Card>
                  </div>
                );
              }

              return (
                <Card
                  key={proj.title}
                  className="overflow-hidden group border transition-all duration-300 hover:shadow-2xl"
                  style={{ backgroundColor: cardBg, borderColor: cardBorder }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    {proj.img ? (
                      <img
                        src={proj.img}
                        alt={proj.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="w-full h-full grid place-items-center"
                        style={{
                          backgroundColor: isIndustrial ? "#0F1A26" : "#EAE8E2",
                        }}
                      >
                        <span
                          className="text-sm font-medium"
                          style={{
                            color: isIndustrial ? "#9AA4B2" : "#475569",
                          }}
                        >
                          Coming soon
                        </span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-bold" style={{ color: titleColor }}>
                      {proj.title}
                    </h3>
                  </CardContent>
                </Card>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
