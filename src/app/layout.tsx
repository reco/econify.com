import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ["latin"] });
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor";
import ScrollIndicator from "../components/ScrollIndicator";

import localFont from "next/font/local";

const chromaticGeometric = localFont({
  src: [
    {
      path: "../../public/fonts/chromatic-geometric-regular-trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/chromatic-geometric-medium-trial.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/chromatic-geometric-semibold-trial.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/chromatic-geometric-bold-trial.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-chromatic-geometric",
});

const chromaticCompressed = localFont({
  src: [
    {
      path: "../../public/fonts/chromatic-compressed-regular-trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/chromatic-compressed-medium-trial.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/chromatic-compressed-semibold-trial.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/chromatic-compressed-bold-trial.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-chromatic-compressed",
});

export const metadata = {
  title: "Econify LLC",
  description:
    "Econify builds the fastest websites and applications, for the best media companies.",
  themeColor: "#444444",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${chromaticGeometric.variable} ${chromaticCompressed.variable} font-sans bg-gray-800`}
    >
      <body className="bg-white">
        <Header />
        <ScrollIndicator />
        {/* <Cursor /> */}
        <main className="flex flex-col min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
