/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mile.com"),
  title: {
    template: "%s | " + "MILE",
    default: "MILE",
  },
  description: "Generated by create next app",
  openGraph: {
    title: "MILE",
    description: "Test",
    url: "https://www.mile.com",
    siteName: "Mile",
    images: [
      {
        url: "https://www.mile.com/opengraph-image.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en",
    type: "website",
  },
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/assets/images/logo-black.png",
      href: "/assets/images/logo-black.png",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Manrope:wght@200;300;400;500;600;700;800&family=Mulish:wght@200;300;400;500;600;700;800;900&display=swap"
        />
      </head>
      <body className={` flex flex-col min-h-screen`}>
        <NextTopLoader color="#F8E71D" showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
