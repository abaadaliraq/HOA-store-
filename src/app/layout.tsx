import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Cormorant_Garamond, Cairo, Inter } from "next/font/google";
import InitialLoader from "../components/InitialLoader";
import RouteLoading from "../components/RouteLoading";
import ScrollToTopButton from "../components/ScrollToTopButton";
import "./globals.css";

const displayEn = Cormorant_Garamond({
  variable: "--font-display-en",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyAr = Cairo({
  variable: "--font-body-ar",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
});

const bodyEn = Inter({
  variable: "--font-body-en",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "House of Antiques Store | متجر بيت التحفيات",
  description:
    "متجر بيت التحفيات — منصة لعرض وبيع التحف، المقتنيات، القطع التراثية، الأعمال الفنية، والهدايا المختارة من بيت التحفيات في بغداد.",

  keywords: [
    "House of Antiques Store",
    "متجر بيت التحفيات",
    "بيت التحفيات",
    "antiques store Iraq",
    "Baghdad antiques",
    "Iraqi antiques",
    "heritage collectibles",
    "تحف بغداد",
    "مقتنيات تراثية",
    "متجر تحف",
    "تحف عراقية",
    "هدايا تراثية",
  ],

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
    title: "House of Antiques Store | متجر بيت التحفيات",
    description:
      "اكتشف متجر بيت التحفيات لعرض التحف، المقتنيات، القطع التراثية، الأعمال الفنية، والهدايا المختارة.",
    siteName: "House of Antiques Store",
    type: "website",
    locale: "ar_IQ",
  },

  twitter: {
    card: "summary_large_image",
    title: "House of Antiques Store | متجر بيت التحفيات",
    description:
      "متجر بيت التحفيات لعرض التحف والمقتنيات والقطع التراثية المختارة.",
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
      <head>
        <meta
          name="msvalidate.01"
          content="01BBC0FB5BE3F105123681E741F589C8"
        />
      </head>
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