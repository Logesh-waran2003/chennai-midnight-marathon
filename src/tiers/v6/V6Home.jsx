import { useState, useEffect } from 'react';

const COLORS = {
  orange: '#f56221',
  dark: '#020106',
  footer: '#171614',
  instagram: '#1b1a18',
  purple: '#dab1d9',
  white: '#ffffff',
};

const PARTNERS = [
  { name: 'Official Route Partner', img: '/images/v5/OTWR-LOGO-Final-e1762329867862.png' },
  { name: 'Official Biryani Partner', img: '/images/v5/Bajate-Raho-logo-e1760617804310.png' },
  { name: 'Official Green Heart Partner', img: '/images/v5/MANA4-LOGO-e1762330068857.png' },
  { name: 'Official Food Court Partner', img: '/images/v5/Chefs-Hat-Final-logo1-768x574.png' },
  { name: '5K Runs Awards Partner', img: '/images/v5/akamai-logo-768x379.png' },
  { name: 'Official Souvenir Partner', img: '/images/v5/Fastenal-Logo.wine_-e1760616650750-768x315.png' },
  { name: 'Title', img: '/images/v5/BLRKU_BLUE-DT-LOGO-e1762329901308-768x378.png' },
  { name: 'Associate Partner', img: '/images/v5/BR-Logo-RGB-Blue@2x-e1762276237709-768x412.png' },
  { name: 'Official Healthcare Partner', img: '/images/v5/Aster-Logo-for-BMM-website-313x192-1-300x184-1-e1760616495398.png' },
  { name: 'Half Marathon Partner', img: '/images/v5/PhonePe-Logo-for-BMM-website-313x192-1-e1760616420388.png' },
  { name: '31.6K Run Partner', img: '/images/v5/LS-new-logo3-768x400.png' },
  { name: '10k Run Partner', img: '/images/v5/Smoor-Logo-for-BMM-website-313x192-1-e1760616535923.png' },
  { name: 'BK5K Race Partner', img: '/images/v5/Bisleri-White-BG-1-e1760616671411-768x369.png' },
  { name: 'Official Hospitality Partner', img: '/images/v5/KTDC-e1762329943410-768x377.jpeg' },
  { name: 'Official Health Science Partner', img: '/images/v5/dozee1-e1762330001742-768x478.png' },
  { name: 'Official Hydration Partner', img: '/images/v5/Bisleri-White-BG-1-e1760616671411-768x369.png' },
  { name: 'Official Radio Partner', img: '/images/v5/Spotify_Full_Logo_RGB_Black-1-scaled-e1762329732569-768x378.png' },
  { name: 'Pet-a-thon Partner', img: '/images/v5/aims-logo_updt-1.png' },
  { name: 'Official Music Streaming Partner', img: '/images/v5/Spotify_Full_Logo_RGB_Black-1-scaled-e1762329732569-768x378.png' },
  { name: 'Official Tourism Partner', img: '/images/v5/KTDC-e1762329943410-768x377.jpeg' },
  { name: 'Official Grocery Partner', img: '/images/v5/Asset-1@300x-8-768x174.png' },
  { name: 'Official Hotel Partner', img: '/images/v5/BLRKU_BLUE-DT-LOGO-e1762329901308-768x378.png' },
  { name: 'Official Wellness Partner', img: '/images/v5/dozee1-e1762330001742-768x478.png' },
];

const SITE_LINKS = [
  'Provisional Results only',
  'Race Route Map',
  'Contact Us',
  'FAQs',
  'Rotary Bangalore IT Corridor',
  'Bengaluru Midnight Marathon',
  'Refund Policy',
  'Privacy Policy',
  'Terms & Conditions',
];

const NAV_ITEMS = ['THE RACE', 'PARTNERSHIP', 'PHILANTHROPY', 'ABOUT', 'Race Route Map', 'FAQs'];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(2,1,6,0.95)' : 'rgba(2,1,6,0.7)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <div className="flex items-center gap-2">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
            style={{ backgroundColor: COLORS.orange, fontFamily: 'Grechen Fuemen, cursive' }}
          >
            BMM
          </div>
        </div>
        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-white/80 hover:text-white text-sm tracking-wider transition-colors uppercase"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      className="relative min-h-[80vh] flex flex-col items-center justify-center"
      style={{ backgroundColor: COLORS.dark }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(245,98,33,0.3) 0%, rgba(2,1,6,0.9) 50%, rgba(218,177,217,0.2) 100%)',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: `radial-gradient(circle, ${COLORS.orange} 0%, transparent 70%)`,
          }}
        />
      </div>
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1
          className="text-6xl md:text-8xl text-white mb-6 leading-tight"
          style={{ fontFamily: 'Grechen Fuemen, cursive' }}
        >
          Bengaluru Midnight Marathon
        </h1>
        <p
          className="text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          style={{ fontFamily: 'Archivo, sans-serif', color: COLORS.purple }}
        >
          Asia's Only Midnight Marathon — 18th Edition, December 6th, 2025
        </p>
        <a
          href="#"
          className="inline-block px-8 py-4 text-white font-semibold text-sm tracking-widest uppercase rounded-full transition-all hover:scale-105"
          style={{
            backgroundColor: COLORS.orange,
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Final Timings & Certificate Download
        </a>
      </div>
    </section>
  );
}

