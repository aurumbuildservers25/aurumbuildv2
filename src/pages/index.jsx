import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./Layout.jsx";

import Home from "./Home.jsx";
import Contact from "./contact.jsx";
import Technology from "./technology.jsx";
import Dreamhouse from "./Dreamhouse.jsx";

function currentPageName(pathname) {
  const last = (pathname.split("/").pop() || "home").split("?")[0];
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  return cap(last === "" ? "home" : last);
}

export default function Pages({ division, setDivision }) {
  const { pathname } = useLocation();
  const page = currentPageName(pathname);

  return (
    // ✅ pass BOTH division and setDivision to Layout
    <Layout currentPageName={page} division={division} setDivision={setDivision}>
      <Routes>
        {/* Pages that need to toggle */}
        <Route path="/" element={<Home division={division} setDivision={setDivision} />} />
        <Route path="/home" element={<Home division={division} setDivision={setDivision} />} />

        {/* Pages that only read the theme */}
        <Route path="/contact" element={<Contact division={division} />} />
        <Route path="/technology" element={<Technology division={division} />} />

        {/* Dreamhouse can force residential on mount */}
        <Route path="/dreamhouse" element={<Dreamhouse division={division} setDivision={setDivision} />} />

        {/* Fallback */}
        <Route path="*" element={<Home division={division} setDivision={setDivision} />} />
      </Routes>
    </Layout>
  );
}
