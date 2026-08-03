# Codebase Audit Report: The APEC Group (theapecgroup.com)

**Date:** July 2026  
**Target Application:** Production B2B / Marketing Website (Next.js App Router)  
**Scope:** Repository Reconnaissance, Security & Data Handling, Performance & Core Web Vitals, SEO & Structured Data, Accessibility (WCAG 2.1 AA), Code Quality & Architecture, Legal & Compliance Basics.

---

## 1. Executive Summary

- **Severe Bandwidth & Core Web Vitals Bottlenecks:** A single, unoptimized **20.8 MB animated GIF** is loaded directly on the homepage (`/logos/One-Stop-Shop.gif`), causing extreme network congestion, prolonged Largest Contentful Paint (LCP), and high cellular data consumption for mobile visitors. An unused **15.2 MB video file** also bloating the repository bundle should be removed.

- **Destructive SEO Link Equity Loss via 410 Middleware:** Next.js middleware is currently programmed to serve hardcoded inline `410 Gone` HTML responses for legacy URLs (such as `/services/construction` and `/services/compliance`). Rather than permanently discarding these legacy pages, they should receive **301 redirects** to their modernized equivalents to preserve domain authority and existing backlinks.

(FIXED) - **Deceptive Form Error Handling & Data Loss Vulnerability:** The job application recruiting form explicitly triggers a false success message (`"Thank you! Your application has been sent successfully."`) whenever an underlying network exception, CORS failure, or Formspree error occurs. This creates silent data loss where candidates believe their applications were received when they actually failed.

(FIXED) - **Unprotected Lead Channels Open to Automated Spam:** Both the main contact form and careers application form submit directly to client-side Formspree endpoints without CAPTCHA validation, bot-detection Turnstile, or simple honeypot protection, leaving sales and recruitment funnels exposed to automated bot spam and quota exhaustion.

(FIXED) - **Critical Accessibility & ADA Exposure in Lead Funnels:** Contact and job application forms entirely lack programmatic `<label>` elements or screen reader ARIA attributes, relying solely on placeholder text with low contrast (30% opacity black, ~2.2:1 ratio). This violates WCAG 2.1 AA baselines and introduces ADA Title III digital accessibility exposure on high-converting public lead pages.

(FIXED) - **Missing Social Sharing Graphs & Broken Schema Markup:** The site contains zero Open Graph or Twitter card metadata, meaning links shared across LinkedIn, messaging apps, or email display without visual preview cards. Additionally, schema structured data references non-existent logo URLs (404 errors) and formats multi-city office addresses incorrectly.

(FIXED) - **Non-Compliant Analytics & Privacy Practices:** Google Analytics and Vercel Analytics scripts execute unconditionally for all visitors without a disclosure notice, cookie banner, or link to a published Privacy Policy on the domain—violating general consumer privacy best practices and Google Analytics vendor Terms of Service.

---

## 2. Findings Table

| Severity     | Category    | Issue                                                                                                   | File / Location                   | Recommended Fix                                                                                                  |
| :----------- | :---------- | :------------------------------------------------------------------------------------------------------ | :-------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| **Critical** | Performance | Unoptimized **20.8 MB GIF** loaded on homepage via bypassed Next.js Image Optimization (`unoptimized`). | `src/app/home/sections/hero3.tsx` | Replace GIF with an optimized looping WebM/MP4 video or SVG/CSS animation (< 300 KB). Remove `unoptimized` flag. |

| **Critical** | SEO & Link Equity | Middleware forcefully returns hardcoded `410 Gone` responses for legacy service routes instead of redirecting. | `src/middleware.ts` | Replace `410 Gone` handling with proper `301 Moved Permanently` route mapping to modern service URLs in `next.config.ts`. |

| **High** | Security & UX | Recruiting form catch block sets submission state to `true` on network/API errors, falsely reporting success on failure. | `src/components/careersForm.tsx` (lines 81–83) | Remove `setSubmitted(true)` inside the `catch` block. Present accurate, actionable user error messaging on failure. |

| **High** | Security & Bot Spam | Public Formspree endpoints exposed client-side without reCAPTCHA, Cloudflare Turnstile, or honeypot fields. | `src/components/contactForm.tsx`<br>`src/components/careersForm.tsx` | Integrate Cloudflare Turnstile or Formspree custom honeypot input (`_gotcha`) and implement client-side file size validation. |

