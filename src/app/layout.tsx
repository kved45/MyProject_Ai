import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Shriniwasa Builders & Developers LLP | Luxury Residential Developments in Nagpur",
  description:
    "Shriniwasa Builders & Developers LLP — Member of CREDAI Nagpur & NAREDCO. Explore our signature 2 & 3 BHK residential landmarks including Royal Dream City-2 (Besa–Omkar Nagar Rd, MahaRERA P50500078919) and Royal Heritage (Mahal, Nagpur).",
  keywords: [
    "Shriniwasa Builders & Developers LLP",
    "Royal Dream City-2 Nagpur",
    "Royal Heritage Mahal Nagpur",
    "CREDAI Nagpur Builder",
    "NAREDCO Nagpur",
    "2 BHK 3 BHK Flats in Besa Nagpur",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#161412",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} antialiased`}
    >
      <body className="min-h-screen bg-canvas text-ink-primary font-sans flex flex-col">
        {children}
      </body>
    </html>
  );
}
