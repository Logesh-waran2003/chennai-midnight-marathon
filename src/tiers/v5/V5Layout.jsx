import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { WHITE, BODY_TEXT, SYSTEM } from './components/constants'

export default function V5Layout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <div style={{ background: WHITE, minHeight: '100vh', color: BODY_TEXT, fontFamily: SYSTEM }}>
      <Nav />
      <main style={{ paddingTop: 68 }}><Outlet /></main>
      <Footer />
    </div>
  )
}
