import type { Metadata } from "next";
import "./globals.css";
import {Manrope} from "next/font/google";
import Footer from "@/components/ui/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ella Jinying Yang Portfolio",
  description: "From stunning logos and brand identities to captivating web design, I bring your vision to life. Let's create something unforgettable together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
      
    </html>
  );
}
