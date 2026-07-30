"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (consent === "true") {
      setHasConsent(true);
    } else if (consent === null) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "true");
    setHasConsent(true);
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie_consent", "false");
    setHasConsent(false);
    setShowBanner(false);
  };

  return (
    <>
      {hasConsent && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-WXLE69Q1SV"
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WXLE69Q1SV');
          `}
          </Script>
          {process.env.NODE_ENV === "production" && <Analytics />}
        </>
      )}

      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#0a0a0a] text-white p-4 sm:p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-sm text-white/70 max-w-4xl leading-relaxed">
            We use cookies and third-party tracking technologies (such as Google Analytics and Vercel Analytics) to improve your browsing experience and analyze site traffic. By clicking &quot;Accept&quot;, you consent to our use of cookies as described in our{" "}
            <Link href="/privacy-policy" className="text-white font-medium underline hover:text-[#c62931] transition-colors">
              Privacy Policy
            </Link>.
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={declineCookies}
              className="flex-1 sm:flex-none px-5 py-2.5 text-sm font-medium text-white/70 hover:text-white border border-white/20 hover:border-white/40 rounded-lg transition-all"
            >
              Decline
            </button>
            <button
              onClick={acceptCookies}
              className="flex-1 sm:flex-none px-5 py-2.5 text-sm font-medium text-white bg-[#c62931] hover:bg-[#a8232a] rounded-lg transition-all shadow-[0_4px_14px_0_rgba(198,41,49,0.39)]"
            >
              Accept Cookies
            </button>
          </div>
        </div>
      )}
    </>
  );
}
