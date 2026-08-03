// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const redirects: Record<string, string> = {
  "/about": "/about-us",
  "/above-ground-tank": "/services/environmental-compliance-solutions",
  "/blog": "/blogs",
  "/canopy-imaging-solutions": "/services/canopy-imaging-solutions",
  "/careers": "/petroleum-companies-jobs",
  "/contact": "/contact-us",
  "/environmental-compliance-solutions":
    "/services/environmental-compliance-solutions",
  "/gas-station-construction": "/services/gas-station-construction",
  "/gas-station-electrical": "/services/gas-station-electrical",
  "/gas-station-financing": "/services/gas-station-financing",
  "/gas-station-pump-advertising": "/services",
  "/home": "/",
  "/oil-and-water-separator": "/services/environmental-compliance-solutions",
  "/resources": "/blogs",
  "/services/compliance": "/services/environmental-compliance-solutions",
  "/services/construction": "/services/gas-station-construction",
  "/services/financing": "/services/gas-station-financing",
  "/services/gas-station-pump-advertising": "/services",
  "/services/imaging-and-canopies": "/services/canopy-imaging-solutions",
  "/services/link": "/services",
  "/services/renovation": "/services/gas-station-construction",
  "/team": "/our-team",
  "/underground-tanks": "/services/environmental-compliance-solutions",
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const target = redirects[pathname];

  if (target) {
    const url = request.nextUrl.clone();
    url.pathname = target;
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/about",
    "/above-ground-tank",
    "/blog",
    "/canopy-imaging-solutions",
    "/careers",
    "/contact",
    "/environmental-compliance-solutions",
    "/gas-station-construction",
    "/gas-station-electrical",
    "/gas-station-financing",
    "/gas-station-pump-advertising",
    "/home",
    "/oil-and-water-separator",
    "/resources",
    "/services/compliance",
    "/services/construction",
    "/services/financing",
    "/services/gas-station-pump-advertising",
    "/services/imaging-and-canopies",
    "/services/link",
    "/services/renovation",
    "/team",
    "/underground-tanks",
  ],
};
