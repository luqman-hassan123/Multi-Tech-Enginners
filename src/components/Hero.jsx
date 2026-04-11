import { useState, useEffect, useRef } from "react";

import image1 from "../assets/projectImages/hero/const1.jpeg";
import image2 from "../assets/projectImages/hero/elecT1.jpg";
import image3 from "../assets/projectImages/hero/civil1.jpg";
import image4 from "../assets/projectImages/hero/HVAC.jpg";

const IMAGES = [
  {
    url: image1,
    label: "Construction Excellence",
    icon: "🏗️",
  },
  {
    url: image2,
    label: "Electrical Engineering",
    icon: "⚡",
  },
  {
    url: image3,
    label: "Civil Infrastructure",
    icon: "🌉",
  },
  {
    url: image4,
    label: "HVAC & Mechanical",
    icon: "⚙️",
  },
];

const AUTO_INTERVAL = 4500;

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; }

  .hero-section {
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh;
    background: linear-gradient(160deg, #f0f6ff 0%, #f8faff 40%, #ffffff 70%, #f0f9ff 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 6rem;
    padding-bottom: 4rem;
    position: relative;
    overflow: hidden;
  }

  /* BG orbs */
  .hero-bg-orb1 {
    position: absolute; top: -140px; right: -80px;
    width: 600px; height: 600px; border-radius: 50%;
    background: radial-gradient(circle, rgba(26,86,219,0.08) 0%, transparent 65%);
    pointer-events: none;
    animation: orbPulse 8s ease-in-out infinite;
  }
  .hero-bg-orb2 {
    position: absolute; bottom: -120px; left: -100px;
    width: 500px; height: 500px; border-radius: 50%;
    background: radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%);
    pointer-events: none;
    animation: orbPulse 11s ease-in-out 2s infinite;
  }
  @keyframes orbPulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.18); opacity: 0.65; }
  }

  /* Dot grid */
  .hero-grid {
    position: absolute; inset: 0;
    background-image: radial-gradient(rgba(26,86,219,0.07) 1px, transparent 1px);
    background-size: 36px 36px;
    pointer-events: none; opacity: 0.6;
  }

  /* Layout */
  .hero-layout {
    max-width: 1300px; width: 100%; margin: 0 auto;
    padding: 0 2rem;
    display: flex; align-items: center; gap: 4rem;
    position: relative; z-index: 2;
  }

  /* ── LEFT ── */
  .hero-left { flex: 1; min-width: 0; }

  /* Tag */
  .hero-tag {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 6px 20px; border-radius: 999px;
    background: rgba(26,86,219,0.07);
    color: #1e3a5f;
    font-size: 0.70rem; font-weight: 700;
    letter-spacing: 0.14em; text-transform: uppercase;
    margin-bottom: 24px;
    border: 1px solid rgba(26,86,219,0.13);
    animation: fadeSlideUp 0.7s ease both;
    position: relative; overflow: hidden;
    transition: all 0.3s ease;
  }
  .hero-tag:hover {
    background: rgba(26,86,219,0.12);
    border-color: rgba(26,86,219,0.25);
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(26,86,219,0.12);
  }
  .hero-tag::before {
    content: '';
    position: absolute; top: 0; left: -100%; width: 60%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent);
    animation: shimmerTag 3.5s ease-in-out 1.2s infinite;
  }
  @keyframes shimmerTag { 0% { left: -100%; } 100% { left: 200%; } }

  .tag-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: #1a56db;
    box-shadow: 0 0 7px rgba(26,86,219,0.6);
    animation: blink 2s ease-in-out infinite;
    flex-shrink: 0;
  }
  @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.25; } }

  /* Heading */
  .hero-heading {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 5vw, 4rem);
    font-weight: 900; line-height: 1.1;
    margin: 0 0 6px; color: #0a1f3c;
    letter-spacing: -0.02em;
    animation: fadeSlideUp 0.7s ease 0.12s both;
  }
  .hero-heading-accent {
    display: block;
    background: linear-gradient(100deg, #1a56db 0%, #0ea5e9 55%, #38bdf8 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    background-size: 200% auto;
    animation: gradientShift 5s linear infinite;
    filter: drop-shadow(0 2px 10px rgba(14,165,233,0.22));
  }
  @keyframes gradientShift { 0% { background-position: 0% center; } 100% { background-position: 200% center; } }

  /* Divider */
  .hero-divider {
    display: flex; align-items: center; gap: 12px;
    margin: 22px 0;
    animation: fadeSlideUp 0.7s ease 0.24s both;
  }
  .hero-divider-line { height: 1px; width: 56px; background: linear-gradient(90deg, #1a56db, transparent); }
  .hero-divider-diamond {
    width: 6px; height: 6px; background: #1a56db;
    transform: rotate(45deg); box-shadow: 0 0 8px rgba(26,86,219,0.5);
    animation: diamondPulse 2.5s ease-in-out infinite;
  }
  @keyframes diamondPulse {
    0%, 100% { box-shadow: 0 0 8px rgba(26,86,219,0.5); }
    50% { box-shadow: 0 0 16px rgba(26,86,219,0.9), 0 0 24px rgba(14,165,233,0.4); }
  }
  .hero-divider-line2 { height: 1px; flex: 1; background: linear-gradient(90deg, rgba(26,86,219,0.25), transparent); }

  /* Desc */
  .hero-desc {
    font-size: 1rem; color: #475569; line-height: 1.85;
    margin: 0 0 28px;
    animation: fadeSlideUp 0.7s ease 0.33s both;
  }
  .hero-desc strong { color: #1a56db; font-weight: 700; }

  /* Country badges */
  .badge-row {
    display: flex; gap: 10px; margin-bottom: 28px; flex-wrap: wrap;
    animation: fadeSlideUp 0.7s ease 0.42s both;
  }
  .country-badge {
    display: flex; align-items: center; gap: 10px;
    padding: 11px 20px; background: #ffffff;
    border: 1px solid rgba(0,0,0,0.08); border-radius: 14px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06), 0 1px 0 #fff inset;
    transition: all 0.3s cubic-bezier(0.23,1,0.32,1); cursor: default;
    position: relative; overflow: hidden;
  }
  .country-badge::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(26,86,219,0.06), rgba(14,165,233,0.04));
    opacity: 0; transition: opacity 0.3s ease;
  }
  .country-badge::after {
    content: '';
    position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, #1a56db, #38bdf8);
    transform: scaleX(0); transform-origin: left;
    transition: transform 0.35s cubic-bezier(0.23,1,0.32,1);
  }
  .country-badge:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(26,86,219,0.15), 0 1px 0 #fff inset;
    border-color: rgba(26,86,219,0.2);
  }
  .country-badge:hover::before { opacity: 1; }
  .country-badge:hover::after { transform: scaleX(1); }
  .country-badge:hover .badge-flag { transform: scale(1.2) rotate(-5deg); }
  .badge-flag { font-size: 1.45rem; transition: transform 0.3s cubic-bezier(0.23,1,0.32,1); display: inline-block; }
  .badge-name { color: #0a1f3c; font-weight: 700; font-size: 0.88rem; }
  .badge-detail { color: #64748b; font-size: 0.70rem; margin-top: 2px; font-weight: 500; }

  /* Stats */
  .stats-card {
    display: flex; background: #ffffff;
    border: 1px solid rgba(0,0,0,0.07); border-radius: 20px; overflow: hidden;
    box-shadow: 0 4px 6px rgba(0,0,0,0.04), 0 12px 40px rgba(0,0,0,0.07), 0 1px 0 #fff inset;
    animation: fadeSlideUp 0.7s ease 0.52s both;
    position: relative;
    transition: box-shadow 0.3s ease;
  }
  .stats-card:hover {
    box-shadow: 0 8px 12px rgba(0,0,0,0.06), 0 20px 60px rgba(26,86,219,0.1), 0 1px 0 #fff inset;
  }
  .stats-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, transparent, #1a56db, #0ea5e9, transparent);
    opacity: 0.6;
  }
  .stat-item {
    flex: 1; text-align: center; padding: 22px 12px;
    position: relative; transition: background 0.25s ease; cursor: default;
  }
  .stat-item:not(:last-child)::after {
    content: ''; position: absolute; right: 0; top: 20%; bottom: 20%;
    width: 1px; background: rgba(0,0,0,0.07);
  }
  .stat-item:hover { background: #f0f6ff; }
  .stat-number {
    font-family: 'Playfair Display', serif;
    font-size: 1.9rem; font-weight: 900;
    background: linear-gradient(135deg, #1a56db, #0ea5e9);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    line-height: 1; display: block;
    transition: transform 0.3s cubic-bezier(0.23,1,0.32,1);
    filter: drop-shadow(0 2px 6px rgba(14,165,233,0.2));
  }
  .stat-item:hover .stat-number {
    transform: scale(1.12);
    filter: drop-shadow(0 4px 14px rgba(14,165,233,0.45));
  }
  .stat-label {
    font-size: 0.66rem; color: #94a3b8; margin-top: 7px;
    letter-spacing: 0.07em; text-transform: uppercase; font-weight: 600; display: block;
    transition: color 0.25s ease;
  }
  .stat-item:hover .stat-label { color: #64748b; }

  /* ── RIGHT ── */
  .right-panel { position: relative; flex-shrink: 0; }

  /* Glow ring */
  .hero-glow-ring {
    position: absolute; top: -18px; left: -18px; right: -18px; bottom: -18px;
    border-radius: 34px;
    background: conic-gradient(from 0deg, #1a56db, #38bdf8, #0ea5e9, #1a56db, #38bdf8);
    opacity: 0.12; filter: blur(18px);
    animation: rotateConic 9s linear infinite;
    pointer-events: none;
    transition: opacity 0.4s ease;
  }
  .right-panel:hover .hero-glow-ring { opacity: 0.22; }
  @keyframes rotateConic { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

  /* Image frame */
  .image-frame {
    width: 100%; aspect-ratio: 3/4; border-radius: 28px; overflow: hidden;
    position: relative; background: #e2e8f0;
    box-shadow:
      0 2px 0 rgba(255,255,255,0.9) inset,
      0 -2px 0 rgba(0,0,0,0.08) inset,
      8px 24px 60px rgba(0,0,0,0.14),
      20px 40px 80px rgba(26,86,219,0.10),
      -4px 0 30px rgba(0,0,0,0.06);
    transform: perspective(900px) rotateY(-6deg) rotateX(2deg);
    transition: transform 0.55s cubic-bezier(0.23,1,0.32,1), box-shadow 0.55s ease;
    animation: frameReveal 1s ease 0.2s both;
    border: 1px solid rgba(255,255,255,0.7);
  }
  @keyframes frameReveal {
    from { opacity: 0; transform: perspective(900px) rotateY(-16deg) rotateX(4deg) translateY(28px); }
    to   { opacity: 1; transform: perspective(900px) rotateY(-6deg) rotateX(2deg); }
  }
  .image-frame:hover {
    transform: perspective(900px) rotateY(-2deg) rotateX(1deg) translateY(-8px);
    box-shadow:
      0 2px 0 rgba(255,255,255,0.9) inset,
      0 -2px 0 rgba(0,0,0,0.08) inset,
      14px 40px 90px rgba(0,0,0,0.18),
      28px 56px 110px rgba(26,86,219,0.16);
  }

  /* Slides */
  .slide { position: absolute; inset: 0; background-size: cover; background-position: center; opacity: 0; transition: opacity 0.8s ease; }
  .slide.active { opacity: 1; }

  /* Image zoom on active */
  .slide.active { animation: imgZoom 5s ease forwards; }
  @keyframes imgZoom { from { transform: scale(1); } to { transform: scale(1.04); } }

  .slide-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(10,31,60,0.65) 0%, rgba(10,31,60,0.1) 45%, transparent 70%);
    pointer-events: none; z-index: 2;
  }

  /* corner accents */
  .corner { position: absolute; width: 20px; height: 20px; z-index: 5; pointer-events: none; transition: all 0.4s ease; }
  .corner-tl { top: 12px; left: 12px; border-top: 2px solid rgba(26,86,219,0.7); border-left: 2px solid rgba(26,86,219,0.7); }
  .corner-tr { top: 12px; right: 12px; border-top: 2px solid rgba(26,86,219,0.7); border-right: 2px solid rgba(26,86,219,0.7); }
  .corner-bl { bottom: 12px; left: 12px; border-bottom: 2px solid rgba(26,86,219,0.7); border-left: 2px solid rgba(26,86,219,0.7); }
  .corner-br { bottom: 12px; right: 12px; border-bottom: 2px solid rgba(26,86,219,0.7); border-right: 2px solid rgba(26,86,219,0.7); }

  .image-frame:hover .corner-tl { top: 8px; left: 8px; border-color: #1a56db; width: 26px; height: 26px; }
  .image-frame:hover .corner-tr { top: 8px; right: 8px; border-color: #1a56db; width: 26px; height: 26px; }
  .image-frame:hover .corner-bl { bottom: 8px; left: 8px; border-color: #1a56db; width: 26px; height: 26px; }
  .image-frame:hover .corner-br { bottom: 8px; right: 8px; border-color: #1a56db; width: 26px; height: 26px; }

  /* Label */
  .slide-label {
    position: absolute; bottom: 0; left: 0; right: 0;
    padding: 44px 20px 20px; z-index: 4; pointer-events: none;
    transform: translateY(4px); transition: transform 0.4s ease;
  }
  .image-frame:hover .slide-label { transform: translateY(0); }
  .slide-label-inner { display: flex; align-items: center; gap: 8px; }
  .slide-label-icon { font-size: 1rem; }
  .slide-label-text { color: #fff; font-size: 0.82rem; font-weight: 600; letter-spacing: 0.04em; }

  /* dot nav */
  .dot-nav { position: absolute; right: 16px; bottom: 50%; transform: translateY(50%); display: flex; flex-direction: column; gap: 7px; z-index: 10; }
  .dot {
    width: 6px; border-radius: 999px; background: rgba(255,255,255,0.4);
    cursor: pointer; transition: all 0.35s ease; border: none; padding: 0; height: 6px;
  }
  .dot:hover { background: rgba(255,255,255,0.8); transform: scaleX(1.4); }
  .dot.active { height: 22px; background: #fff; box-shadow: 0 0 8px rgba(255,255,255,0.7); }

  /* arrow buttons */
  .arrow-btn {
    position: absolute; bottom: 18px;
    background: rgba(255,255,255,0.92); border: 1px solid rgba(0,0,0,0.08);
    border-radius: 50%; width: 38px; height: 38px;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; box-shadow: 0 4px 14px rgba(0,0,0,0.12);
    font-size: 1rem; transition: all 0.25s cubic-bezier(0.23,1,0.32,1); z-index: 20; color: #1a56db;
  }
  .arrow-btn:hover {
    transform: scale(1.15);
    background: #1a56db; color: #fff;
    box-shadow: 0 8px 24px rgba(26,86,219,0.35);
    border-color: #1a56db;
  }
  .arrow-btn:active { transform: scale(0.95); }
  .arrow-btn.prev { left: 18px; }
  .arrow-btn.next { left: 64px; }

  /* progress bar */
  .progress-bar {
    position: absolute; bottom: 0; left: 0; height: 3px;
    background: linear-gradient(90deg, #1a56db, #38bdf8);
    border-radius: 0 0 0 28px; z-index: 10;
    transition: width 0.1s linear;
    box-shadow: 0 0 8px rgba(26,86,219,0.4);
  }

  /* floating card bottom */
  .float-card-bottom {
    position: absolute; bottom: 36px; left: -44px;
    background: #ffffff; border: 1px solid rgba(26,86,219,0.12);
    border-radius: 16px; padding: 13px 18px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,1) inset;
    display: flex; align-items: center; gap: 12px; min-width: 196px;
    z-index: 10;
    animation: floatY 4.5s ease-in-out infinite;
    transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
    cursor: default;
  }
  .float-card-bottom:hover {
    box-shadow: 0 16px 48px rgba(26,86,219,0.18), 0 1px 0 rgba(255,255,255,1) inset;
    border-color: rgba(26,86,219,0.28);
    animation-play-state: paused;
    transform: translateY(-4px) !important;
  }
  @keyframes floatY { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-9px); } }

  .float-icon {
    width: 38px; height: 38px; border-radius: 10px;
    background: linear-gradient(135deg, #1a56db, #0ea5e9);
    display: flex; align-items: center; justify-content: center;
    font-size: 1rem; flex-shrink: 0; color: #fff;
    box-shadow: 0 4px 12px rgba(26,86,219,0.32);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .float-card-bottom:hover .float-icon {
    transform: scale(1.1) rotate(-5deg);
    box-shadow: 0 6px 20px rgba(26,86,219,0.45);
  }
  .float-title { color: #0a1f3c; font-weight: 700; font-size: 0.88rem; line-height: 1; }
  .float-sub { color: #64748b; font-size: 0.70rem; margin-top: 4px; font-weight: 500; }

  @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }

  @media (max-width: 860px) {
    .hero-layout { flex-direction: column !important; }
    .right-panel { width: 100% !important; max-width: 420px; margin: 0 auto; }
    .image-frame { aspect-ratio: 4/3 !important; transform: none !important; }
    .float-card-bottom { left: 12px !important; bottom: -18px !important; }
  }
`;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const progRef = useRef(null);

  const startTimer = () => {
    let startTime = Date.now();
    clearInterval(timerRef.current);
    clearInterval(progRef.current);
    progRef.current = setInterval(() => {
      setProgress(Math.min(((Date.now() - startTime) / AUTO_INTERVAL) * 100, 100));
    }, 40);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % IMAGES.length);
      startTime = Date.now();
      setProgress(0);
    }, AUTO_INTERVAL);
  };

  useEffect(() => {
    startTimer();
    return () => { clearInterval(timerRef.current); clearInterval(progRef.current); };
  }, []);

  const goTo = (i) => { setCurrent(i); setProgress(0); startTimer(); };
  const prev = () => goTo((current - 1 + IMAGES.length) % IMAGES.length);
  const next = () => goTo((current + 1) % IMAGES.length);

  return (
    <>
      <style>{styles}</style>
      <section className="hero-section" id="about">

        <div className="hero-bg-orb1" />
        <div className="hero-bg-orb2" />
        <div className="hero-grid" />

        <div className="hero-layout">

          {/* LEFT */}
          <div className="hero-left">
            <div className="hero-tag">
              <span className="tag-dot" />
              ✦ Engineering Excellence Since 2000 ✦
            </div>

            <h2 className="hero-heading">
              Building a Better Future
              <span className="hero-heading-accent">Across Two Nations</span>
            </h2>

            <div className="hero-divider">
              <div className="hero-divider-line" />
              <div className="hero-divider-diamond" />
              <div className="hero-divider-line2" />
            </div>

            <p className="hero-desc">
              Multi Tech Engineers delivers high-quality electrical, mechanical,
              HVAC, and civil engineering solutions for public and private sector
              projects across{" "}
              <strong>Pakistan</strong> and <strong>Afghanistan</strong>.
            </p>

            <div className="badge-row">
              {[
                { flag: "🇵🇰", name: "Pakistan", detail: "Headquarters" },
                { flag: "🇦🇫", name: "Afghanistan", detail: "Regional Operations" },
              ].map((c, i) => (
                <div key={i} className="country-badge">
                  <span className="badge-flag">{c.flag}</span>
                  <div>
                    <div className="badge-name">{c.name}</div>
                    <div className="badge-detail">{c.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="stats-card">
              {[
                { number: "25+", label: "Years Experience" },
                { number: "80+", label: "Projects Delivered" },
                { number: "2",   label: "Countries" },
              ].map((s, i) => (
                <div key={i} className="stat-item">
                  <span className="stat-number">{s.number}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="right-panel" style={{ width: "40%" }}>

            <div className="hero-glow-ring" />

            <div className="image-frame">
              {IMAGES.map((img, i) => (
                <div
                  key={i}
                  className={`slide ${i === current ? "active" : ""}`}
                  style={{ backgroundImage: `url(${img.url})` }}
                />
              ))}
              <div className="slide-overlay" />

              <div className="corner corner-tl" />
              <div className="corner corner-tr" />
              <div className="corner corner-bl" />
              <div className="corner corner-br" />

              <div className="slide-label">
                <div className="slide-label-inner">
                  <span className="slide-label-icon">{IMAGES[current].icon}</span>
                  <span className="slide-label-text">{IMAGES[current].label}</span>
                </div>
              </div>

              <div className="dot-nav">
                {IMAGES.map((_, i) => (
                  <button key={i} className={`dot ${i === current ? "active" : ""}`} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`} />
                ))}
              </div>
              <button className="arrow-btn prev" onClick={prev} aria-label="Previous">‹</button>
              <button className="arrow-btn next" onClick={next} aria-label="Next">›</button>
              <div className="progress-bar" style={{ width: `${progress}%` }} />
            </div>

            <div className="float-card-bottom">
              <div className="float-icon">✅</div>
              <div>
                <div className="float-title">Trusted Since 2000</div>
                <div className="float-sub">Pakistan & Afghanistan</div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}