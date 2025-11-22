import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowBackground from "@/components/GlowBackground";
import { about } from "@/data/about";

export const metadata: Metadata = {
  title: `${about.name} - Portfolio`,
  description: about.title,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#1D1B24] text-text-primary">
        <GlowBackground>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </GlowBackground>
      </body>
    </html>
  );
}
