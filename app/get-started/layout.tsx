import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get started",
  description:
    "Tell Sell More Studio about your massage clinic, nail salon, beauty salon or barbershop in Brisbane or elsewhere in Australia.",
  alternates: { canonical: "/get-started" },
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
