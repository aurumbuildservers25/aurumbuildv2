import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./Layout.jsx";

import Home from "./Home.jsx";
import Contact from "./contact.jsx";        // ensure filenames match exactly
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
    <Layout currentPageName={page} division={division}>
      <Routes>
        {/* ✅ Home + Dreamhouse receive division + setDivision */}
        <Route
          path="/"
          element={<Home division={division} setDivision={setDivision} />}
        />
        <Route
          path="/home"
          element={<Home division={division} setDivision={setDivision} />}
        />

        {/* ✅ Other pages just use the current division */}
        <Route path="/contact" element={<Contact division={division} />} />
        <Route path="/technology" element={<Technology division={division} />} />

        {/* ✅ Dreamhouse forces residential */}
        <Route
          path="/dreamhouse"
          element={<Dreamhouse setDivision={setDivision} division={division} />}
        />

        {/* fallback */}
        <Route
          path="*"
          element={<Home division={division} setDivision={setDivision} />}
        />
      </Routes>
    </Layout>
  );
}
