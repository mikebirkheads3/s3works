import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VendorScripts from "@/components/VendorScripts";

export const metadata = {
  title: "S3 WORKS - Driving Business Growth with AI",
  description:
    "At S3 WORKS, we are dedicated to safely utilize the power of AI to drive business efficiency. Our team is committed to delivering cutting-edge solutions tailored to help you and your business.",
  keywords: "AI solutions, business automation, custom AI applications, AI consulting, S3 Works",
  authors: [{ name: "S3 WORKS" }],
  icons: { shortcut: "/images/favicon.png" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="zxx">
      <head>
        {/* Google Fonts Css */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
        {/* Bootstrap Css */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" media="screen" />
        {/* SlickNav Css */}
        <link href="/css/slicknav.min.css" rel="stylesheet" />
        {/* Swiper Css */}
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        {/* Font Awesome Icon Css */}
        <link href="/css/all.min.css" rel="stylesheet" media="screen" />
        {/* Animated Css */}
        <link href="/css/animate.css" rel="stylesheet" />
        {/* Magnific Popup Core Css File */}
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        {/* Mouse Cursor Css File */}
        <link rel="stylesheet" href="/css/mousecursor.css" />
        {/* Main Custom Css */}
        <link href="/css/custom.css" rel="stylesheet" media="screen" />
      </head>
      <body>
        <Preloader />
        <Header />
        {children}
        <Footer />
        <VendorScripts />
      </body>
    </html>
  );
}
