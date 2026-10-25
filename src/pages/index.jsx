
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./Layout.jsx";

import Welcome from "./Welcome.jsx";
import Industrial from "./Industrial.jsx";
import Residential from "./Residential.jsx";
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

  // Public gateway
  if (pathname === "/") {
    return <Welcome />;
  }

  // Industrial — uses its own header and footer
  if (pathname === "/industrial") {
    return <Industrial />;
  }

  // Residential — uses its own header and footer
  if (pathname === "/residential") {
    return <Residential />;
  }

  // Contact — uses its own header and footer
  // Do not wrap in the old Layout
  if (pathname === "/contact") {
    return <Contact division={division} />;
  }

  // Legacy pages retain the existing Layout
  return (
    <Layout
      currentPageName={page}
      division={division}
      setDivision={setDivision}
    >
      <Routes>
        <Route
          path="/home"
          element={
            <Home
              division={division}
              setDivision={setDivision}
            />
          }
        />

        <Route
          path="/technology"
          element={<Technology division={division} />}
        />

        <Route
          path="/dreamhouse"
          element={
            <Dreamhouse
              division={division}
              setDivision={setDivision}
            />
          }
        />

        <Route
          path="*"
          element={
            <Home
              division={division}
              setDivision={setDivision}
            />
          }
        />
      </Routes>
    </Layout>
  );
}
