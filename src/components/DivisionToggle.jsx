// src/components/DivisionToggle.jsx
export default function DivisionToggle({ division, setDivision, theme = "industrial" }) {
  const isIndustrial = division === "industrial";
  const gold = "#D9B566";
  const purple = "#8B5CF6";
  const ring = theme === "industrial" ? "rgba(255,255,255,0.10)" : "rgba(36,50,75,0.15)";
  const knobBg = isIndustrial ? gold : purple;

  return (
    <div
      className="relative inline-flex items-center rounded-full p-1 select-none"
      style={{
        backgroundColor: theme === "industrial" ? "#0F1A26" : "#EDEAE4",
        border: `1px solid ${ring}`,
        width: 300,
        height: 48,
      }}
      role="tablist"
      aria-label="Division"
    >
      {/* sliding knob */}
      <div
        className="absolute h-[36px] w-[140px] rounded-full transition-all duration-300"
        style={{
          backgroundColor: knobBg,
          left: isIndustrial ? 6 : 154,
          top: 6,
          boxShadow: "0 6px 18px rgba(0,0,0,.15)",
        }}
        aria-hidden="true"
      />

      <button
        type="button"
        role="tab"
        aria-selected={isIndustrial}
        onClick={() => setDivision("industrial")}
        className="relative z-10 w-[140px] h-10 flex items-center justify-center font-semibold"
        style={{ color: isIndustrial ? "#0C0E14" : (theme === "industrial" ? "#E2E8F0" : "#24324B") }}
      >
        Industrial
      </button>

      <button
        type="button"
        role="tab"
        aria-selected={!isIndustrial}
        onClick={() => setDivision("residential")}
        className="relative z-10 w-[140px] h-10 flex items-center justify-center font-semibold"
        style={{ color: !isIndustrial ? "#0C0E14" : (theme === "industrial" ? "#E2E8F0" : "#24324B") }}
      >
        Residential
      </button>
    </div>
  );
}
