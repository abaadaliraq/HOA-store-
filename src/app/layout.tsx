import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Cormorant_Garamond, Cairo, Inter } from "next/font/google";
import InitialLoader from "../components/InitialLoader";
import RouteLoading from "../components/RouteLoading";
import ScrollToTopButton from "../components/ScrollToTopButton";
import "./globals.css";

// الخط الإنجليزي الفخم للعناوين
const displayEn = Cormorant_Garamond({
  variable: "--font-display-en",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

// الخط العربي الأساسي
const bodyAr = Cairo({
  variable: "--font-body-ar",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
});

// الخط الإنجليزي للنصوص
const bodyEn = Inter({
  variable: "--font-body-en",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "House of Antiques | بيت التحفيات",
  description: "House of Antiques Store - متجر بيت التحفيات",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },

  openGraph: {
    title: "House of Antiques | بيت التحفيات",
    description: "House of Antiques Store - متجر بيت التحفيات",
    siteName: "House of Antiques",
    type: "website",
    locale: "ar_IQ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${displayEn.variable} ${bodyAr.variable} ${bodyEn.variable}`}
    >
      <body>
         <InitialLoader />
        <RouteLoading />

        {children}

        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
         <ScrollToTopButton />
      </body>
    </html>
  );
}
