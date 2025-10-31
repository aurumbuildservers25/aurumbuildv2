import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header.jsx";
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";
import { languages, translations } from "@/translations";
import { I18nCtx } from "@/i18n";

const isHomePath = (p) => {
  const norm = (p || "/").replace(/\/+$/, "").toLowerCase();
  return norm === "" || norm === "/" || norm === "/home";
};

const SECTION_IDS = ["home", "about", "technology", "projects"];

export default function Layout({ children, division, setDivision }) {
  const [currentLang, setCurrentLang] = useState(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("aurum-language") || "en").toLowerCase();
    }
    return "en";
  });

  const normalizedLang = (currentLang || "en").toLowerCase();
  const t = translations[normalizedLang] || translations.en;

  const [currentSection, setCurrentSection] = useState("home");
  const [pathname, setPathname] = useState("/");

  const { pathname } = useLocation();
  
  const isHomePage = isHomePath(pathname);
  const isDreamhousePage = pathname.includes("dreamhouse") || pathname.includes("Dreamhouse");

  // Debug helpers (safe to keep)
  if (typeof window !== "undefined") {
    window.__AURUM_TRANSLATIONS__ = translations;
    window.__AURUM_LANG__ = currentLang;
    console.log("[AURUM] currentLang:", currentLang);
    console.log("[AURUM] has translations[currentLang]?", !!translations[currentLang]);
  }

  const currentLanguage =
    languages.find((lang) => lang.code === normalizedLang) || languages[0];

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("aurum-language", normalizedLang);
    }
  }, [normalizedLang]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("aurum-theme", division);
    }
  }, [division]);

  // Only enforce residential while on Dreamhouse.
  useEffect(() => {
    if (isDreamhousePage && division !== "residential") {
      setDivision("residential");
    }
  }, [isDreamhousePage, division, setDivision]);

  const handleSectionClick = (sectionId) => {
    if (isDreamhousePage && sectionId === "home") {
      setDivision("residential");
    }
    if (isHomePage) {
      const sectionEl = document.getElementById(sectionId);
      if (sectionEl) {
        const scrolledHeaderHeight = 64;
        const top = sectionEl.getBoundingClientRect().top + window.scrollY;
        const scrollTop = Math.max(0, top - scrolledHeaderHeight - 12);
        window.scrollTo({ top: scrollTop, behavior: "smooth" });
        const url = new URL(window.location.href);
        url.hash = `#${sectionId}`;
        window.history.replaceState(null, "", url.toString());
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  useEffect(() => {
    if (isHomePage) {
      let timeoutId = null;

      const observer = new IntersectionObserver(
        (entries) => {
          if (timeoutId) clearTimeout(timeoutId);

          timeoutId = setTimeout(() => {
            const visibleEntries = entries.filter(
              (e) => e.isIntersecting && e.intersectionRatio > 0.3
            );

            if (visibleEntries.length > 0) {
              const sorted = visibleEntries.sort(
                (a, b) => b.intersectionRatio - a.intersectionRatio
              );
              const mostVisible = sorted[0];
              setCurrentSection(mostVisible.target.id);
            }
          }, 100);
        },
        {
          threshold: [0, 0.3, 0.5, 0.7, 1],
          rootMargin: "-100px 0px -30% 0px",
        }
      );

      SECTION_IDS.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) observer.observe(element);
      });

      return () => {
        if (timeoutId) clearTimeout(timeoutId);
        observer.disconnect();
      };
    }
  }, [isHomePage]);

  // Let the user-selected theme control the page, except Dreamhouse forces residential.
  const pageTheme = isDreamhousePage ? "residential" : division;
  const isIndustrial = pageTheme === "industrial";

  useEffect(() => {
    document.body.style.backgroundColor = isIndustrial ? "#0C0E14" : "#F5F3F0";
    document.body.style.transition = "background-color 0.6s ease";
    document.documentElement.style.backgroundColor = isIndustrial
      ? "#0C0E14"
      : "#F5F3F0";
    document.documentElement.style.transition = "background-color 0.6s ease";
  }, [isIndustrial]);

  // Safety check - only render if translations are loaded
  if (!t || !t.nav || !t.hero || !t.footer) {
    return (
      <div
        style={{
          backgroundColor: "#0C0E14",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ color: "#FFB833", fontSize: "1.5rem" }}>Loading...</div>
      </div>
    );
  }

  return (
    <>
      <style jsx global>{`
        :root {
          --bg-color: ${isIndustrial ? "#0C0E14" : "#F5F3F0"};
          --text-color: ${isIndustrial ? "#e5e7eb" : "#292524"};
          --primary-color: ${isIndustrial ? "#fbbf24" : "#d97706"};
          --card-bg: ${isIndustrial ? "#1f2937" : "#ffffff"};
          --border-color: ${isIndustrial ? "#374151" : "#e7e5e4"};
          --header-h-current: 64px;
        }

        html,
        body {
          background-color: var(--bg-color) !important;
          transition: background-color 0.6s ease !important;
          min-height: 100vh;
        }

        #root {
          background-color: var(--bg-color);
          transition: background-color 0.6s ease;
          min-height: 100vh;
        }

        body,
        nav,
        main,
        footer,
        header,
        section,
        div,
        .card,
        button {
          transition: background-color 0.6s ease, color 0.6s ease,
            border-color 0.6s ease;
        }

        body {
          color: var(--text-color);
        }

        .section-divider {
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--border-color),
            transparent
          );
        }

        *:focus-visible {
          outline: 3px solid ${isIndustrial ? "#FFB833" : "#D9B566"};
          outline-offset: 2px;
          border-radius: 4px;
        }

        button:focus-visible,
        a:focus-visible,
        [role="button"]:focus-visible {
          outline: 3px solid ${isIndustrial ? "#FFB833" : "#D9B566"};
          outline-offset: 3px;
          box-shadow: 0 0 0 4px
            ${isIndustrial ? "rgba(255, 184, 51, 0.2)" : "rgba(217, 181, 102, 0.2)"};
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: isIndustrial ? "#0C0E14" : "#F5F3F0",
          transition: "background-color 0.6s ease",
          zIndex: -1,
        }}
      />

      {/* --- Header (sticky + above everything) --- */}
      <div style={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <Header
          t={t}
          languages={languages}
          currentLang={normalizedLang}
          setCurrentLang={setCurrentLang}
          currentLanguage={currentLanguage}
          handleSectionClick={handleSectionClick}
          SECTION_IDS={SECTION_IDS}
          division={pageTheme}
          setDivision={setDivision}
          currentSection={currentSection}
        />
      </div>

      {/* --- Content (now wrapped in i18n Provider) --- */}
      <AnimatePresence initial={false}>
        <motion.div
          key={`${pathname}-${normalizedLang}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0 }}
          style={{ width: "100%", minHeight: "100vh", position: "relative" }}
        >
          <I18nCtx.Provider
            value={{ t, languages, currentLang: normalizedLang, setCurrentLang }}
          >
            {children}
          </I18nCtx.Provider>
        </motion.div>
      </AnimatePresence>

      <footer
        className="py-12 transition-colors duration-600"
        style={{
          backgroundColor: isIndustrial ? "#0C0E14" : "#F5F3F0",
          borderTop: `1px solid ${
            isIndustrial ? "rgba(255,255,255,0.08)" : "rgba(36,50,75,0.10)"
          }`,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span style={{ color: isIndustrial ? "#FFB833" : "#D9B566" }}>
                  AURUM
                </span>
                <span style={{ color: isIndustrial ? "#F1F5F9" : "#24324B" }}>
                  Build
                </span>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: isIndustrial ? "#C9D1D9" : "#4A5568",
                  opacity: 0.85,
                }}
              >
                {t.footer.tagline}
              </p>
            </div>

            <div>
              <h4
                className="font-semibold mb-3 text-base"
                style={{ color: isIndustrial ? "#FFB833" : "#D9B566" }}
              >
                Quick Links
              </h4>
              <div className="space-y-2 text-sm">
                <button
                  key="footer-home"
                  type="button"
                  onClick={() => handleSectionClick("home")}
                  className="block transition-all duration-200 hover:translate-x-1"
                  style={{
                    color: isIndustrial ? "#E2E8F0" : "#24324B",
                    opacity: 0.75,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.color = isIndustrial
                      ? "#FFB833"
                      : "#D9B566";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "0.75";
                    e.currentTarget.style.color = isIndustrial
                      ? "#E2E8F0"
                      : "#24324B";
                  }}
                >
                  {t.nav.home}
                </button>
                {SECTION_IDS.filter((id) => id !== "home").map((id) => (
                  <button
                    key={`footer-${id}`}
                    type="button"
                    onClick={() => handleSectionClick(id)}
                    className="block transition-all duration-200 hover:translate-x-1"
                    style={{
                      color: isIndustrial ? "#E2E8F0" : "#24324B",
                      opacity: 0.75,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "1";
                      e.currentTarget.style.color = isIndustrial
                        ? "#FFB833"
                        : "#D9B566";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "0.75";
                      e.currentTarget.style.color = isIndustrial
                        ? "#E2E8F0"
                        : "#24324B";
                    }}
                  >
                    {t.nav[id]}
                  </button>
                ))}
                <a
                  key="footer-dreamhouse"
                  href={createPageUrl("dreamhouse")}
                  className="block transition-all duration-200 hover:translate-x-1"
                  style={{
                    color: isIndustrial ? "#E2E8F0" : "#24324B",
                    opacity: 0.75,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.color = "#8B5CF6";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "0.75";
                    e.currentTarget.style.color = isIndustrial
                      ? "#E2E8F0"
                      : "#24324B";
                  }}
                >
                  DH — Dreamhouse
                </a>
                <a
                  key="footer-contact"
                  href={createPageUrl("contact")}
                  className="block transition-all duration-200 hover:translate-x-1"
                  style={{
                    color: isIndustrial ? "#E2E8F0" : "#24324B",
                    opacity: 0.75,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.color = isIndustrial
                      ? "#FFB833"
                      : "#D9B566";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "0.75";
                    e.currentTarget.style.color = isIndustrial
                      ? "#E2E8F0"
                      : "#24324B";
                  }}
                >
                  {t.nav.contact}
                </a>
              </div>
            </div>

            <div>
              <h4
                className="font-semibold mb-3 text-base"
                style={{ color: isIndustrial ? "#FFB833" : "#D9B566" }}
              >
                {t.contact.coverageAreas}
              </h4>
              <div
                className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm"
                style={{
                  color: isIndustrial ? "#C9D1D9" : "#4A5568",
                  opacity: 0.8,
                }}
              >
                {["Italy", "Poland", "Spain", "Turkey"].map((country) => (
                  <span
                    key={country}
                    className="transition-opacity duration-200 hover:opacity-100"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            className="text-center pt-8"
            style={{
              borderTop: `1px solid ${
                isIndustrial ? "rgba(255,255,255,0.08)" : "rgba(36,50,75,0.10)"
              }`,
            }}
          >
            <p
              className="text-sm"
              style={{ color: isIndustrial ? "#94A3B8" : "#6B7280", opacity: 0.7 }}
            >
              © 2025 AURUM Build sp z o. o. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
