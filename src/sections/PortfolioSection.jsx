import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function PortfolioSection({
  division,            // "industrial" | "residential" (from parent)
  setDivision,         // parent setter (from main toggle)
  safeT = {},
}) {
  const isIndustrial = division === "industrial";

  // Fallback texts
  const titleText = safeT?.portfolio_title ?? "Our Portfolio";
  const residential = safeT?.projects?.residential ?? [
    "Coastal Residence, Italy",
    "Modern Villa, Turkey",
    "Luxury Apartments, Poland",
  ];

  // Theme
  const pageBg = isIndustrial ? "#0C0E14" : "#F5F3F0";
  const text = isIndustrial ? "#F1F5F9" : "#24324B";
  const accent = isIndustrial ? "#FFB833" : "#D9B566";
  const tabIdle = isIndustrial ? "#E2E8F0" : "#24324B";
  const frameBg = isIndustrial ? "rgba(27,42,58,0.70)" : "rgba(36,50,75,0.06)";
  const frameBorder = isIndustrial ? "rgba(255,255,255,0.10)" : "rgba(36,50,75,0.15)";

  // Projects (fixed 3 slots to avoid layout jump)
  const industrialOne = { img: null, comingSoon: true, title: "Foundry, Poland" };
  const residentialThree = [
    { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", title: residential[0] },
    { img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", title: residential[1] },
    { img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80", title: residential[2] },
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
        {/* Title */}
        <h2
          className="text-center font-bold mb-6"
          style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)", color: accent, lineHeight: 1.15 }}
        >
          {titleText}
        </h2>

        {/* Toggle pill (controlled by parent) */}
        <div
          className="relative mx-auto mb-6 flex items-center rounded-full px-1"
          style={{
            width: 280,
            height: 44,
            border: `1px solid ${frameBorder}`,
            backgroundColor: frameBg,
          }}
        >
          {/* Animated indicator */}
          <motion.div
            layout
            className="absolute top-1/2 -translate-y-1/2 rounded-full"
            style={{
              height: 36,
              width: 138, // ~ half of 280 - padding
              left: isIndustrial ? 4 : 280 - 4 - 138,
              backgroundColor: accent,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
          {/* Buttons sit above indicator */}
          <button
            type="button"
            onClick={() => setDivision?.("industrial")}
            className="relative z-10 flex-1 h-[36px] rounded-full font-semibold text-sm"
            style={{
              color: isIndustrial ? pageBg : tabIdle,
              transition: "color .2s ease",
            }}
          >
            Industrial
          </button>
          <button
            type="button"
            onClick={() => setDivision?.("residential")}
            className="relative z-10 flex-1 h-[36px] rounded-full font-semibold text-sm"
            style={{
              color: !isIndustrial ? pageBg : tabIdle,
              transition: "color .2s ease",
            }}
          >
            Residential
          </button>
        </div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${division}-projects-stable`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
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
                        style={{ backgroundColor: isIndustrial ? "#0F1A26" : "#EAE8E2" }}
                      >
                        <span className="text-sm font-medium" style={{ color: isIndustrial ? "#9AA4B2" : "#475569" }}>
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
