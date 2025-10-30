// src/pages/Layout.jsx (temporary debug version)
export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "56px",
          background: "#0C0E14",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          zIndex: 9999,
          boxShadow: "0 4px 20px rgba(0,0,0,.3)"
        }}
      >
        <strong style={{ letterSpacing: 1 }}>AURUM</strong>
        <span style={{ marginLeft: 4, opacity: .8 }}>Build</span>
      </nav>

      {/* Push page content below the fixed header */}
      <main style={{ paddingTop: 72 }}>{children}</main>
    </div>
  );
}
