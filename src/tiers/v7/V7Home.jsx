import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'

const T = {
  bg:      '#ffffff',
  bg1:     '#f5f4f0',
  bg2:     '#f0ede8',
  black:   '#0a0a0a',
  black2:  '#1a1a1a',
  gray:    '#6b6b6b',
  gray2:   '#b0aca6',
  border:  '#e8e4de',
  orange:  '#f56221',
  orangeL: '#fff2ec',
  display: "'Outfit', system-ui, sans-serif",
  body:    "'DM Sans', system-ui, sans-serif",
}

// ── Grain ──────────────────────────────────────────────────────
const Grain = () => (
  <div className="fixed inset-0 pointer-events-none z-50" style={{
    opacity: 0.018,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
    backgroundSize: '140px',
  }} />
)

// ── Ticker ─────────────────────────────────────────────────────
function Ticker() {
  const items = 'CHENNAI MIDNIGHT MARATHON  ·  DEC 5 2026  ·  MARINA BEACH  ·  5K · 10K · 21.1K · 31.6K  ·  RUN THE CITY WHEN IT SLEEPS  ·  '
  return (
    <div style={{ background: T.orange, overflow: 'hidden', padding: '9px 0', position: 'relative', zIndex: 20 }}>
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', width: 'max-content', whiteSpace: 'nowrap' }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} style={{ fontFamily: T.display, fontWeight: 800, fontSize: 11, letterSpacing: '0.2em', color: '#fff', padding: '0 0' }}>
            {items}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

// ── Countdown ──────────────────────────────────────────────────
function useCountdown(target) {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 })
  useEffect(() => {
    const tick = () => {
      const diff = new Date(target) - Date.now()
      if (diff <= 0) return
      setT({ d: Math.floor(diff/86400000), h: Math.floor((diff%86400000)/3600000), m: Math.floor((diff%3600000)/60000), s: Math.floor((diff%60000)/1000) })
    }
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id)
  }, [target])
  return t
}

// ── useIsMobile ────────────────────────────────────────────────
function useIsMobile(bp = 768) {
  const [mobile, setMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < bp)
  useEffect(() => {
    const fn = () => setMobile(window.innerWidth < bp)
    window.addEventListener('resize', fn); return () => window.removeEventListener('resize', fn)
  }, [bp])
  return mobile
}

// ── CountUp ────────────────────────────────────────────────────
function CountUp({ to, suffix = '' }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    let v = 0; const step = to / 55
    const id = setInterval(() => { v += step; if (v >= to) { setVal(to); clearInterval(id) } else setVal(Math.floor(v)) }, 18)
    return () => clearInterval(id)
  }, [to])
  return <>{val.toLocaleString()}{suffix}</>
}

// ── Custom Cursor ───────────────────────────────────────────────
function CustomCursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  useEffect(() => {
    let rx = window.innerWidth / 2, ry = window.innerHeight / 2
    let mx = rx, my = ry
    let raf
    const onMove = (e) => { mx = e.clientX; my = e.clientY }
    const animate = () => {
      rx += (mx - rx) * 0.13
      ry += (my - ry) * 0.13
      if (dot.current)  dot.current.style.transform  = `translate(${mx - 4}px,${my - 4}px)`
      if (ring.current) ring.current.style.transform = `translate(${rx - 18}px,${ry - 18}px)`
      raf = requestAnimationFrame(animate)
    }
    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])
  return (
    <>
      <div ref={dot} style={{ position:'fixed', top:0, left:0, width:8, height:8, borderRadius:'50%', background:T.orange, pointerEvents:'none', zIndex:9999, willChange:'transform' }} />
      <div ref={ring} style={{ position:'fixed', top:0, left:0, width:36, height:36, borderRadius:'50%', border:`1.5px solid ${T.orange}`, pointerEvents:'none', zIndex:9998, willChange:'transform', opacity:0.45 }} />
    </>
  )
}