function PartnersSection() {
  const [page, setPage] = useState(0);
  const perPage = 6;
  const totalPages = Math.ceil(PARTNERS.length / perPage);
  const visible = PARTNERS.slice(page * perPage, (page + 1) * perPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
    }, 4000);
    return () => clearInterval(timer);
  }, [totalPages]);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#0a0a0f' }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl text-white text-center mb-14"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Partners 2025
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 min-h-[200px]">
          {visible.map((partner, i) => (
            <div
              key={`${page}-${i}`}
              className="bg-white rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-500 hover:scale-105"
              style={{ animation: 'fadeIn 0.5s ease-in' }}
            >
              <img
                src={partner.img}
                alt={partner.name}
                className="w-full h-24 object-contain"
              />
              <span
                className="text-xs text-center text-gray-600 leading-tight"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                {partner.name}
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-3 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className="w-3 h-3 rounded-full transition-all"
              style={{
                backgroundColor: i === page ? COLORS.orange : 'rgba(255,255,255,0.3)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatANight() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: COLORS.dark }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3
            className="text-5xl md:text-7xl text-white mb-8 leading-none"
            style={{ fontFamily: 'Grechen Fuemen, cursive' }}
          >
            WHAT A<br />NIGHT
          </h3>
          <div style={{ fontFamily: 'Archivo, sans-serif', color: 'rgba(255,255,255,0.8)' }}>
            <p className="text-base leading-relaxed mb-4">
              Covid stopped us….. the cyclone did not…… the runners ran through the rainy winter
              night.. Rotarians, the bikers, the rotractors, the sponsors beat the night.. Music
              blasted, drummers roared, spectators cheered on.
            </p>
            <p className="text-base leading-relaxed">
              15 years on, each year the BMM growing in stature, keeping the community healthy,
              fixing the roads, helping the needy, showing the world what wonders a small team of
              rotarians can achieve…
            </p>
          </div>
        </div>
        <div className="relative group cursor-pointer">
          <div
            className="aspect-video rounded-2xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${COLORS.dark} 0%, rgba(245,98,33,0.2) 100%)`,
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
              style={{ backgroundColor: COLORS.orange }}
            >
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <p
            className="text-center text-white/60 mt-4 text-sm"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Play Video
          </p>
        </div>
      </div>
    </section>
  );
}

function GearUpBanner() {
  return (
    <section
      className="py-16 px-6 text-center"
      style={{
        background: `linear-gradient(90deg, ${COLORS.orange} 0%, #d4451a 100%)`,
      }}
    >
      <h2
        className="text-3xl md:text-5xl text-white max-w-5xl mx-auto leading-snug"
        style={{ fontFamily: 'Grechen Fuemen, cursive' }}
      >
        Gear Up Now For Another Loooo….Oong Night On The 6th. (Dec.) At The 18th. Edition Of BMM
        2025
      </h2>
    </section>
  );
}

function BMMStory() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: COLORS.dark }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl text-white mb-10"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          The BMM Story
        </h2>
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ fontFamily: 'Archivo, sans-serif', color: COLORS.purple }}
        >
          The Bengaluru Midnight Marathon represents the vision, vigour and vibrance of the beloved
          and inspiring city. The Bengaluru Midnight Marathon (BMM) was founded by Rotary Bangalore
          IT Corridor in 2007 to support various deserving charities across India. With its unique
          chosen hours, it is Asia's only Midnight Marathon. The concept has captivated people
          resulting in a growing number of participants, from over 20 countries, and 23 States in
          India, each year.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="py-16 px-6" style={{ backgroundColor: COLORS.footer }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h6
              className="text-2xl text-white mb-4"
              style={{ fontFamily: 'Grechen Fuemen, cursive' }}
            >
              BMM
            </h6>
            <p
              className="text-sm text-white/60 leading-relaxed mb-6"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              Organised by Rotary Bengaluru IT Corridor (RBITC), the Bengaluru Midnight Marathon is
              India's only midnight marathon and the most sought after flagship fund-raising event
              with scores of runners participating from over 20 countries to support the cause.
            </p>
            <ul className="space-y-2 text-sm text-white/60" style={{ fontFamily: 'Archivo, sans-serif' }}>
              <li>Location : KTPO, Whitefield</li>
              <li>+91 9108356417</li>
              <li>info@midnightmarathon.in</li>
            </ul>
          </div>
          <div>
            <h6
              className="text-lg text-white mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Site Link
            </h6>
            <ul className="space-y-2">
              {SITE_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                    style={{ fontFamily: 'Archivo, sans-serif' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg"
                  style={{
                    backgroundColor: COLORS.instagram,
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                />
              ))}
              <div
                className="aspect-square rounded-lg flex items-center justify-center text-white/40 text-xs"
                style={{
                  backgroundColor: COLORS.instagram,
                  border: '1px solid rgba(255,255,255,0.05)',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Load More
              </div>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-4 text-sm text-white/60 hover:text-white transition-colors"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
      <div
        className="py-6 px-6 border-t border-white/10"
        style={{ backgroundColor: COLORS.dark }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h2
              className="text-lg text-white"
              style={{ fontFamily: 'Grechen Fuemen, cursive' }}
            >
              Bengaluru Midnight Marathon
            </h2>
            <p className="text-xs text-white/40" style={{ fontFamily: 'Archivo, sans-serif' }}>
              Copyright © 2023, Bengaluru Midnight Marathon
            </p>
          </div>
          <div className="flex gap-4">
            {['Twitter', 'Facebook', 'Youtube', 'Instagram'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors text-xs"
                style={{ border: '1px solid rgba(255,255,255,0.2)' }}
              >
                {social[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function V6Home() {
  return (
    <div style={{ backgroundColor: COLORS.dark }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600&family=Grechen+Fuemen&family=Poppins:wght@400;500;600;700&display=swap');
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <Nav />
      <Hero />
      <PartnersSection />
      <WhatANight />
      <GearUpBanner />
      <BMMStory />
      <Footer />
    </div>
  );
}
