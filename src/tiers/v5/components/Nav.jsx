import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NAV_ITEMS, POPPINS, BODY_TEXT, WHITE, BASE, IMG } from './constants'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(255,255,255,0.97)' : WHITE,
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      boxShadow: scrolled ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
      transition: 'all 0.3s',
      padding: '0 37px 0 18px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to={BASE}>
          <img src={`${IMG}/logo.png`} alt="CMM Logo" style={{ height: 45, objectFit: 'contain' }} />
        </Link>
        <div style={{ display: 'flex', gap: 0, alignItems: 'center' }}>
          {NAV_ITEMS.map(item => (
            <div key={item.label} style={{ position: 'relative' }}
              onMouseEnter={() => item.children && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}>
              {item.path ? (
                <Link to={item.path} style={{
                  fontFamily: POPPINS, fontSize: 14, fontWeight: 500,
                  color: BODY_TEXT, textDecoration: 'none', padding: '8px 12px',
                  transition: 'color 0.2s',
                }}>{item.label}</Link>
              ) : (
                <span style={{
                  fontFamily: POPPINS, fontSize: 14, fontWeight: 500,
                  color: BODY_TEXT, padding: '8px 12px', cursor: 'default',
                  display: 'flex', alignItems: 'center', gap: 4,
                }}>
                  {item.label}
                  {item.children && <span style={{ fontSize: 8 }}>▼</span>}
                </span>
              )}
              {item.children && openMenu === item.label && (
                <div style={{
                  position: 'absolute', top: '100%', left: 0, background: WHITE,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.1)', padding: '6px 0',
                  minWidth: 220, zIndex: 200,
                }}>
                  {item.children.map(child => (
                    <Link key={child.label} to={child.path} style={{
                      display: 'block', padding: '9px 18px', fontFamily: POPPINS,
                      fontSize: 13, color: BODY_TEXT, textDecoration: 'none', transition: 'background 0.15s',
                    }}
                      onMouseEnter={e => e.target.style.background = '#f5f5f5'}
                      onMouseLeave={e => e.target.style.background = 'transparent'}
                    >{child.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