| **High** | Legal & Compliance | Total absence of a public Privacy Policy, Terms of Service link, or analytical cookie consent mechanism. | `src/app/layout.tsx`<br>`src/components/footer.tsx` | Create and publish a robust Privacy Policy and terms page; disclose third-party tracking (GA/Vercel) and embed footer links. |

| **High** | Accessibility | Form input fields lack programmatic labels and rely solely on low-contrast placeholders (~2.2:1 ratio). | `src/components/contactForm.tsx`<br>`src/components/careersForm.tsx` | Add explicit `<label>` tags or descriptive `aria-label` attributes. Increase placeholder opacity to reach >= 4.5:1 contrast. |

| **Medium** | Performance & Bundle | Render-blocking sequential `@import` of 8 Metropolis font weights in global CSS; 15.2 MB of dead unused media in repository. | `src/styles/globals.css`<br>`public/videos/Main_v2.mp4` | Migrate font loading to Next.js `next/font/local` or `next/font/google` for zero layout shifts. Delete unused `Main_v2.mp4`. |

| **Medium** | SEO & Structured Data | LocalBusiness & Organization schema reference 404 image URLs, conflate dual office addresses, and run inside `"use client"` scopes. | `src/components/schema/HomeSchema.tsx`<br>`src/components/schema/OrganizationSchema.tsx` | Point schema logos to valid `/logos/APEC.webp` URLs, split office locations into separate schema branches, and render server-side. |

| **Medium** | SEO & Metadata | Absence of Open Graph (`openGraph`) and Twitter Card sharing metadata across the entire domain. | All `page.tsx` routes & `src/app/layout.tsx` | Define comprehensive fallback Open Graph and Twitter Card image previews and titles in root layout and dynamic route templates. |

| **Medium** | SEO & Architecture | Non-standard API endpoint used for `robots.txt` containing query string blocking (`Disallow: /*?*`) and eCommerce templates. | `src/app/robots.txt/route.ts` | Replace custom API handler with native App Router `src/app/robots.ts`. Remove query string blocking and obsolete eCommerce disallows. |

| **Medium** | Performance | Heavy 14.5 MB background video initiated on mobile devices despite visual container being hidden via CSS (`hidden md:block`). | `src/app/home/sections/hero1.tsx` | Conditionally render the DOM `<video>` tag using client viewport media detection or provide low-bitrate adaptive fallbacks. |

| **Low** | Code Quality | Dual Intersection Observer libraries deployed simultaneously (`framer-motion` and `react-intersection-observer`). | `src/app/home/sections/membership.tsx`<br>`src/app/home/sections/about.tsx` | Standardize entirely on Framer Motion's natively built-in viewport inspection (`whileInView` / `useInView`) to reduce bundle size. |

| **Low** | Code Quality | Repeated inline typography styling (`style={{ fontFamily: "'Georgia', serif" }}`) violating component tokens. | `src/app/home/sections/hero1.tsx`<br>`src/app/home/sections/hero2.tsx` | Consistently assign headings via global Tailwind utilities or design tokens rather than hardcoded inline font-family strings. |

---

## 3. Detailed Findings by Category

### 3.1 RECON (Project Structure & Build Target)

- **Tech Stack & Routing:** Next.js 15.1.11 App Router, React 19, TypeScript 5, Tailwind CSS 3, Framer Motion 12, Lucide React icons.
- **Deployment & Export Architecture:** While the documentation (`README.md`) claims the application is configured as a "Static Export", inspection of `next.config.ts` reveals an empty configuration file without `output: 'export'`. Furthermore, the presence of `src/middleware.ts` dictates server/edge execution requirements (middleware is natively incompatible with static exports). The site deploys to Vercel as a hybrid application leveraging Node serverless execution and Server-Side Rendering (SSR) / Static Site Generation (SSG).
- **External Dependencies:** Forms depend on Formspree external endpoints (`https://formspree.io/f/...`). Google Analytics (G-WXLE69Q1SV) and Google Search Console validation strings are embedded directly within the root application template (`src/app/layout.tsx`).

---

### 3.2 SECURITY & DATA HANDLING AUDIT

#### A. False-Positive Form Submissions (High Risk)

In `src/components/careersForm.tsx`, the error handler explicitly forces submission success upon encountering exceptions during fetch execution:

```tsx
    } catch {
      setSubmitted(true); // Formspree still receives it on CORS issues
    } finally {
      setLoading(false);
    }
```