// ── Nav ────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const mobile = useIsMobile()
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    fn(); window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <nav style={{ position:'fixed', top:0, left:0, right:0, zIndex:40, height:56, padding:'0 24px', display:'flex', alignItems:'center', justifyContent:'space-between', background:'rgba(255,255,255,0.96)', backdropFilter:'blur(20px)', borderBottom:`1px solid ${scrolled ? T.border : 'transparent'}`, transition:'border-color 0.25s' }}>
      <div style={{ display:'flex', flexDirection:'column', lineHeight:1 }}>
        <span style={{ fontFamily:T.display, fontWeight:900, fontSize:15, color:T.black, letterSpacing:'-0.5px' }}>CMM <span style={{ color:T.orange }}>·</span> 2026</span>
        {!mobile && <span style={{ fontFamily:T.body, fontSize:10, color:T.gray2, letterSpacing:'0.15em', textTransform:'uppercase', marginTop:2 }}>Chennai Midnight Marathon</span>}
      </div>
      {mobile ? (
        <a href="#register" style={{ fontFamily:T.body, fontWeight:700, fontSize:11, letterSpacing:'0.12em', padding:'9px 18px', background:T.orange, color:'#fff', borderRadius:2, textDecoration:'none' }}>REGISTER</a>
      ) : (
        <div style={{ display:'flex', alignItems:'center', gap:2 }}>
          {['Races','Route','Prizes','Partners'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ fontFamily:T.body, fontSize:13, color:T.gray, padding:'6px 12px', textDecoration:'none', transition:'color 0.15s', borderRadius:2 }}
              onMouseEnter={e => e.target.style.color = T.black}
              onMouseLeave={e => e.target.style.color = T.gray}>{l}</a>
          ))}
          <a href="#register" style={{ fontFamily:T.body, fontWeight:700, fontSize:11, letterSpacing:'0.12em', padding:'9px 22px', background:T.orange, color:'#fff', borderRadius:2, textDecoration:'none', marginLeft:16, transition:'opacity 0.15s' }}
            onMouseEnter={e => e.target.style.opacity='0.85'} onMouseLeave={e => e.target.style.opacity='1'}>REGISTER</a>
        </div>
      )}
    </nav>
  )
}

