import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  CheckCircle,
  Cpu,
  BarChart4,
  Sparkles,
  Scan,
  Eye,
  Shield,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/i18n";

export default function Technology({ division = "industrial" }) {
  const { t } = useI18n();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ---- THEME (industrial/residential) ----
  const isIndustrial = division === "industrial";
  const palette = {
    pageBg: isIndustrial ? "#0C0E14" : "#F5F3F0",
    text: isIndustrial ? "#F1F5F9" : "#24324B",
    subtext: isIndustrial ? "#C9D1D9" : "#4A5568",
    accent: isIndustrial ? "#FFB833" : "#D9B566",
    ok: isIndustrial ? "#7FCF8A" : "#2C7A7B",
    violet: "#8B5CF6",

    cardBg: isIndustrial ? "#132132" : "#FFFFFF",
    cardBg2: isIndustrial ? "#1B2A3A" : "#F7F7F5",
    border: isIndustrial ? "rgba(255,255,255,0.06)" : "rgba(36,50,75,0.10)",
    borderOk: isIndustrial ? "rgba(127,207,138,0.35)" : "rgba(44,122,123,0.35)",
    pillBg: isIndustrial ? "#1B2A3A" : "rgba(36,50,75,0.08)",
    warnBg: isIndustrial ? "rgba(220,38,38,0.12)" : "rgba(220,38,38,0.08)",
    warnBorder: "rgba(248,113,113,0.30)",
    divider: isIndustrial ? "rgba(255,255,255,0.08)" : "rgba(36,50,75,0.10)",
  };

  // ---- SAFE TRANSLATIONS ----
  const navContact = t?.nav?.contact ?? "Contact";

  const bim = t?.bim_monitoring ?? {
    title: "BIM Monitoring",
    subtitle: "4D progress tracking with drones + BIM",
    badges: [
      "RTK + LiDAR + Photogrammetry",
      "4D BIM Integration",
      "As-built vs. Design",
    ],
    benefits: [
      "Reduce measurement time",
      "Detect deviations early",
      "Improve cost/schedule control",
    ],
  };

  const tech = t?.technology ?? {
    title: "Technology",
    challenge_title: "The Challenge",
    challenge_desc: "Manual surveys are slow and error-prone.",
    solution_title: "Our Solution",
    solution_desc: "Drone capture + 4D BIM for a real-time digital twin.",
    eu_projects_delay_note: "In the EU, over",
    eu_projects_delay_percentage: "70%",
    eu_projects_delay_context: "of large projects face delays & overruns.",
    feature_4dbim_title: "4D BIM Integration",
    feature_4dbim_desc: "Sync progress with design to control schedule & budget.",
    feature_quality_title: "Digital Quality & Safety",
    feature_quality_desc: "Automated checks and dashboards.",
    feature_future_title: "Future-ready Tools",
    feature_future_desc: "Predictive analytics & smart allocation.",
    feature_savings_title: "Cost & Time Savings",
    feature_savings_desc: "Cut measurement time by up to 70%.",
    roi_title: "From Weeks to Hours: ROI",
    roi_traditional_title: "Traditional Methods",
    roi_traditional_desc: "Manual, slow, prone to error.",
    roi_traditional_report_time: "Reporting Time",
    roi_traditional_report_value: "2–4 Weeks",
    roi_traditional_decision: "Decision-Making",
    roi_traditional_decision_value: "Reactive",
    roi_aurum_title: "AURUM: Drone + BIM",
    roi_aurum_desc: "Automated capture forms a living digital twin.",
    roi_aurum_report_value: "48 Hours",
    roi_aurum_decision_value: "Proactive",
    how_it_works_title: "How It Works",
    step1_title: "Data Capture",
    step1_desc: "RTK drone flights (LiDAR + photo).",
    step2_title: "Processing",
    step2_desc: "AI builds point clouds & 3D models.",
    step3_title: "Analysis",
    step3_desc: "Compare as-built vs design, track costs.",
    step4_title: "Reporting",
    step4_desc: "Comprehensive report delivery.",
    tech_specs_title: "Technical Specifications",
    tech_specs_accuracy: "Accuracy:",
    tech_specs_accuracy_value: "±2cm RTK",
    tech_specs_coverage: "Coverage:",
    tech_specs_coverage_value: "Up to 500 ha/day",
    tech_specs_point_density: "Point Density:",
    tech_specs_point_density_value: "300–600 pts/m²",
    tech_specs_report_delivery: "Report Delivery:",
    tech_specs_report_delivery_value: "48 hours",
    deliverables_title: "Deliverables",
    deliverables_item1: "3D Point Cloud",
    deliverables_item2: "As-built vs Design",
    deliverables_item3: "Progress Dashboard",
    deliverables_item4: "Cost & Safety Reports",
  };

  // ---- PAGE ----
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: palette.pageBg, color: palette.text }}
    >
      <div
        style={{
          paddingTop:
            "calc(var(--header-h-current, 64px) + clamp(16px, 3vh, 32px))",
          paddingBottom: "clamp(24px, 5vh, 48px)",
          minHeight: "100vh",
        }}
      >
        <main className="pb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-5">
            {/* ---------------------------------------------------- */}
            {/* TITLE */}
            {/* ---------------------------------------------------- */}
            <motion.h1
              className="font-bold tracking-tight mb-4 text-center"
              style={{
                fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)",
                fontWeight: 700,
                color: palette.accent,
                lineHeight: 1.2,
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {tech.title}
            </motion.h1>

            {/* ---------------------------------------------------- */}
            {/* BIM MONITORING BOX */}
            {/* ---------------------------------------------------- */}
            <motion.div
              className="p-4 sm:p-5 rounded-2xl border-2 shadow-2xl"
              style={{ backgroundColor: palette.cardBg, borderColor: palette.border }}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ borderColor: "rgba(127,207,138,0.15)" }}
            >
              <h3
                className="font-bold mb-2"
                style={{
                  fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                  color: palette.accent,
                }}
              >
                {bim.title}
              </h3>
              <p className="mb-3 text-sm" style={{ color: palette.ok }}>
                {bim.subtitle}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {(bim.badges ?? []).map((badge) => (
                  <span
                    key={badge}
                    className="text-xs font-medium px-2 py-1 rounded-full"
                    style={{ backgroundColor: palette.pillBg, color: palette.text }}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <ul className="space-y-1.5 mb-4">
                {(bim.benefits ?? []).map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <CheckCircle
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: palette.ok }}
                    />
                    <span className="text-xs" style={{ color: palette.text }}>
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-3">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="sm"
                    className="text-sm px-4 py-2 font-semibold"
                    style={{ backgroundColor: palette.accent, color: palette.pageBg }}
                    asChild
                  >
                    <Link to={createPageUrl("contact")}>{navContact}</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* ---------------------------------------------------- */}
            {/* CHALLENGE / SOLUTION + FEATURE CARDS */}
            {/* ---------------------------------------------------- */}
            <div className="grid lg:grid-cols-3 gap-4">
              {/* Left column: challenge/solution */}
              <motion.div
                className="lg:col-span-1 border-2 rounded-2xl p-4 sm:p-5 flex flex-col"
                style={{
                  backgroundColor: palette.cardBg,
                  borderColor: "rgba(127,207,138,0.20)",
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div>
                  <h3 className="font-bold mb-2" style={{ color: palette.accent }}>
                    {tech.challenge_title}
                  </h3>
                  <p className="mb-3 text-sm" style={{ color: palette.text }}>
                    {tech.challenge_desc}
                  </p>
                  <h3 className="font-bold mb-2" style={{ color: palette.accent }}>
                    {tech.solution_title}
                  </h3>
                  <p className="text-sm mb-3" style={{ color: palette.text }}>
                    {tech.solution_desc}
                  </p>
                </div>

                <div className="mt-auto">
                  <div
                    className="rounded-lg border-2 p-3"
                    style={{
                      borderColor: palette.warnBorder,
                      backgroundColor: palette.warnBg,
                    }}
                  >
                    <p className="text-xs text-center" style={{ color: "#FCA5A5" }}>
                      {tech.eu_projects_delay_note}{" "}
                      <span className="text-lg font-bold" style={{ color: palette.text }}>
                        {tech.eu_projects_delay_percentage}
                      </span>{" "}
                      {tech.eu_projects_delay_context}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right grid: feature cards */}
              <div className="lg:grid-cols-2 grid gap-3 lg:col-span-2">
                {[
                  {
                    icon: <Cpu className="w-6 h-6" style={{ color: palette.accent }} />,
                    title: tech.feature_4dbim_title,
                    description: tech.feature_4dbim_desc,
                    color: palette.accent,
                  },
                  {
                    icon: <Shield className="w-6 h-6" style={{ color: palette.ok }} />,
                    title: tech.feature_quality_title,
                    description: tech.feature_quality_desc,
                    color: palette.ok,
                  },
                  {
                    icon: <Sparkles className="w-6 h-6" style={{ color: palette.violet }} />,
                    title: tech.feature_future_title,
                    description: tech.feature_future_desc,
                    color: palette.violet,
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6" style={{ color: palette.accent }} />,
                    title: tech.feature_savings_title,
                    description: tech.feature_savings_desc,
                    color: palette.accent,
                  },
                ].map((tool, index) => (
                  <motion.div
                    key={tool.title ?? index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <Card
                      className="border-2 p-3"
                      style={{ backgroundColor: palette.cardBg2, borderColor: palette.border }}
                    >
                      <CardContent className="p-0">
                        <div
                          className="w-10 h-10 flex items-center justify-center rounded-lg mb-2"
                          style={{ backgroundColor: palette.cardBg }}
                        >
                          {tool.icon}
                        </div>
                        <h3 className="text-sm font-bold mb-1" style={{ color: tool.color }}>
                          {tool.title}
                        </h3>
                        <p className="text-xs" style={{ color: palette.text }}>
                          {tool.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ---------------------------------------------------- */}
            {/* ROI SECTION */}
            {/* ---------------------------------------------------- */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h3
                className="font-bold text-center mb-4"
                style={{
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  color: palette.accent,
                }}
              >
                {tech.roi_title}
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {/* Traditional methods */}
                <motion.div>
                  <Card
                    className="border-2 p-4"
                    style={{ backgroundColor: palette.cardBg, borderColor: palette.border }}
                  >
                    <CardHeader className="p-0 mb-3 flex-row items-center gap-3">
                      <AlertTriangle
                        className="w-6 h-6 flex-shrink-0"
                        style={{ color: palette.accent }}
                      />
                      <CardTitle className="text-base sm:text-lg">
                        {tech.roi_traditional_title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-2 text-sm">
                      <p className="text-xs" style={{ color: palette.subtext }}>
                        {tech.roi_traditional_desc}
                      </p>
                      <div
                        className="flex justify-between items-center p-2 rounded-lg"
                        style={{ backgroundColor: palette.cardBg2 }}
                      >
                        <span className="text-xs" style={{ color: palette.subtext }}>
                          {tech.roi_traditional_report_time}
                        </span>
                        <span className="font-bold text-sm">
                          {tech.roi_traditional_report_value}
                        </span>
                      </div>
                      <div
                        className="flex justify-between items-center p-2 rounded-lg"
                        style={{ backgroundColor: palette.cardBg2 }}
                      >
                        <span className="text-xs" style={{ color: palette.subtext }}>
                          {tech.roi_traditional_decision}
                        </span>
                        <span className="font-bold text-sm">
                          {tech.roi_traditional_decision_value}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* AURUM: Drone + BIM */}
                <motion.div>
                  <Card
                    className="border-2 p-4"
                    style={{ backgroundColor: palette.cardBg, borderColor: palette.borderOk }}
                  >
                    <CardHeader className="p-0 mb-3 flex-row items-center gap-3">
                      <TrendingUp
                        className="w-6 h-6 flex-shrink-0"
                        style={{ color: palette.ok }}
                      />
                      <CardTitle className="text-base sm:text-lg">
                        {tech.roi_aurum_title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-2 text-sm">
                      <p className="text-xs" style={{ color: palette.subtext }}>
                        {tech.roi_aurum_desc}
                      </p>
                      <div
                        className="flex justify-between items-center p-2 rounded-lg"
                        style={{ backgroundColor: palette.cardBg2 }}
                      >
                        <span className="text-xs" style={{ color: palette.subtext }}>
                          {tech.roi_traditional_report_time}
                        </span>
                        <span className="font-bold text-sm" style={{ color: palette.ok }}>
                          {tech.roi_aurum_report_value}
                        </span>
                      </div>
                      <div
                        className="flex justify-between items-center p-2 rounded-lg"
                        style={{ backgroundColor: palette.cardBg2 }}
                      >
                        <span className="text-xs" style={{ color: palette.subtext }}>
                          {tech.roi_traditional_decision}
                        </span>
                        <span className="font-bold text-sm" style={{ color: palette.ok }}>
                          {tech.roi_aurum_decision_value}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>

            {/* ---------------------------------------------------- */}
            {/* HOW IT WORKS + SPECS / DELIVERABLES */}
            {/* ---------------------------------------------------- */}
            <div className="border-t-2 pt-6" style={{ borderColor: palette.divider }}>
              <div className="max-w-5xl mx-auto">
                <motion.h3
                  className="font-bold text-center mb-6"
                  style={{
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    color: palette.accent,
                  }}
                >
                  {tech.how_it_works_title}
                </motion.h3>

                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  {[
                    {
                      step: "1",
                      icon: <Scan className="w-8 h-8" />,
                      title: tech.step1_title,
                      desc: tech.step1_desc,
                      color: palette.accent,
                    },
                    {
                      step: "2",
                      icon: <Cpu className="w-8 h-8" />,
                      title: tech.step2_title,
                      desc: tech.step2_desc,
                      color: palette.ok,
                    },
                    {
                      step: "3",
                      icon: <BarChart4 className="w-8 h-8" />,
                      title: tech.step3_title,
                      desc: tech.step3_desc,
                      color: palette.violet,
                    },
                    {
                      step: "4",
                      icon: <Eye className="w-8 h-8" />,
                      title: tech.step4_title,
                      desc: tech.step4_desc,
                      color: palette.accent,
                    },
                  ].map((s, i) => (
                    <motion.div
                      key={s.step}
                      className="text-center relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <div
                        className="relative z-10 w-16 h-16 mx-auto mb-3 flex items-center justify-center rounded-full"
                        style={{ backgroundColor: palette.cardBg2 }}
                      >
                        <div style={{ color: s.color }}>{s.icon}</div>
                      </div>
                      <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2"
                        style={{
                          backgroundColor: s.color,
                          borderColor: palette.pageBg,
                          color: "white",
                        }}
                      >
                        {s.step}
                      </div>
                      <h4 className="font-bold mb-2 text-sm">{s.title}</h4>
                      <p className="text-xs" style={{ color: palette.subtext }}>
                        {s.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card
                    className="border-2"
                    style={{ backgroundColor: palette.cardBg, borderColor: palette.border }}
                  >
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-base" style={{ color: palette.accent }}>
                        {tech.tech_specs_title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-2 space-y-2 text-sm">
                      <Row l={tech.tech_specs_accuracy} r={tech.tech_specs_accuracy_value} />
                      <Row l={tech.tech_specs_coverage} r={tech.tech_specs_coverage_value} />
                      <Row l={tech.tech_specs_point_density} r={tech.tech_specs_point_density_value} />
                      <Row l={tech.tech_specs_report_delivery} r={tech.tech_specs_report_delivery_value} />
                    </CardContent>
                  </Card>

                  <Card
                    className="border-2"
                    style={{ backgroundColor: palette.cardBg, borderColor: palette.border }}
                  >
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-base" style={{ color: palette.accent }}>
                        {tech.deliverables_title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <List
                        items={[
                          tech.deliverables_item1,
                          tech.deliverables_item2,
                          tech.deliverables_item3,
                          tech.deliverables_item4,
                        ]}
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* end of page content */}
            </div>
        </main>
      </div>
    </div>
  );
}

function Row({ l, r }) {
  return (
    <div className="flex justify-between">
      <span className="text-xs" style={{ color: "#C9D1D9" }}>{l}</span>
      <span className="font-semibold text-xs" style={{ color: "#F1F5F9" }}>{r}</span>
    </div>
  );
}

function List({ items = [] }) {
  return (
    <ul className="space-y-1.5 text-sm">
      {items.map((txt, i) => (
        <li key={i} className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "#7FCF8A" }} />
          <span className="text-xs" style={{ color: "#E2E8F0" }}>{txt}</span>
        </li>
      ))}
    </ul>
  );
}