_Impact:_ If Formspree fails due to rate limits, expired endpoint quotas, network drops, or payload rejections (such as an oversized resume file), the user is falsely reassured that their recruitment application was received. This breaks lead reliability and causes untraceable applicant data loss.

#### B. Unprotected Endpoint Exposure & Spam Vulnerability (High Risk)

Both `src/components/contactForm.tsx` and `src/components/careersForm.tsx` submit directly from client components without automated bot mitigations:

- **Zero Bot Verification:** No reCAPTCHA, Cloudflare Turnstile, or silent honeypot inputs (e.g., `<input type="text" name="_gotcha" style="display:none" />`) exist in either form. Automated scraping bots can easily extract the target Formspree keys (`mqabwyre` and `movljlyj`) and flood internal inbox channels with automated spam.
- **Missing File Size & Type Validation:** The file input in `careersForm.tsx` solely relies on standard HTML `accept=".pdf,.doc,.docx"` attributes without JavaScript-side size verification before transmission. Attempting to attach large documents will trigger silent network rejections without clear user error messaging.

#### C. Absent HTTP Security Headers & Config Hygiene (Info/Medium)

Because `next.config.ts` is empty and no custom Vercel configurations exist, the web application deploys without hardened Content Security Policy (CSP), strict X-Frame-Options, HSTS preload directives, or explicit Referrer-Policy customizations, relying solely on hosting default configurations. _(Note: Requires live network verification to measure exact Vercel response headers)._

---

### 3.3 PERFORMANCE & CORE WEB VITALS AUDIT

#### A. Catastrophic Payload: 20.8 MB Unoptimized Animated GIF (Critical Risk)

In `src/app/home/sections/hero3.tsx`, an unusually large animated graphic is loaded:

```tsx
<Image
  src="/logos/One-Stop-Shop.gif"
  alt="One-Stop-Shop Animated Logo"
  unoptimized
  width={800}
  height={800}
  className="w-4/5 h-4/5 object-contain"
/>
```

_Impact:_ Setting the `unoptimized` flag completely disables Next.js dynamic image compression and sizing. Every homepage visitor downloads an untouched **20,782,200 byte (20.8 MB)** file over network conduits, severely increasing Largest Contentful Paint (LCP) times, exhausting cellular data caps, and generating poor Core Web Vitals audit scores.

#### B. Dead Code & Mobile Bandwidth Drain from Heavy Media (Medium Risk)

- **Hidden Mobile Video Fetching:** In `src/app/home/sections/hero1.tsx`, a **14.5 MB** looping video (`PumpAnimation.mp4`) is wrapped inside a responsive container (`<section className="... hidden md:block">`). Modern mobile browsers continue initiating DOM network fetches for `<video>` elements concealed via CSS `display: none`, wasting significant cellular bandwidth on media that remains entirely invisible to mobile users.
- **Unreferenced Dead Assets:** The filesystem contains `public/videos/Main_v2.mp4` (a **15.2 MB** file) which zero components or stylesheets reference, needlessly inflating repository size and continuous integration bundle downloads.

#### C. Render-Blocking Font Architecture (Medium Risk)

In `src/styles/globals.css`, fonts are loaded using sequential CSS import declarations:

```css
@import "@fontsource/metropolis/index.css";
@import "@fontsource/metropolis/300.css";
/* ... through 900.css */
```

_Impact:_ This pattern generates sequential stylesheet blocking chains and circumvents Next.js App Router's automated zero-layout-shift font optimization (`next/font/local` or `next/font/google`), escalating Cumulative Layout Shift (CLS) risk and delaying page interactive milestones.

---

### 3.4 SEO, STRUCTURED DATA & METADATA AUDIT

#### A. Destructive Link Equity Wipeout via 410 Middleware (Critical Risk)

In `src/middleware.ts`, legacy routes are aggressively mapped to permanent removal statuses:

```ts
const goneUrls = [
  "/services/compliance",
  "/services/construction",
  "/services/financing",
  "/services/imaging-and-canopies",
  /* ... */
];
```

_Impact:_ Returning `410 Gone` with raw HTML strings instructs search engine spiders to immediately drop these indexed URLs and terminate existing external link equity and backlink domain authority. These historical endpoints must be systematically redirected using **301 Moved Permanently** instructions to their contemporary counterparts (e.g., `/services/environmental-compliance-solutions`, `/services/gas-station-construction`).

