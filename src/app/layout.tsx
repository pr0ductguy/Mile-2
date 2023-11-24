/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.milerides.com"),
  title: {
    template: "%s | " + "MILE",
    default: "MILE",
  },
  description:
    "Now you can earn rewards on every Trip  with us. Excited? Download the Mile app today!",
  keywords: [
    "Blockchain cab hailing",
    "Uber blockchain",
    "Bolt blockchain",
    "Mile token",
    "Mile",
    "Miles rider",
  ],
  openGraph: {
    title: "MILE",
    description:
      "Now you can earn rewards on every Trip  with us. Excited? Download the Mile app today!",
    url: "https://www.milerides.com",

    siteName: "Mile",
    images: [
      {
        url: "https://www.milerides.com/opengraph-image.png",
        width: 1200,
        height: 630,
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
      <body className={` flex flex-col min-h-screen antialiased`}>
        <NextTopLoader color="#F8E71D" showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
