import AppDownloadButton from "@/components/AppDownloadButton";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Logo from "../Logo";

const footerLink = [
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
];

const socialLinks = [
  {
    label: "instagram",
    Icon: Instagram,
    href: "#",
  },
  {
    label: "facebook",
    Icon: Facebook,
    href: "#",
  },
  {
    label: "linkedin",
    Icon: Linkedin,
    href: "#",
  },
  {
    label: "twitter",
    Icon: Twitter,
    href: "#",
  },
];

const Footer = () => {
  return (
    <footer className="bg-mile-black font-mulish font-semibold text-mile-prime-50">
      <div className="wrapper h-full py-[104px]">
        <div className="flex flex-wrap flex-col md:flex-row gap-10 justify-between">
          <div className="flex flex-col">
            <Logo />
            <p className="mt-[16px] text-sm">
              Drive Smarter, Earn More with Miles
            </p>
            <div className="flex space-x-4 mt-5">
              <AppDownloadButton />
            </div>
          </div>
          <div className="shrink-0">
            <h3 className="uppercase text-mile-yellow font-extrabold">
              useful links
            </h3>
            <div className="flex flex-col space-y-[10px] mt-[22px]">
              {footerLink.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-semibold text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="shrink-0">
            <h3 className="uppercase text-mile-yellow font-extrabold">
              Contact Us
            </h3>
            <div className="flex flex-col  mt-[22px]">
              <p className="font-semibold text-sm">info@milesapp.com</p>
              <p className="font-semibold text-sm mt-2">
                <Link href="tel:0801-234-5678">0801-234-5678</Link>
              </p>
              <div className="flex space-x-4 mt-6 text-mile-black">
                {socialLinks.map((item) => (
                  <Link
                    href={item.href}
                    key={item.label}
                    className="bg-mile-yellow rounded-full p-2 flex justify-center items-center"
                  >
                    {<item.Icon aria-label={item.label} size={17} />}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm mt-20 md:mt-0">
          &copy; {new Date().getFullYear()} MILES Technologies
        </div>
      </div>
    </footer>
  );
};

export default Footer;
