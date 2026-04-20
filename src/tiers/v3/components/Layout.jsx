import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Starfield from './Starfield'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="relative min-h-screen bg-black">
      <Starfield />
      <Nav />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
