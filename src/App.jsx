
import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  let [darkMode, setDarkMode] = useState(false)
  let [best, setBest] = useState(localStorage.getItem("best") || 0)

  function changeTheme() {
    setDarkMode((prev) => !prev)
  }

  useEffect(() => {
    localStorage.setItem("best", best)
  }, [best])

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <Navbar
        darkMode={darkMode}
        changeTheme={changeTheme}
        best={best}
        setBest={setBest}  // Add this line
      />

      <Home
        darkMode={darkMode}
        best={best}
        setBest={setBest}
      />
    </div>
  )
}

export default App

