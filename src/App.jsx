import './App.css'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"
import React, { useState } from "react"

function App() {
  // Single source of truth for the theme
  const [division, setDivision] = useState("industrial");

  return (
    <>
      <Pages division={division} setDivision={setDivision} />
      <Toaster />
    </>
  );
}

export default App;
