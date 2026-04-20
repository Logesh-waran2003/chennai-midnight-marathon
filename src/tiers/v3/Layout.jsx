import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Starfield from './components/Starfield'

export default function V3Layout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <div className="relative min-h-screen bg-black">
      <Starfield />
      <Nav />
      <main className="pt-16"><Outlet /></main>
      <Footer />
    </div>
  )
}
