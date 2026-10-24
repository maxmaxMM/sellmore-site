import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a sample image",
  description:
    "Send Sell More Studio a photo link and we will prepare a sample marketing image for your local service business.",
  alternates: { canonical: "/get-image" },
};

export default function GetImageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
