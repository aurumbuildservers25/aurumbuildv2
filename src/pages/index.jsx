import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./Layout.jsx";

import Home from "./Home.jsx";
import Contact from "./Contact.jsx";        // make sure filenames match case
import Technology from "./Technology.jsx";
import Dreamhouse from "./Dreamhouse.jsx";

function currentPageName(pathname) {
  const last = (pathname.split("/").pop() || "home").split("?")[0];
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  return cap(last === "" ? "home" : last);
}

function PagesContent() {
  const { pathname } = useLocation();
  const page = currentPageName(pathname);

  return (
    <Layout currentPageName={page}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/dreamhouse" element={<Dreamhouse />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default function Pages() {
  return <PagesContent />;
}
