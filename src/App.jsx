import './App.css'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"
import React, { useState, createContext } from 'react'

export const DivisionContext = createContext({
  division: 'industrial',
  setDivision: () => {},
});

function App() {
  const [division, setDivision] = useState('industrial');

  return (
    <DivisionContext.Provider value={{ division, setDivision }}>
      <Pages />
      <Toaster />
    </DivisionContext.Provider>
  )
}

export default App;
