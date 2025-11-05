import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import DivisionToggle from "@/components/DivisionToggle";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Props:
 *  - division: "industrial" | "residential"  (from Home)
 *  - setDivision: (val) => void              (from Home)
 *  - safeT: translations object (already used elsewhere)
 */
export default function PortfolioSection({ division, setDivision, safeT }) {
  // Theme colors (matches the rest of your site)
  const isIndustrial = division === "industrial";
  const bgCard = isIndustrial ? "#132132" : "#F7F7F5";
  const borderCard = isIndustrial
    ? "rgba(255,255,255,0.06)"
    : "rgba(36,50,75,0.08)";
  const titleColor = isIndustrial ? "#FFB833" : "#D9B566";
  const phBg = isIndustrial ? "#0F1A26" : "#EAE8E2";
  const phText = isIndustrial ? "#9AA4B2" : "#475569";

  // ---- Data (1 Industrial + 3 Residential) ----
  const industrialOne = {
    img: null, // coming soon box
    title: "Foundry, Poland",
    type: "industrial",
  };

  const residentialThree = [
    {
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=70",
      title: safeT?.projects?.residential?.[0] ?? "Seaside Residence, Italy",
      type: "residential",
    },
    {
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=70",
      title: safeT?.projects?.residential?.[1] ?? "Modern Villa, Turkey",
      type: "residential",
    },
    {
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=70",
      title: safeT?.projects?.residential?.[2] ?? "Luxury Apartments, Poland",
      type: "residential",
    },
  ];

  // Build a fixed 3-slot array for both tabs -> layout never changes
  const projects = isIndustrial
    ? [
        industrialOne,
        { placeholder: true }, // invisible filler (keeps same width/height)
        { placeholder: true },
      ]
    : residentialThree;

  return (
    <section className="py-10">
      <h2
        className="text-center font-extrabold mb-5"
        style={{
          color: titleColor,
          fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
          letterSpacing: 0.2,
        }}
      >
        {safeT?.portfolioTitle ?? "Our Portfolio"}
      </h2>

      {/* The SAME toggle as the hero (shared state) */}
      <div className="flex justify-center mb-6">
        <DivisionToggle
          division={division}
          setDivision={setDivision}
          theme={division}
        />
      </div>

      {/* Projects grid (stable layout) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`portfolio-${division}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ minHeight: 420 }} // keeps container height steady
        >
          {projects.map((proj, i) => {
            // Invisible ghost card -> keeps exact slot size
            if (proj.placeholder) {
              return (
                <div key={`ghost-${i}`} className="opacity-0 pointer-events-none">
                  <Card
                    className="overflow-hidden border"
                    style={{ backgroundColor: bgCard, borderColor: borderCard }}
                  >
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

            // Real card (Foundry "coming soon" or Residential with image)
            return (
              <Card
                key={proj.title}
                className="overflow-hidden group border transition-shadow duration-300 hover:shadow-2xl"
                style={{ backgroundColor: bgCard, borderColor: borderCard }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  {proj.img ? (
                    <img
                      src={proj.img}
                      alt={proj.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div
                      className="w-full h-full grid place-items-center"
                      style={{ backgroundColor: phBg }}
                    >
                      <span className="text-sm font-medium" style={{ color: phText }}>
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
    </section>
  );
}
