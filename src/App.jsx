import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Quote from "./pages/Quote"
import AdminDashboard from "./pages/AdminDashboard"
import AdminQuoteDetails from "./pages/AdminQuoteDetails"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orcamento" element={<Quote />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/orcamento" element={<AdminQuoteDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App