#### B. Broken Structured Schema Data & 404 Image URLs (Medium Risk)

(FIXED) - **404 Schema Media References:** In `src/components/schema/HomeSchema.tsx` and `OrganizationSchema.tsx`, company logos point to non-existent URLs (`https://www.theapecgroup.com/images/logo.webp` and `/logo.png`). Neither file exists in the repository root or public folders (the accurate path is `/logos/APEC.webp`).
(FIXED) - **Invalid Postal Address Structuring:** In `HomeSchema.tsx`, multiple office locations are illegally combined into a single address string: `"streetAddress": "Main Office - Tucker, GA; Branch Office - Houston, TX"`. This violates schema.org syntax rules and harms Search Console LocalBusiness parsing and maps rankings.
(FIXED) - **Unfavorable Client Component Execution:** Every Schema template is prefixed with `"use client"`. Structured JSON-LD graphs should execute strictly within server components or SSR pipelines to guarantee search indexing crawlers parse structured entities without relying on Javascript runtime evaluation.

(FIXED) #### C. Total Absence of Open Graph & Twitter Social Graphs (Medium Risk)

No route definitions (`src/app/page.tsx`, `src/app/about-us/page.tsx`, etc.) nor the root layout contain Open Graph (`openGraph`) or Twitter Card (`twitter`) object definitions within Next.js `Metadata` exports. High-value B2B proposal links forwarded through LinkedIn, email clients, Slack, or messaging services render without branded title preview graphics or descriptive abstracts.

---

(FIXED) ### 3.5 ACCESSIBILITY (WCAG 2.1 AA BASELINE)

#### A. Absent Programmatic Input Labels & Low-Contrast Placeholders (High Risk)

Across `src/components/contactForm.tsx` and `src/components/careersForm.tsx`, all user inputs lack descriptive `<label>` annotations:

```tsx
<input
  type="text"
  name="name"
  placeholder="Your Name"
  className="... placeholder-[#111]/30"
  required
/>
```

_Impact:_

(FIXED) - **WCAG SC 3.3.2 (Labels or Instructions) & 1.3.1 (Info and Relationships) Violation:** Screen readers and assistive navigation technologies struggle to accurately announce input purposes when programmatic `<label>` associations or explicit `aria-label` attributes are absent. Relying on visual placeholders also impairs cognitive accessibility, as labels vanish the moment an applicant begins typing.
(FIXED) - **WCAG SC 1.4.3 (Contrast Minimum) Violation:** Styling placeholder text at 30% opacity against light cream/white backgrounds yields an effective contrast ratio of roughly **2.2:1**, falling substantially below WCAG AA baseline thresholds (**4.5:1** for standard text and **3:1** for active user components).

---

### 3.6 CODE QUALITY & MAINTAINABILITY

(FIXED) - **Redundant Intersection Observers:** Sections including `src/app/home/sections/membership.tsx` and `about.tsx` utilize `react-intersection-observer` imports while the remainder of the application consistently operates on Framer Motion's natively integrated viewport tracking methods (`whileInView` and `useInView`). Removing redundant third-party libraries simplifies bundle payloads.
(FIXED) - **Inline Styling Inconsistencies:** Across prominent landing heroes (`hero1.tsx`, `hero2.tsx`, `hero3.tsx`), primary headings override defined global font architectures by applying inline DOM parameters: `style={{ fontFamily: "'Georgia', serif" }}`. Typography hierarchy should be standardized via consistent utility classes or configuration tokens.
(FIXED) - **Non-Standard Robots Endpoint:** The site relies on a dedicated programmatic route (`src/app/robots.txt/route.ts`) generating raw textual responses containing legacy eCommerce prohibitions (`/cart`, `/checkout`) rather than utilizing Next.js App Router's typed `src/app/robots.ts` convention. Furthermore, incorporating `Disallow: /*?*` indiscriminately suppresses indexing across legitimate advertising attribution trails (such as marketing URLs bearing UTM parameters).

---

### 3.7 COMPLIANCE & LEGAL BASICS