// ── Hero ───────────────────────────────────────────────────────
function Hero() {
  const mobile = useIsMobile()
  const cd = useCountdown('2026-12-05T23:00:00+05:30')
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 600], [0, 60])
  const pad = mobile ? '0 20px' : '0 80px'

  return (
    <section style={{ minHeight:'100vh', background:T.bg, display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:`0 0 ${mobile?48:72}px`, position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', backgroundImage:`linear-gradient(${T.border} 1px, transparent 1px), linear-gradient(90deg, ${T.border} 1px, transparent 1px)`, backgroundSize:'80px 80px', opacity:0.5 }} />
      {!mobile && (
        <motion.div style={{ y:bgY, position:'absolute', right:-20, bottom:40, pointerEvents:'none', zIndex:0 }}>
          <span style={{ fontFamily:T.display, fontWeight:900, fontSize:'clamp(180px,28vw,380px)', color:'rgba(245,98,33,0.06)', lineHeight:1, letterSpacing:'-8px', userSelect:'none' }}>31.6</span>
        </motion.div>
      )}
      {!mobile && (
        <div style={{ position:'absolute', left:16, top:'50%', transform:'translateY(-50%) rotate(-90deg)', transformOrigin:'center', zIndex:2 }}>
          <span style={{ fontFamily:T.body, fontSize:10, letterSpacing:'0.3em', color:T.gray2, textTransform:'uppercase', whiteSpace:'nowrap' }}>Chennai · India · 2026</span>
        </div>
      )}
      <div style={{ position:'relative', zIndex:1, padding:pad }}>
        <motion.div initial={{opacity:0,x:-16}} animate={{opacity:1,x:0}} transition={{delay:0.2}}
          style={{ display:'flex', alignItems:'center', gap:12, marginBottom:20 }}>
          <div style={{ width:28, height:2, background:T.orange }} />
          <span style={{ fontFamily:T.body, fontSize:11, letterSpacing:'0.3em', textTransform:'uppercase', color:T.orange }}>December 5, 2026 · 11:00 PM</span>
        </motion.div>
        <div style={{ marginBottom: mobile ? 32 : 52 }}>
          {[
            { word:'CHENNAI',  color:T.black,       stroke:'none' },
            { word:'MIDNIGHT', color:'transparent',  stroke:`1.5px ${T.black}` },
            { word:'MARATHON', color:T.orange,       stroke:'none' },
          ].map(({ word, color, stroke }, i) => (
            <motion.div key={word} initial={{opacity:0,x:-32}} animate={{opacity:1,x:0}} transition={{delay:0.3+i*0.12,duration:0.8,ease:[0.16,1,0.3,1]}}>
              <span style={{ fontFamily:T.display, fontWeight:900, fontSize: mobile ? 'clamp(3rem,18vw,5rem)' : 'clamp(3.8rem,11vw,9.5rem)', lineHeight:0.88, letterSpacing:'-4px', color, WebkitTextStroke:stroke, display:'block' }}>{word}</span>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:0.8}}
          style={{ display:'flex', flexDirection: mobile ? 'column' : 'row', alignItems: mobile ? 'flex-start' : 'flex-end', justifyContent:'space-between', gap:32 }}>
          <div style={{ maxWidth:340 }}>
            <p style={{ fontFamily:T.body, fontSize:14, color:T.gray, lineHeight:1.75, marginBottom:24 }}>
              Run the city when it sleeps. Chennai's premier midnight running event — 5K, 10K, Half Marathon, and the iconic 31.6K.
            </p>
            <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
              <a href="#register" style={{ fontFamily:T.body, fontWeight:700, fontSize:12, letterSpacing:'0.08em', padding:'12px 28px', background:T.orange, color:'#fff', textDecoration:'none', borderRadius:2 }}>REGISTER NOW</a>
              <a href="#races" style={{ fontFamily:T.body, fontWeight:500, fontSize:12, padding:'11px 20px', border:`1px solid ${T.border}`, color:T.gray, textDecoration:'none', borderRadius:2, background:T.bg }}>View Races</a>
            </div>
          </div>
          <div style={{ display:'flex', gap:0, border:`1px solid ${T.border}`, background:T.bg, alignSelf: mobile ? 'stretch' : 'auto' }}>
            {[['d','Days'],['h','Hrs'],['m','Min'],['s','Sec']].map(([k,label],i) => (
              <div key={k} style={{ textAlign:'center', padding: mobile ? '12px 0' : '16px 28px', flex: mobile ? 1 : 'none', borderLeft: i>0 ? `1px solid ${T.border}` : 'none' }}>
                <div style={{ fontFamily:T.display, fontWeight:900, fontSize: mobile ? 'clamp(1.4rem,6vw,2rem)' : 'clamp(1.8rem,3.5vw,3rem)', color:T.black, letterSpacing:'-2px', lineHeight:1, fontVariantNumeric:'tabular-nums' }}>{String(cd[k]).padStart(2,'0')}</div>
                <div style={{ fontFamily:T.body, fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase', color:T.gray2, marginTop:6 }}>{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ── Stats — black band ─────────────────────────────────────────
function Stats() {
  const mobile = useIsMobile()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })
  return (
    <section ref={ref} style={{ background:T.black, padding: mobile ? '40px 20px' : '56px 80px' }}>
      <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns: mobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: mobile ? 24 : 0 }}>
        {[{val:12000,suf:'+',label:'Runners'},{val:17,suf:'+',label:'Cities'},{val:8,suf:'',label:'Years Running'},{val:4,suf:'',label:'Distances'}].map((s,i) => (
          <motion.div key={s.label}
            initial={{opacity:0,y:12}} animate={inView?{opacity:1,y:0}:{}} transition={{delay:i*0.08}}
            style={{ textAlign:'center', padding: mobile ? '0' : '0 24px', borderRight: !mobile && i<3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
          >
            <div style={{ fontFamily:T.display, fontWeight:900, fontSize:'clamp(2.2rem,4vw,3.5rem)', color:'#fff', letterSpacing:'-2px', lineHeight:1 }}>
              {inView ? <CountUp to={s.val} suffix={s.suf} /> : '0'}
            </div>
            <div style={{ fontFamily:T.body, fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(255,255,255,0.3)', marginTop:8 }}>{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ── Races — list rows ──────────────────────────────────────────
function Races() {
  const mobile = useIsMobile()
  const races = [
    { name:'5K Run',        km:'05', tag:'Beginner',     desc:'Open to all ages. No timing chip. Perfect first race.', color:'#0ea5e9', fee:'₹799'   },
    { name:'10K Run',       km:'10', tag:'Popular',      desc:'The crowd favourite. Timed run through Chennai.',        color:T.orange,  fee:'₹999'   },
    { name:'Half Marathon', km:'21', tag:'Intermediate', desc:'21.1 km of city lights and midnight energy.',            color:'#8b5cf6', fee:'₹1,499' },
    { name:'31.6K Ultra',   km:'31', tag:'Elite',        desc:"Chennai's ultimate midnight challenge.",                 color:'#f59e0b', fee:'₹1,999' },
  ]
  return (
    <section id="races" style={{ background:T.bg, padding: mobile ? '64px 20px' : '96px 80px', borderTop:`1px solid ${T.border}` }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.05}}
          style={{ marginBottom:40, display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:12 }}>
          <div>
            <p style={{ fontFamily:T.body, fontSize:11, letterSpacing:'0.3em', textTransform:'uppercase', color:T.orange, marginBottom:10 }}>Race Categories</p>
            <h2 style={{ fontFamily:T.display, fontWeight:900, fontSize:'clamp(2.5rem,6vw,4.5rem)', color:T.black, letterSpacing:'-3px', lineHeight:0.9 }}>Pick Your<br/>Distance</h2>
          </div>
          <a href="#register" style={{ fontFamily:T.body, fontWeight:600, fontSize:11, letterSpacing:'0.1em', padding:'10px 20px', border:`1px solid ${T.border}`, color:T.gray, textDecoration:'none', borderRadius:2 }}>VIEW ALL →</a>
        </motion.div>
        <div>
          {races.map((r,i) => (
            <motion.div key={r.name}
              initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:0.05}} transition={{delay:i*0.07}}
              whileHover={{ backgroundColor: T.bg1 }}
              style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding: mobile ? '18px 8px' : '24px 16px', borderTop:`1px solid ${T.border}`, cursor:'pointer', transition:'background 0.2s', borderRadius:2 }}
            >
              <div style={{ display:'flex', alignItems:'center', gap: mobile ? 12 : 28 }}>
                {!mobile && <span style={{ fontFamily:T.display, fontWeight:900, fontSize:'clamp(2.5rem,5vw,4rem)', color:'rgba(0,0,0,0.06)', letterSpacing:'-3px', lineHeight:1, minWidth:100, textAlign:'right' }}>{r.km}</span>}
                <div>
                  <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:4, flexWrap:'wrap' }}>
                    <span style={{ fontFamily:T.display, fontWeight:800, fontSize:'clamp(1rem,2vw,1.6rem)', color:T.black, letterSpacing:'-0.5px' }}>{r.name}</span>
                    <span style={{ fontFamily:T.body, fontSize:10, fontWeight:700, padding:'3px 8px', borderRadius:2, background:`${r.color}18`, color:r.color, letterSpacing:'0.05em' }}>{r.tag}</span>
                  </div>
                  {!mobile && <p style={{ fontFamily:T.body, fontSize:13, color:T.gray, lineHeight:1.5 }}>{r.desc}</p>}
                </div>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap: mobile ? 10 : 20, flexShrink:0 }}>
                <span style={{ fontFamily:T.display, fontWeight:800, fontSize: mobile ? 15 : 18, color:T.black, letterSpacing:'-0.5px' }}>{r.fee}</span>
                <div style={{ width:34, height:34, borderRadius:'50%', border:`1px solid ${T.border}`, display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={T.gray} strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop:`1px solid ${T.border}` }} />
        </div>
      </div>
    </section>
  )
}

// ── Route ──────────────────────────────────────────────────────
function RouteSection() {
  const mobile = useIsMobile()
  return (
    <section id="route" style={{ background:T.bg1, borderTop:`1px solid ${T.border}`, padding: mobile ? '64px 20px' : '96px 80px' }}>
      <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 40 : 80, alignItems:'center' }}>
        <motion.div initial={{opacity:0,x:-24}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:0.05}}>
          <p style={{ fontFamily:T.body, fontSize:11, letterSpacing:'0.3em', textTransform:'uppercase', color:T.orange, marginBottom:12 }}>The Course</p>
          <h2 style={{ fontFamily:T.display, fontWeight:900, fontSize:'clamp(2rem,4vw,3.5rem)', color:T.black, letterSpacing:'-2px', lineHeight:0.92, marginBottom:24 }}>Run Through<br/>Chennai's Heart</h2>
          <p style={{ fontFamily:T.body, fontSize:14, color:T.gray, lineHeight:1.75, marginBottom:36 }}>
            Starting at Marina Beach, the route winds through iconic landmarks — Napier Bridge, Anna Salai, and back along the coastline. Flat, fast, and breathtaking at midnight.
          </p>
          <div>
            {[['Start / Finish','Marina Beach Promenade'],['Landmark 1','Napier Bridge'],['Landmark 2','Anna Salai'],['Turnaround','Lighthouse, Marina']].map(([pt,loc],i) => (
              <motion.div key={pt}
                initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true,amount:0.05}} transition={{delay:i*0.08}}
                style={{ display:'flex', alignItems:'center', gap:16, padding:'14px 0', borderBottom:`1px solid ${T.border}` }}
              >
                <div style={{ width:6, height:6, borderRadius:'50%', background:T.orange, flexShrink:0 }} />
                <span style={{ fontFamily:T.body, fontSize:11, color:T.gray2, minWidth:100 }}>{pt}</span>
                <span style={{ fontFamily:T.body, fontSize:13, color:T.black }}>{loc}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,x: mobile ? 0 : 24, y: mobile ? 24 : 0}} whileInView={{opacity:1,x:0,y:0}} viewport={{once:true,amount:0.05}}
          style={{ background:T.bg, border:`1px solid ${T.border}`, borderRadius:4, aspectRatio:'1', display:'flex', alignItems:'center', justifyContent:'center', position:'relative', overflow:'hidden' }}
        >
          <div style={{ position:'absolute', inset:0, background:`radial-gradient(circle at 50% 50%, ${T.orangeL}, transparent 70%)` }} />
          <svg viewBox="0 0 280 280" style={{ width:'80%', height:'80%' }} fill="none">
            <motion.path d="M 140 240 C 70 240 36 185 36 140 C 36 75 95 36 140 36 C 185 36 244 75 244 140 C 244 185 210 228 172 240 L 140 240"
              stroke={T.orange} strokeWidth="2" strokeDasharray="580"
              initial={{strokeDashoffset:580}} whileInView={{strokeDashoffset:0}} viewport={{once:true,amount:0.05}} transition={{duration:2.5,ease:'easeInOut'}}
            />
            {[[140,240],[36,140],[140,36],[244,140]].map(([cx,cy],i) => (
              <motion.circle key={i} cx={cx} cy={cy} r="5" fill={T.orange}
                initial={{scale:0,opacity:0}} whileInView={{scale:1,opacity:1}} viewport={{once:true,amount:0.05}} transition={{delay:0.6+i*0.25}} />
            ))}
            <text x="148" y="260" fill={T.gray} fontSize="9" fontFamily="DM Sans,sans-serif">Marina Beach</text>
          </svg>
          <div style={{ position:'absolute', bottom:12, right:14, fontFamily:T.body, fontSize:10, color:T.gray2, letterSpacing:'0.1em' }}>Route · Chennai</div>
        </motion.div>
      </div>
    </section>
  )
}
// ── Prizes ─────────────────────────────────────────────────────
function Prizes() {
  const mobile = useIsMobile()
  const prizes = [
    { place:'01', amount:'₹1,00,000', race:'31.6K Open',         color:T.orange },
    { place:'02', amount:'₹50,000',   race:'31.6K Open',         color:T.gray   },
    { place:'03', amount:'₹25,000',   race:'31.6K Open',         color:'#cd7f32'},
    { place:'—',  amount:'₹20,000',   race:'Half Marathon Top 3',color:'#8b5cf6'},
  ]
  return (
    <section id="prizes" style={{ background:T.bg, borderTop:`1px solid ${T.border}`, padding: mobile ? '64px 20px' : '96px 80px' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.05}} style={{marginBottom: mobile ? 32 : 56}}>
          <p style={{ fontFamily:T.body, fontSize:11, letterSpacing:'0.3em', textTransform:'uppercase', color:T.orange, marginBottom:10 }}>Prize Pool</p>
          <h2 style={{ fontFamily:T.display, fontWeight:900, fontSize:'clamp(2.5rem,6vw,4.5rem)', color:T.black, letterSpacing:'-3px', lineHeight:0.9 }}>Run For Glory</h2>
        </motion.div>
        <div style={{ display:'grid', gridTemplateColumns: mobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap:12 }}>
          {prizes.map((p,i) => (
            <motion.div key={i}
              initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.05}} transition={{delay:i*0.07}}
              style={{ padding:'28px 20px', background:T.bg1, border:`1px solid ${T.border}`, borderRadius:4, position:'relative', overflow:'hidden' }}
            >
              <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:p.color }} />
              <div style={{ fontFamily:T.display, fontWeight:900, fontSize:48, color:'rgba(0,0,0,0.05)', letterSpacing:'-3px', lineHeight:1, marginBottom:12 }}>{p.place}</div>
              <div style={{ fontFamily:T.display, fontWeight:900, fontSize: mobile ? 18 : 22, color:T.black, letterSpacing:'-1px', marginBottom:6 }}>{p.amount}</div>
              <div style={{ fontFamily:T.body, fontSize:11, color:T.gray, letterSpacing:'0.03em' }}>{p.race}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Partners ───────────────────────────────────────────────────
function Partners() {
  const mobile = useIsMobile()
  const logos = [
    '/images/v5/OTWR-LOGO-Final-e1762329867862.png',
    '/images/v5/Bajate-Raho-logo-e1760617804310.png',
    '/images/v5/akamai-logo-768x379.png',
    '/images/v5/PhonePe-Logo-for-BMM-website-313x192-1-e1760616420388.png',
    '/images/v5/Aster-Logo-for-BMM-website-313x192-1-300x184-1-e1760616495398.png',
    '/images/v5/Bisleri-White-BG-1-e1760616671411-768x369.png',
    '/images/v5/Smoor-Logo-for-BMM-website-313x192-1-e1760616535923.png',
    '/images/v5/dozee1-e1762330001742-768x478.png',
  ]
  return (
    <section id="partners" style={{ background:T.bg2, borderTop:`1px solid ${T.border}`, padding:'64px 0', overflow:'hidden' }}>
      <div style={{ maxWidth:1100, margin:'0 auto', padding: mobile ? '0 20px' : '0 80px', marginBottom:32, display:'flex', alignItems:'center', gap:20 }}>
        <p style={{ fontFamily:T.body, fontSize:11, letterSpacing:'0.3em', textTransform:'uppercase', color:T.gray2, whiteSpace:'nowrap' }}>Our Partners</p>
        <div style={{ height:1, flex:1, background:T.border }} />
      </div>
      <motion.div
        animate={{ x:['0%','-50%'] }}
        transition={{ duration:28, repeat:Infinity, ease:'linear' }}
        style={{ display:'flex', alignItems:'center', gap: mobile ? 40 : 64, width:'max-content' }}
      >
        {[...logos,...logos].map((src,i) => (
          <div key={i} style={{ width: mobile ? 72 : 100, height:36, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
            <img src={src} alt="" style={{ maxHeight:28, maxWidth:'100%', objectFit:'contain', opacity:0.35 }} />
          </div>
        ))}
      </motion.div>
    </section>
  )
}

// ── Register — form section ─────────────────────────────────────
function Register() {
  const mobile = useIsMobile()
  const [state, handleSubmit] = useForm('mzdywklo')
  const [selected, setSelected] = useState('')
  const races = [
    { id:'5k',   label:'5K Run',        fee:'₹799'   },
    { id:'10k',  label:'10K Run',       fee:'₹999'   },
    { id:'half', label:'Half Marathon', fee:'₹1,499' },
    { id:'ultra',label:'31.6K Ultra',   fee:'₹1,999' },
  ]
  return (
    <section id="register" style={{ background:T.black, padding: mobile ? '64px 20px' : '100px 80px', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', right:-20, bottom:-40, pointerEvents:'none' }}>
        <span style={{ fontFamily:T.display, fontWeight:900, fontSize:'clamp(120px,20vw,260px)', color:'rgba(255,255,255,0.03)', lineHeight:1, letterSpacing:'-8px', userSelect:'none' }}>RUN</span>
      </div>
      <div style={{ maxWidth:1100, margin:'0 auto', position:'relative', zIndex:1, display:'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 40 : 80, alignItems:'start' }}>
        <motion.div initial={{opacity:0,x: mobile ? 0 : -24, y: mobile ? -16 : 0}} whileInView={{opacity:1,x:0,y:0}} viewport={{once:true,amount:0.05}}>
          <p style={{ fontFamily:T.body, fontSize:11, letterSpacing:'0.3em', textTransform:'uppercase', color:T.orange, marginBottom:20 }}>December 5, 2026</p>
          <h2 style={{ fontFamily:T.display, fontWeight:900, fontSize:'clamp(3rem,8vw,6.5rem)', color:'#fff', letterSpacing:'-4px', lineHeight:0.88, marginBottom:32 }}>
            Are You<br/>Ready?
          </h2>
          <p style={{ fontFamily:T.body, fontSize:14, color:'rgba(255,255,255,0.4)', lineHeight:1.75, marginBottom:40 }}>
            Secure your bib for Chennai's premier midnight running event. Limited slots available — early registrations get a free finisher tee.
          </p>
          <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
            {races.map(r => (
              <button key={r.id} type="button" onClick={() => setSelected(r.id)}
                style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 20px', border:`1px solid ${selected===r.id ? T.orange : 'rgba(255,255,255,0.1)'}`, background: selected===r.id ? 'rgba(245,98,33,0.1)' : 'transparent', borderRadius:2, cursor:'pointer', transition:'all 0.15s' }}>
                <span style={{ fontFamily:T.body, fontWeight:600, fontSize:13, color: selected===r.id ? T.orange : 'rgba(255,255,255,0.7)' }}>{r.label}</span>
                <span style={{ fontFamily:T.display, fontWeight:800, fontSize:14, color: selected===r.id ? T.orange : 'rgba(255,255,255,0.4)' }}>{r.fee}</span>
              </button>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,x: mobile ? 0 : 24, y: mobile ? 16 : 0}} whileInView={{opacity:1,x:0,y:0}} viewport={{once:true,amount:0.05}}>
          {state.succeeded ? (
            <div style={{ padding:'48px 40px', border:`1px solid rgba(245,98,33,0.3)`, borderRadius:4, textAlign:'center' }}>
              <div style={{ width:48, height:48, borderRadius:'50%', background:'rgba(245,98,33,0.15)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 20px' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.orange} strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3 style={{ fontFamily:T.display, fontWeight:900, fontSize:28, color:'#fff', letterSpacing:'-1px', marginBottom:10 }}>You're In!</h3>
              <p style={{ fontFamily:T.body, fontSize:14, color:'rgba(255,255,255,0.45)', lineHeight:1.7 }}>We've received your registration. Check your inbox for confirmation details.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:16 }}>
              <input type="hidden" name="distance" value={selected || 'Not selected'} />
              {[
                { name:'name',  label:'Full Name',    type:'text',  placeholder:'Your name' },
                { name:'email', label:'Email Address', type:'email', placeholder:'you@example.com' },
                { name:'phone', label:'Phone Number',  type:'tel',   placeholder:'+91 98765 43210' },
              ].map(f => (
                <div key={f.name}>
                  <label style={{ fontFamily:T.body, fontSize:11, letterSpacing:'0.15em', textTransform:'uppercase', color:'rgba(255,255,255,0.4)', display:'block', marginBottom:8 }}>{f.label}</label>
                  <input type={f.type} name={f.name} placeholder={f.placeholder} required
                    style={{ width:'100%', padding:'12px 16px', background:'rgba(255,255,255,0.05)', border:`1px solid rgba(255,255,255,0.1)`, borderRadius:2, fontFamily:T.body, fontSize:14, color:'#fff', outline:'none', boxSizing:'border-box', transition:'border-color 0.15s' }}
                    onFocus={e => e.target.style.borderColor = T.orange}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                  <ValidationError field={f.name} errors={state.errors} style={{ fontFamily:T.body, fontSize:11, color:T.orange, marginTop:4, display:'block' }} />
                </div>
              ))}
              <div>
                <label style={{ fontFamily:T.body, fontSize:11, letterSpacing:'0.15em', textTransform:'uppercase', color:'rgba(255,255,255,0.4)', display:'block', marginBottom:8 }}>City</label>
                <input type="text" name="city" placeholder="Chennai" required
                  style={{ width:'100%', padding:'12px 16px', background:'rgba(255,255,255,0.05)', border:`1px solid rgba(255,255,255,0.1)`, borderRadius:2, fontFamily:T.body, fontSize:14, color:'#fff', outline:'none', boxSizing:'border-box', transition:'border-color 0.15s' }}
                  onFocus={e => e.target.style.borderColor = T.orange}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
              </div>
              {!selected && <p style={{ fontFamily:T.body, fontSize:12, color:'rgba(255,255,255,0.3)', fontStyle:'italic' }}>← Pick a race distance above</p>}
              <button type="submit" disabled={state.submitting}
                style={{ marginTop:8, padding:'14px 32px', background: state.submitting ? 'rgba(245,98,33,0.5)' : T.orange, color:'#fff', border:'none', borderRadius:2, fontFamily:T.body, fontWeight:700, fontSize:12, letterSpacing:'0.12em', cursor: state.submitting ? 'not-allowed' : 'pointer', transition:'opacity 0.15s', boxShadow:'0 0 40px rgba(245,98,33,0.25)' }}>
                {state.submitting ? 'SENDING...' : 'SECURE MY BIB →'}
              </button>
              <ValidationError errors={state.errors} style={{ fontFamily:T.body, fontSize:12, color:T.orange }} />
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

// ── Footer ─────────────────────────────────────────────────────
function Footer() {
  const mobile = useIsMobile()
  return (
    <footer style={{ background:T.bg, borderTop:`1px solid ${T.border}`, padding: mobile ? '24px 20px' : '24px 80px' }}>
      <div style={{ maxWidth:1100, margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:16 }}>
        <span style={{ fontFamily:T.display, fontWeight:900, fontSize:13, color:T.black, letterSpacing:'-0.3px' }}>
          CMM <span style={{ color:T.orange }}>·</span> 2026
        </span>
        <div style={{ display:'flex', gap: mobile ? 16 : 24, flexWrap:'wrap' }}>
          {['Privacy','Terms','Refund','Contact'].map(item => (
            <a key={item} href="#" style={{ fontFamily:T.body, fontSize:12, color:T.gray2, textDecoration:'none', transition:'color 0.15s' }}
              onMouseEnter={e=>e.target.style.color=T.black} onMouseLeave={e=>e.target.style.color=T.gray2}>{item}</a>
          ))}
        </div>
        <p style={{ fontFamily:T.body, fontSize:11, color:T.gray2 }}>© 2026 Chennai Midnight Marathon</p>
      </div>
    </footer>
  )
}

// ── Root ───────────────────────────────────────────────────────
export default function V7Home() {
  return (
    <div style={{ background: T.bg, cursor: 'none' }}>
      <CustomCursor />
      <Grain />
      <Nav />
      <Ticker />
      <Hero />
      <Stats />
      <Races />
      <RouteSection />
      <Prizes />
      <Partners />
      <Register />
      <Footer />
    </div>
  )
}
