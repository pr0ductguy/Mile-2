import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import type { Metadata } from "next";
import "./globals.css";

/* const instrumental_sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrumental_sans",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});
const mulish = Mulish({ subsets: ["latin"], variable: "--font-mulish" }); */

export const metadata: Metadata = {
  title: "MILE",
  description: "Generated by create next app",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/assets/images/logo.svg",
      href: "/assets/images/logo.svg",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/assets/images/logo.svg",
      href: "/assets/images/logo.svg",
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
      <head></head>
      <body className={` flex flex-col min-h-screen `}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
