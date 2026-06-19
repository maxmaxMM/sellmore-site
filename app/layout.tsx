import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SellMore Studio — Get more reviews. Never miss a lead.",
  description:
    "Automated Google review requests, instant replies, missed-call recovery and follow-up systems for local businesses.",
  metadataBase: new URL("https://sellmore.studio"),
  icons: {
    icon: "/favicon.png?v=10",
    shortcut: "/favicon.png?v=10",
    apple: "/favicon.png?v=10",
  },

  openGraph: {
    title: "SellMore Studio — Get more reviews. Never miss a lead.",
    description:
      "Automated Google review requests, instant replies, missed-call recovery and follow-up systems for local businesses.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#05070d] text-[#f3f5ff]">
        <div className="app-bg noise relative flex min-h-screen flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
