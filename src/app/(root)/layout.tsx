/* eslint-disable @next/next/no-page-custom-font */
import { AOSInit } from "@/components/aos";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AOSInit />
      <Navbar />
      <main className="flex-1 pt-[84px] lg:pt-[120px]">{children}</main>
      <Footer />
    </>
  );
}
