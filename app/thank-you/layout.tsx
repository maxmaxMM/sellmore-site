import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Sell More Studio has received your photo.",
  robots: { index: false, follow: false },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
