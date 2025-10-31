// src/App.jsx
import './App.css'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"
import React, { useState } from "react"

function App() {
  // 👇 this controls Industrial / Residential globally
  const [division, setDivision] = useState('industrial')

  return (
    <>
      {/* Pass division + setDivision down */}
      <Pages division={division} setDivision={setDivision} />
      <Toaster />
    </>
  )
}

export default App
