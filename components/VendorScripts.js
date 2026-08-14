"use client";

import { useEffect } from "react";

// Exact load order from the original template's end-of-body <script> block.
const SCRIPTS = [
  "/js/jquery-3.7.1.min.js",
  "/js/bootstrap.min.js",
  "/js/validator.min.js",
  "/js/jquery.slicknav.js",
  "/js/swiper-bundle.min.js",
  "/js/jquery.waypoints.min.js",
  "/js/jquery.counterup.min.js",
  "/js/jquery.magnific-popup.min.js",
  "/js/parallaxie.js",
  "/js/gsap.min.js",
  "/js/magiccursor.js",
  "/js/SplitText.js",
  "/js/ScrollTrigger.min.js",
  "/js/SmoothScroll.js",
  "/js/jquery.mb.YTPlayer.min.js",
  "/js/wow.min.js",
  "/js/flowmap-effect.min.js",
  "/js/function.js",
];

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.async = false; // preserve execution order
    s.onload = () => resolve(src);
    s.onerror = () => reject(new Error("Failed to load " + src));
    document.body.appendChild(s);
  });
}

export default function VendorScripts() {
  useEffect(() => {
    // Guard against re-running (e.g. Fast Refresh in dev).
    if (window.__vendorScriptsLoaded) return;
    window.__vendorScriptsLoaded = true;

    (async () => {
      for (const src of SCRIPTS) {
        try {
          await loadScript(src);
        } catch (err) {
          // Keep the chain going; a single plugin failure shouldn't stall init.
          console.error(err);
        }
      }

      // The original scripts live at the end of <body>, so they bind to the
      // window "load" event before it fires. Here they are injected after the
      // effect runs — the real "load" has already happened — so we re-dispatch
      // it once to drive load-bound handlers (notably the preloader fade-out).
      if (document.readyState === "complete") {
        window.dispatchEvent(new Event("load"));
      }
    })();
  }, []);

  return null;
}