(FIXED) - **Zero Privacy Policy or Terms of Service Representation:** Exhaustive repository analysis demonstrates zero dedicated webpages, footer navigation anchors, or document links for a domain Privacy Policy or Terms of Service agreement.
(FIXED) - **Tracking & Lead Collection Non-Compliance:** The primary application structure (`src/app/layout.tsx`) immediately executes global user tracking via Google Analytics (`G-WXLE69Q1SV`) and Vercel Analytics without user disclosure or consent mechanisms. Combining unannounced user tracking with persistent PII harvesting (names, email addresses, phone contact data, and professional resumes via Formspree) directly exposes the operating enterprise to regulatory enforcement and violating standard vendor terms of use (e.g., Google Analytics core terms).
(FIXED) - **ADA Title III Digital Accessibility Exposure:** Given that the domain functions as a commercial B2B enterprise operating in domestic US markets (Georgia, Texas, Atlanta), persistent WCAG AA non-compliance across core public engagement funnels (inaccessible form structures and deficient visual contrast ratios) introduces tangible ADA Title III litigation risks.

---

## 4. Quick Wins (High-Impact, Low-Effort)

1. **Convert or Remove the 20.8 MB Animated GIF:** Convert `public/logos/One-Stop-Shop.gif` into a lightweight, continuously looping MP4/WebM video asset (or responsive SVG animation) and eliminate the `unoptimized` flag from `src/app/home/sections/hero3.tsx`.
   (FIXED) 2. **Implement 301 Permanent Redirects for Legacy Routes:** Remove the `410 Gone` matcher array inside `src/middleware.ts` and declare direct **301 redirects** within `next.config.ts` mapping legacy URLs directly to current operational destinations (`/services/gas-station-construction`, etc.).
   (FIXED)3. **Correct Form Submission Error Handling:** Delete `setSubmitted(true)` from the catch handler in `src/components/careersForm.tsx`, ensuring network or validation failures correctly display an error alert rather than an unearned success confirmation.
   (FIXED) 4. **Fix Schema Broken 404 Logo URLs & Server Rendering:** Update `HomeSchema.tsx` and `OrganizationSchema.tsx` to reference the correct image location (`https://www.theapecgroup.com/logos/APEC.webp`), separate office locations into accurate distinct schema entries, and remove `"use client"` statements.
   (FIXED) 5. **Add Form Labels & Restore Text Contrast:** Insert explicit `aria-label` properties or visual HTML labels across `contactForm.tsx` and `careersForm.tsx`, and adjust placeholder color styling from `placeholder-[#111]/30` to `placeholder-[#111]/60` (or greater) to satisfy WCAG AA ratio standards.
   (FIXED) 6. **Integrate Form Honeypots & Remove Unused Media:** Introduce a silent Formspree honeypot field (`<input type="text" name="_gotcha" className="hidden" />`) to immediately mitigate automated scraping bots, and delete the unused **15.2 MB** `public/videos/Main_v2.mp4` repository artifact.

---

## 5. Longer-Term Recommendations

1. **Establish Enterprise Compliance Infrastructure:** Develop, publish, and interlink a comprehensive Legal Privacy Policy and Terms of Service page within the master footer layout. Implement a lightweight consent notice framework managing Google Analytics runtime initialization to ensure standard legal protection.
2. **Modernize Typography & Optimize Static Assets:** Transition font execution away from sequential CSS `@import` declarations in `globals.css` directly to standard Next.js local/Google font tooling (`next/font`). Convert all heavy PNG/WebP static artwork and video wrappers into responsively delivered, adaptive formats.
3. **Harder Form Security & Spam Prevention:** Upgrade Formspree integration points by embedding verification tools such as Cloudflare Turnstile or invisible reCAPTCHA v3. Implement robust client-side verification schemas (such as Zod) evaluating file extension types and payload size limits prior to network upload execution.
4. **Standardize Next.js App Router Architectural Best Practices:** Refactor customized endpoints (such as `src/app/robots.txt/route.ts`) to typed native files (`src/app/robots.ts`), institute domain-wide fallback Open Graph and Twitter Card sharing properties within `RootLayout`, and standardize interface animation mechanisms entirely around Framer Motion to prune redundant dependency imports.
5. **Conduct Live Deployment Network Audits:** Perform interactive endpoint verifications targeting actual Vercel production header deployments to establish explicit Content Security Policy (CSP), HTTP Strict Transport Security (HSTS), and cache management rules. Validate real-world Core Web Vitals telemetry across distinct mobile networks using Lighthouse and Search Console field data.

---

### Notice of Audit Completion

_Per instructions, no implementation modifications have been enacted at this stage. Please review the findings table, quick wins, and strategic priority items to establish the operational execution plan before codebase remediation commences._
