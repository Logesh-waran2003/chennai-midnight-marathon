import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { WHITE, BODY_TEXT } from './components/constants'

export default function V4Layout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <div style={{ background: WHITE, minHeight: '100vh', color: BODY_TEXT }}>
      <Nav />
      <main><Outlet /></main>
      <Footer />
    </div>
  )
}
