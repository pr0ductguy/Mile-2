import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import type { Metadata } from "next";
import { Instrument_Sans, Manrope } from "next/font/google";
import "./globals.css";

const instrumental_sans = Instrument_Sans({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });
const mulish = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MILE",
  description: "Generated by create next app",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/assets/images/logo.png",
      href: "/assets/images/logo.png",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/assets/images/logo.png",
      href: "/assets/images/logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` flex flex-col min-h-screen ${manrope.className} ${instrumental_sans.className} ${mulish.className}`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
