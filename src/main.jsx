import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PitchSelector from './PitchSelector'
import V1Layout from './tiers/v1/Layout'
import V2Layout from './tiers/v2/Layout'
import V3Layout from './tiers/v3/Layout'
import V3Home from './tiers/v3/pages/Home'
import V3Races from './tiers/v3/pages/Races'
import V3Route from './tiers/v3/pages/Route'
import V3Prizes from './tiers/v3/pages/Prizes'
import V3Ambassadors from './tiers/v3/pages/Ambassadors'
import V3About from './tiers/v3/pages/About'
import V3FAQs from './tiers/v3/pages/FAQs'
import V3Contact from './tiers/v3/pages/Contact'
import V3Rookies from './tiers/v3/pages/Rookies'
import V3Medical from './tiers/v3/pages/Medical'
import V3Partners from './tiers/v3/pages/Partners'
import V3Register from './tiers/v3/pages/Register'
import V3Privacy from './tiers/v3/pages/Privacy'
import V3Terms from './tiers/v3/pages/Terms'
import V3Refund from './tiers/v3/pages/Refund'
import V4Layout from './tiers/v4/Layout'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<PitchSelector />} />
        <Route path="v1" element={<V1Layout />} />
        <Route path="v2" element={<V2Layout />} />
        <Route path="v4" element={<V4Layout />} />
        <Route path="v3" element={<V3Layout />}>
          <Route index element={<V3Home />} />
          <Route path="races" element={<V3Races />} />
          <Route path="route" element={<V3Route />} />
          <Route path="prizes" element={<V3Prizes />} />
          <Route path="ambassadors" element={<V3Ambassadors />} />
          <Route path="about" element={<V3About />} />
          <Route path="faqs" element={<V3FAQs />} />
          <Route path="contact" element={<V3Contact />} />
          <Route path="rookies" element={<V3Rookies />} />
          <Route path="medical" element={<V3Medical />} />
          <Route path="partners" element={<V3Partners />} />
          <Route path="register" element={<V3Register />} />
          <Route path="privacy" element={<V3Privacy />} />
          <Route path="terms" element={<V3Terms />} />
          <Route path="refund" element={<V3Refund />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
