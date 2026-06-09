import { Routes } from "react-router-dom"
import Navbar from "./layouts/Navbar"
import { Route } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
