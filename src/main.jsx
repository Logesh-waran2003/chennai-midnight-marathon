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
import V4Layout from './tiers/v4/V4Layout'
import V4Home from './tiers/v4/pages/Home'
import V4Races from './tiers/v4/pages/Races'
import V4FAQs from './tiers/v4/pages/FAQs'
import V4About from './tiers/v4/pages/About'
import V4Contact from './tiers/v4/pages/Contact'
import V4Celebrities from './tiers/v4/pages/Celebrities'
import V4Rookies from './tiers/v4/pages/Rookies'
import V4Medical from './tiers/v4/pages/Medical'
import V4Prizes from './tiers/v4/pages/Prizes'
import V4Opportunities from './tiers/v4/pages/Opportunities'
import V4Partners from './tiers/v4/pages/Partners'
import V4RBITC from './tiers/v4/pages/RBITC'
import V4Philanthropy from './tiers/v4/pages/Philanthropy'
import V4Route from './tiers/v4/pages/Route'
import V4Privacy from './tiers/v4/pages/Privacy'
import V4Refund from './tiers/v4/pages/Refund'
import V4Terms from './tiers/v4/pages/Terms'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<PitchSelector />} />
        <Route path="v1" element={<V1Layout />} />
        <Route path="v2" element={<V2Layout />} />
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
        <Route path="v4" element={<V4Layout />}>
          <Route index element={<V4Home />} />
          <Route path="races" element={<V4Races />} />
          <Route path="faqs" element={<V4FAQs />} />
          <Route path="about" element={<V4About />} />
          <Route path="contact" element={<V4Contact />} />
          <Route path="celebrities" element={<V4Celebrities />} />
          <Route path="rookies" element={<V4Rookies />} />
          <Route path="medical" element={<V4Medical />} />
          <Route path="prizes" element={<V4Prizes />} />
          <Route path="opportunities" element={<V4Opportunities />} />
          <Route path="partners" element={<V4Partners />} />
          <Route path="rbitc" element={<V4RBITC />} />
          <Route path="philanthropy" element={<V4Philanthropy />} />
          <Route path="route" element={<V4Route />} />
          <Route path="privacy" element={<V4Privacy />} />
          <Route path="refund" element={<V4Refund />} />
          <Route path="terms" element={<V4Terms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
