// src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const goneUrls = [
  '/about',
  '/above-ground-tank',
  '/blog',
  '/canopy-imaging-solutions',
  '/careers',
  '/contact',
  '/environmental-compliance-solutions',
  '/gas-station-construction',
  '/gas-station-electrical',
  '/gas-station-financing',
  '/gas-station-pump-advertising',
  '/home',
  '/oil-and-water-separator',
  '/resources',
  '/services/compliance',
  '/services/construction',
  '/services/financing',
  '/services/gas-station-pump-advertising',
  '/services/imaging-and-canopies',
  '/services/link',
  '/services/renovation',
  '/team',
  '/underground-tanks',
]

const goneHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>410 Gone — The APEC Group</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { width: 100%; height: 100%; }
    body {
      font-family: 'Metropolis', system-ui, -apple-system, sans-serif;
      background: #0a0a0a;
      color: #fff;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      position: relative;
      overflow: hidden;
      margin: 0;
      padding: 0;
      width: 100%;
    }
    /* Grid pattern */
    body::before {
      content: '';
      position: absolute;
      inset: 0;
      opacity: 0.025;
      background-image:
        linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px);
      background-size: 60px 60px;
      pointer-events: none;
    }
    /* Ambient glow */
    .glow {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: min(500px, 100vw); height: 300px;
      background: #c62931;
      opacity: 0.08;
      filter: blur(120px);
      border-radius: 50%;
      pointer-events: none;
    }
    .content {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1.5rem;
      width: 100%;
      max-width: 32rem;
      margin: 0 auto;
    }
    .logo {
      width: auto;
      height: clamp(48px, 10vw, 72px);
      margin-bottom: 2rem;
      opacity: 0.9;
    }
    .label {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.3);
      margin-bottom: 1rem;
      padding-left: 0.3em;
    }
    h1 {
      font-size: clamp(6rem, 15vw, 9rem);
      font-weight: 900;
      color: #c62931;
      line-height: 1;
      margin: 0;
    }
    .message {
      font-size: clamp(0.9375rem, 2.5vw, 1.125rem);
      color: rgba(255,255,255,0.5);
      margin-top: 1.25rem;
      max-width: 100%;
      line-height: 1.6;
      padding: 0 0.5rem;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 2rem;
      padding: 0.75rem 2rem;
      background: #c62931;
      color: #fff;
      font-size: 0.875rem;
      font-weight: 500;
      letter-spacing: 0.025em;
      border: none;
      border-radius: 9999px;
      text-decoration: none;
      cursor: pointer;
      transition: background 0.3s, box-shadow 0.3s;
    }
    .btn:hover {
      background: #a8232a;
      box-shadow: 0 0 24px rgba(198,41,49,0.5);
    }
    /* Top accent line */
    .accent-line {
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, #c62931, transparent);
    }
    @media (max-width: 480px) {
      .label { letter-spacing: 0.2em; font-size: 10px; }
      .btn { padding: 0.75rem 1.5rem; font-size: 0.8125rem; }
    }
  </style>
</head>
<body>
  <div class="accent-line"></div>
  <div class="glow"></div>
  <div class="content">
    <img src="https://www.theapecgroup.com/logos/APEC.webp" alt="APEC Group" class="logo" />
    <p class="label">Page Permanently Removed</p>
    <h1>410</h1>
    <p class="message">This page has been permanently removed and is no longer available.</p>
    <a href="https://www.theapecgroup.com/" class="btn">Return to Homepage</a>
  </div>
</body>
</html>
`

export function middleware(request: NextRequest) {
  if (goneUrls.includes(request.nextUrl.pathname)) {
    return new NextResponse(goneHtml, {
      status: 410,
      headers: { 'Content-Type': 'text/html' },
    })
  }
  return NextResponse.next()
}

export const config = {
  matcher: goneUrls,
}
