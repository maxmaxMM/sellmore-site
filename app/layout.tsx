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

const description =
  "Sell More Studio helps Brisbane and Australian massage clinics, nail salons, beauty salons and barbershops get more bookings, miss fewer calls, follow up with customers, collect Google reviews and post consistently. Prices in AUD.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sellmorestudio.com"),
  title: {
    default:
      "Sell More Studio | Bookings, missed calls and reviews for local businesses",
    template: "%s · Sell More Studio",
  },
  description,
  applicationName: "Sell More Studio",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.png?v=10",
    shortcut: "/favicon.png?v=10",
    apple: "/favicon.png?v=10",
  },
  openGraph: {
    title:
      "Sell More Studio | Bookings, missed calls and reviews for local businesses",
    description,
    url: "https://www.sellmorestudio.com",
    siteName: "Sell More Studio",
    locale: "en_AU",
    type: "website",
    images: [{ url: "/sellmore-logo.png", alt: "Sell More Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell More Studio",
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Sell More Studio",
  url: "https://www.sellmorestudio.com",
  image: "https://www.sellmorestudio.com/sellmore-logo.png",
  email: "sellmorestudiosupport@gmail.com",
  telephone: "+61421435858",
  description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brisbane",
    addressRegion: "QLD",
    addressCountry: "AU",
  },
  areaServed: [
    { "@type": "City", name: "Brisbane" },
    { "@type": "AdministrativeArea", name: "Queensland" },
    { "@type": "Country", name: "Australia" },
  ],
  currenciesAccepted: "AUD",
  knowsLanguage: "en-AU",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Sell More Studio services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Online Booking System — setup",
        price: "499",
        priceCurrency: "AUD",
      },
      {
        "@type": "Offer",
        name: "Online Booking System — monthly",
        price: "99",
        priceCurrency: "AUD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "99",
          priceCurrency: "AUD",
          unitText: "MONTH",
        },
      },
      {
        "@type": "Offer",
        name: "AI Receptionist (24/7 Phone Answering)",
        description: "Custom Quote · Live Demo Available",
      },
      {
        "@type": "Offer",
        name: "AI Chat Widget — setup",
        price: "99",
        priceCurrency: "AUD",
        description:
          "Also covers AI Text Reply, or ask for a Custom Bundle Quote.",
      },
      {
        "@type": "Offer",
        name: "AI Chat Widget — monthly",
        price: "49",
        priceCurrency: "AUD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "49",
          priceCurrency: "AUD",
          unitText: "MONTH",
        },
      },
      {
        "@type": "Offer",
        name: "Google Profile Setup",
        price: "299",
        priceCurrency: "AUD",
      },
      {
        "@type": "Offer",
        name: "Google Profile Maintenance",
        price: "99",
        priceCurrency: "AUD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "99",
          priceCurrency: "AUD",
          unitText: "MONTH",
        },
      },
      {
        "@type": "Offer",
        name: "Google Review Automation — setup",
        price: "119",
        priceCurrency: "AUD",
      },
      {
        "@type": "Offer",
        name: "Google Review Automation — monthly",
        price: "69",
        priceCurrency: "AUD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "69",
          priceCurrency: "AUD",
          unitText: "MONTH",
        },
      },
      {
        "@type": "Offer",
        name: "Customer Follow-Up & Reactivation",
        description: "Custom quote / tailored automation",
      },
      {
        "@type": "Offer",
        name: "Social Media — 12 posts/videos per month",
        price: "499",
        priceCurrency: "AUD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "499",
          priceCurrency: "AUD",
          unitText: "MONTH",
        },
      },
      {
        "@type": "Offer",
        name: "Social Media — 20 posts/videos per month",
        price: "699",
        priceCurrency: "AUD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "699",
          priceCurrency: "AUD",
          unitText: "MONTH",
        },
      },
      {
        "@type": "Offer",
        name: "Social Media — 30 posts/videos per month",
        price: "999",
        priceCurrency: "AUD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "999",
          priceCurrency: "AUD",
          unitText: "MONTH",
        },
      },
      {
        "@type": "Offer",
        name: "Business Websites / Landing Pages",
        description: "Custom quote / free sample preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#05070d] text-[#f3f5ff]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="app-bg noise relative flex min-h-screen flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
