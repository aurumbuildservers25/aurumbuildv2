import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header.jsx";
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";
import { languages, translations } from "@/translations";
import { I18nCtx } from "@/i18n";

const isHomePath = (path) => {
  const normalizedPath = (path || "/")
    .replace(/\/+$/, "")
    .toLowerCase();

  return (
    normalizedPath === "" ||
    normalizedPath === "/" ||
    normalizedPath === "/home"
  );
};

const SECTION_IDS = ["home", "about", "technology", "projects"];

export default function Layout({
  children,
  division,
  setDivision,
}) {
  const [currentLang, setCurrentLang] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("aurum-language") || "en"
      ).toLowerCase();
    }

    return "en";
  });

  const [ready, setReady] = useState(() => {
    return typeof window === "undefined";
  });

  const [currentSection, setCurrentSection] =
    useState("home");

  const [initialPath] = useState(() => {
    return typeof window !== "undefined"
      ? window.location.pathname
      : "/";
  });

  const { pathname = initialPath } = useLocation();

  const normalizedLang = (
    currentLang || "en"
  ).toLowerCase();

  const t =
    translations[normalizedLang] || translations.en;

  const isHomePage = isHomePath(pathname);

  const isDreamhousePage =
    pathname.toLowerCase().includes("/dreamhouse");

  const headerVariant = (() => {
    const path = (pathname || "").toLowerCase();

    if (path.includes("/technology")) {
      return "tech";
    }

    if (path.includes("/dreamhouse")) {
      return "dreamhouse";
    }

    if (isHomePath(path)) {
      return "home";
    }

    return "simple";
  })();

  const currentLanguage =
    languages.find(
      (language) =>
        language.code === normalizedLang
    ) || languages[0];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setReady(true);
    }, 50);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "aurum-language",
        normalizedLang
      );
    }
  }, [normalizedLang]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "aurum-theme",
        division
      );
    }
  }, [division]);

  useEffect(() => {
    if (
      isDreamhousePage &&
      division !== "residential"
    ) {
      setDivision("residential");
    }
  }, [
    isDreamhousePage,
    division,
    setDivision,
  ]);

  const handleSectionClick = (sectionId) => {
    if (
      isDreamhousePage &&
      sectionId === "home"
    ) {
      setDivision("residential");
    }

    if (isHomePage) {
      const sectionElement =
        document.getElementById(sectionId);

      if (sectionElement) {
        const scrolledHeaderHeight = 64;

        const sectionTop =
          sectionElement.getBoundingClientRect().top +
          window.scrollY;

        const scrollTop = Math.max(
          0,
          sectionTop -
            scrolledHeaderHeight -
            12
        );

        window.scrollTo({
          top: scrollTop,
          behavior: "smooth",
        });

        const url = new URL(
          window.location.href
        );

        url.hash = `#${sectionId}`;

        window.history.replaceState(
          null,
          "",
          url.toString()
        );
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  useEffect(() => {
    if (!isHomePage) {
      return undefined;
    }

    let timeoutId = null;

    const observer = new IntersectionObserver(
      (entries) => {
        if (timeoutId) {
          window.clearTimeout(timeoutId);
        }

        timeoutId = window.setTimeout(() => {
          const visibleEntries = entries.filter(
            (entry) =>
              entry.isIntersecting &&
              entry.intersectionRatio > 0.3
          );

          if (visibleEntries.length > 0) {
            const sortedEntries = [
              ...visibleEntries,
            ].sort(
              (a, b) =>
                b.intersectionRatio -
                a.intersectionRatio
            );

            setCurrentSection(
              sortedEntries[0].target.id
            );
          }
        }, 100);
      },
      {
        threshold: [0, 0.3, 0.5, 0.7, 1],
        rootMargin: "-100px 0px -30% 0px",
      }
    );

    SECTION_IDS.forEach((sectionId) => {
      const element =
        document.getElementById(sectionId);

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }

      observer.disconnect();
    };
  }, [isHomePage]);

  const pageTheme = isDreamhousePage
    ? "residential"
    : division;

  const isIndustrial =
    pageTheme === "industrial";

  useEffect(() => {
    const backgroundColor = isIndustrial
      ? "#0C0E14"
      : "#F5F3F0";

    document.body.style.backgroundColor =
      backgroundColor;

    document.body.style.transition =
      "background-color 0.6s ease";

    document.documentElement.style.backgroundColor =
      backgroundColor;

    document.documentElement.style.transition =
      "background-color 0.6s ease";
  }, [isIndustrial]);

  if (!ready) {
    return (
      <div
        style={{
          backgroundColor: isIndustrial
            ? "#0C0E14"
            : "#F5F3F0",
          minHeight: "100vh",
          transition:
            "background-color 0.6s ease",
        }}
      />
    );
  }

  if (
    !t ||
    !t.nav ||
    !t.hero ||
    !t.footer
  ) {
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
        <div
          style={{
            color: "#FFB833",
            fontSize: "1.5rem",
          }}
        >
          Loading...
        </div>
      </div>
    );
  }

  const footerTextColor = isIndustrial
    ? "#E2E8F0"
    : "#24324B";

  const footerMutedColor = isIndustrial
    ? "#C9D1D9"
    : "#4A5568";

  const footerAccentColor = isIndustrial
    ? "#FFB833"
    : "#D9B566";

  const footerBorderColor = isIndustrial
    ? "rgba(255,255,255,0.08)"
    : "rgba(36,50,75,0.10)";

  return (
    <>
      <style jsx global>{`
        :root {
          --bg-color: ${
            isIndustrial
              ? "#0C0E14"
              : "#F5F3F0"
          };

          --text-color: ${
            isIndustrial
              ? "#e5e7eb"
              : "#292524"
          };

          --primary-color: ${
            isIndustrial
              ? "#fbbf24"
              : "#d97706"
          };

          --card-bg: ${
            isIndustrial
              ? "#1f2937"
              : "#ffffff"
          };

          --border-color: ${
            isIndustrial
              ? "#374151"
              : "#e7e5e4"
          };

          --header-h-current: 64px;
        }

        html,
        body {
          background-color:
            var(--bg-color) !important;

          transition:
            background-color 0.6s ease !important;

          min-height: 100vh;
        }

        #root {
          background-color:
            var(--bg-color);

          transition:
            background-color 0.6s ease;

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
          transition:
            background-color 0.6s ease,
            color 0.6s ease,
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
          outline: 3px solid
            ${
              isIndustrial
                ? "#FFB833"
                : "#D9B566"
            };

          outline-offset: 2px;
          border-radius: 4px;
        }

        button:focus-visible,
        a:focus-visible,
        [role="button"]:focus-visible {
          outline: 3px solid
            ${
              isIndustrial
                ? "#FFB833"
                : "#D9B566"
            };

          outline-offset: 3px;

          box-shadow: 0 0 0 4px
            ${
              isIndustrial
                ? "rgba(255,184,51,0.2)"
                : "rgba(217,181,102,0.2)"
            };
        }
      `}</style>

      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: isIndustrial
            ? "#0C0E14"
            : "#F5F3F0",
          transition:
            "background-color 0.6s ease",
          zIndex: -1,
        }}
      />

      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <Header
          key={headerVariant}
          variant={headerVariant}
          t={t}
          languages={languages}
          currentLang={normalizedLang}
          setCurrentLang={setCurrentLang}
          currentLanguage={currentLanguage}
          handleSectionClick={
            handleSectionClick
          }
          SECTION_IDS={SECTION_IDS}
          division={pageTheme}
          setDivision={setDivision}
          currentSection={currentSection}
        />
      </div>

      <AnimatePresence initial={false}>
        <motion.div
          key={`${pathname}-${normalizedLang}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0 }}
          style={{
            width: "100%",
            minHeight: "100vh",
            position: "relative",
          }}
        >
          <I18nCtx.Provider
            value={{
              t,
              languages,
              currentLang: normalizedLang,
              setCurrentLang,
            }}
          >
            {children}
          </I18nCtx.Provider>
        </motion.div>
      </AnimatePresence>

      <footer
        className="py-12 transition-colors duration-600"
        style={{
          backgroundColor: isIndustrial
            ? "#0C0E14"
            : "#F5F3F0",

          borderTop: `1px solid ${footerBorderColor}`,

          position: "relative",
          zIndex: 1,
          fontFamily: "inherit",
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6">
          {/* Three-column footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold mb-4">
                <span
                  style={{
                    color:
                      footerAccentColor,
                  }}
                >
                  AURUM
                </span>

                <span
                  style={{
                    color: isIndustrial
                      ? "#F1F5F9"
                      : "#24324B",
                  }}
                >
                  Build
                </span>
              </div>

              <p
                className="text-sm leading-relaxed max-w-sm"
                style={{
                  color: footerMutedColor,
                  opacity: 0.85,
                }}
              >
                {t.footer.tagline}
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4
                className="font-semibold mb-4 text-base"
                style={{
                  color:
                    footerAccentColor,
                }}
              >
                Quick Links
              </h4>

              <div className="space-y-2 text-sm">
                <button
                  type="button"
                  onClick={() =>
                    handleSectionClick(
                      "home"
                    )
                  }
                  className="block transition-all duration-200 hover:translate-x-1"
                  style={{
                    color: footerTextColor,
                    opacity: 0.75,
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.opacity =
                      "1";

                    event.currentTarget.style.color =
                      footerAccentColor;
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.opacity =
                      "0.75";

                    event.currentTarget.style.color =
                      footerTextColor;
                  }}
                >
                  {t.nav.home}
                </button>

                {SECTION_IDS.filter(
                  (id) => id !== "home"
                ).map((id) => (
                  <button
                    key={`footer-${id}`}
                    type="button"
                    onClick={() =>
                      handleSectionClick(id)
                    }
                    className="block transition-all duration-200 hover:translate-x-1"
                    style={{
                      color:
                        footerTextColor,
                      opacity: 0.75,
                    }}
                    onMouseEnter={(
                      event
                    ) => {
                      event.currentTarget.style.opacity =
                        "1";

                      event.currentTarget.style.color =
                        footerAccentColor;
                    }}
                    onMouseLeave={(
                      event
                    ) => {
                      event.currentTarget.style.opacity =
                        "0.75";

                      event.currentTarget.style.color =
                        footerTextColor;
                    }}
                  >
                    {t.nav[id]}
                  </button>
                ))}

                <a
                  href={createPageUrl(
                    "dreamhouse"
                  )}
                  className="block transition-all duration-200 hover:translate-x-1"
                  style={{
                    color: footerTextColor,
                    opacity: 0.75,
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.opacity =
                      "1";

                    event.currentTarget.style.color =
                      "#8B5CF6";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.opacity =
                      "0.75";

                    event.currentTarget.style.color =
                      footerTextColor;
                  }}
                >
                  DH — Dreamhouse
                </a>

                <a
                  href={createPageUrl(
                    "contact"
                  )}
                  className="block transition-all duration-200 hover:translate-x-1"
                  style={{
                    color: footerTextColor,
                    opacity: 0.75,
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.opacity =
                      "1";

                    event.currentTarget.style.color =
                      footerAccentColor;
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.opacity =
                      "0.75";

                    event.currentTarget.style.color =
                      footerTextColor;
                  }}
                >
                  {t.nav.contact}
                </a>
              </div>
            </div>

            {/* Coverage areas */}
            <div>
              <h4
                className="font-semibold mb-4 text-base"
                style={{
                  color:
                    footerAccentColor,
                }}
              >
                {t.contact.coverageAreas}
              </h4>

              <div
                className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm"
                style={{
                  color: footerMutedColor,
                  opacity: 0.8,
                }}
              >
                {[
                  "Italy",
                  "Poland",
                  "Spain",
                  "Turkey",
                ].map((country) => (
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

          {/* Single minimal legal line */}
          <div
            className="pt-8 mt-8"
            style={{
              borderTop: `1px solid ${footerBorderColor}`,
            }}
          >
            <p
              className="m-0 text-sm text-center flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
              style={{
                color: isIndustrial
                  ? "#94A3B8"
                  : "#6B7280",

                letterSpacing: "0.02em",

                fontVariantNumeric:
                  "tabular-nums",

                lineHeight: 1.8,
              }}
            >
              <span>
                ©{" "}
                {new Date().getFullYear()}{" "}
                AURUMBUILD Sp. z o.o.
              </span>

              <span
                aria-hidden="true"
                style={{ opacity: 0.45 }}
              >
                •
              </span>

              <span>
                <strong
                  style={{
                    fontWeight: 600,
                  }}
                >
                  NIP
                </strong>{" "}
                6312742513
              </span>

              <span
                aria-hidden="true"
                style={{ opacity: 0.45 }}
              >
                •
              </span>

              <span>
                <strong
                  style={{
                    fontWeight: 600,
                  }}
                >
                  REGON
                </strong>{" "}
                54519473000000
              </span>

              <span
                aria-hidden="true"
                style={{ opacity: 0.45 }}
              >
                •
              </span>

              <span>
                <strong
                  style={{
                    fontWeight: 600,
                  }}
                >
                  KRS
                </strong>{" "}
                0001252561
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
