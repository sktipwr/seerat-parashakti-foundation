import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seerat Parashakti Foundation — For Rights, For Justice, For Change",
  description:
    "Seerat Parashakti Foundation is an NGO empowering women and children through free legal aid, awareness campaigns, and community outreach across India.",
  keywords: [
    "NGO",
    "women empowerment",
    "children welfare",
    "legal aid",
    "India",
    "Seerat Parashakti Foundation",
    "Rohtak",
    "Haryana",
  ],
  openGraph: {
    title: "Seerat Parashakti Foundation",
    description:
      "For Rights, For Justice, For Change — Empowering Women & Children through free legal aid and awareness.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
