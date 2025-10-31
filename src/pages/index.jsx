import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./Layout.jsx";

import Home from "./Home.jsx";
import Contact from "./contact.jsx";        // ensure filenames are lowercase as in project
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
    <Layout currentPageName={page}>
      <Routes>
        {/* ✅ Home + Dreamhouse get access to division state */}
        <Route path="/" element={<Home division={division} setDivision={setDivision} />} />
        <Route path="/home" element={<Home division={division} setDivision={setDivision} />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/technology" element={<Technology />} />

        {/* ✅ Dreamhouse can setDivision('residential') */}
        <Route path="/dreamhouse" element={<Dreamhouse setDivision={setDivision} />} />

        {/* fallback */}
        <Route path="*" element={<Home division={division} setDivision={setDivision} />} />
      </Routes>
    </Layout>
  );
}
