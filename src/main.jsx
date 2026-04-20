import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Races from './pages/Races'
import Route_ from './pages/Route'
import Prizes from './pages/Prizes'
import Ambassadors from './pages/Ambassadors'
import About from './pages/About'
import FAQs from './pages/FAQs'
import Contact from './pages/Contact'
import Rookies from './pages/Rookies'
import Medical from './pages/Medical'
import Partners from './pages/Partners'
import Register from './pages/Register'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Refund from './pages/Refund'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="races" element={<Races />} />
          <Route path="route" element={<Route_ />} />
          <Route path="prizes" element={<Prizes />} />
          <Route path="ambassadors" element={<Ambassadors />} />
          <Route path="about" element={<About />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="rookies" element={<Rookies />} />
          <Route path="medical" element={<Medical />} />
          <Route path="partners" element={<Partners />} />
          <Route path="register" element={<Register />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="refund" element={<Refund />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
