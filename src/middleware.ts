// src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const goneUrls = [
  '/above-ground-tank',
  '/blog',
  '/canopy-imaging-solutions',
  '/careers',
  '/environmental-compliance-solutions',
  '/gas-station-construction',
  '/gas-station-electrical',
  '/gas-station-financing',
  '/gas-station-pump-advertising',
  '/home',
  '/resources',
  '/services/compliance',
  '/services/construction',
  '/services/financing',
  '/services/gas-station-pump-advertising',
  '/services/imaging-and-canopies',
  '/services/link',
  '/services/renovation',
  '/underground-tanks',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (goneUrls.includes(pathname)) {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Page Gone</title>
        <style>
          body {
              font-family: 'Metropolis', sans-serif;
              background: #f8f9fa;
              color: #333;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: 100vh;
              margin: 0;
              text-align: center;
            }
          h1 {
            font-size: 5rem;
            margin-bottom: 1rem;
            color: #c62931;
          }
          p {
            font-size: 2rem;
            margin-bottom: 2rem;
            padding: 4px;
          }
          a {
            display: inline-block;
            font-size: 1.50rem;
            padding: 0.75rem 1.5rem;
            background: #c62931;
            color: white;
            text-decoration: none;
            border-radius: 0.5rem;
            transition: background 0.3s;
          }
          a:hover {
            background: #0056b3;
          }
        </style>
      </head>
      <body>
        <h1>410 Gone</h1>
        <p>Sorry, this page is permanently removed.</p>
      </body>
      </html>
    `
    return new NextResponse(html, {
      status: 410,
      headers: {
        'Content-Type': 'text/html',
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/above-ground-tank',
    '/blog',
    '/canopy-imaging-solutions',
    '/careers',
    '/environmental-compliance-solutions',
    '/gas-station-construction',
    '/gas-station-electrical',
    '/gas-station-financing',
    '/gas-station-pump-advertising',
    '/home',
    '/resources',
    '/services/compliance',
    '/services/construction',
    '/services/financing',
    '/services/gas-station-pump-advertising',
    '/services/imaging-and-canopies',
    '/services/link',
    '/services/renovation',
    '/underground-tanks',
  ],
}
