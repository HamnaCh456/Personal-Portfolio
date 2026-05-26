import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { siteMetadata } from "./data/siteMetadata";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`bg-bg ${GeistMono.variable} ${GeistSans.variable} ${instrumentSerif.variable}`}
    >
      <body className="flex min-h-screen flex-col font-sans md:max-w-7xl lg:mx-auto lg:flex-row">
        <main className="relative flex flex-1 flex-col overflow-x-hidden border-x border-border/60">
          <Navbar />
          <div className="grid flex-1 grid-cols-1 lg:grid-cols-[32px_1fr_32px]">
            <div className="hidden w-full border-r border-border opacity-75 [background-image:linear-gradient(45deg,theme(colors.border)_12.50%,transparent_12.50%,transparent_50%,theme(colors.border)_50%,theme(colors.border)_62.50%,transparent_62.50%,transparent_100%)] [background-size:5px_5px] lg:block"></div>
            <div className="relative col-span-1 px-3 lg:px-0">{children}</div>
            <div className="hidden w-full border-l border-border opacity-75 [background-image:linear-gradient(45deg,theme(colors.border)_12.50%,transparent_12.50%,transparent_50%,theme(colors.border)_50%,theme(colors.border)_62.50%,transparent_62.50%,transparent_100%)] [background-size:5px_5px] lg:block"></div>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
