import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GTD XXIX MC Recruitment",
  description: "Portfolio job descriptions for GTD TOPS XXIX",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full`}>
      <body className="min-h-full bg-background font-sans antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
