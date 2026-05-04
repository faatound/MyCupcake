import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyCupcake | Indulge in Sweet Perfection",
  description: "Flash sales on handcrafted cupcakes, muffins, and brownies. Limited-time delights made with love.",
  keywords: ["bakery", "cupcakes", "muffins", "brownies", "flash sale", "dessert"],
  authors: [{ name: "MyCupcake Bakery" }],
  openGraph: {
    title: "MyCupcake | Premium Handcrafted Treats",
    description: "Order your favorite cupcakes and muffins on WhatsApp.",
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
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <CartProvider>
          <div className="noise" />
          {children}
          <Analytics />
        </CartProvider>
      </body>
    </html>
  );
}


