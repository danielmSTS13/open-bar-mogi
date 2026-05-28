import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Quote from "./pages/Quote"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orcamento" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App