"use client";

import { SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const NavLink = ({
  label,
  link,
  isMobile = false,
}: {
  label: string;
  link: string;
  isMobile?: boolean;
}) => {
  const Wrapper = isMobile ? SheetClose : Fragment;
  const pathname = usePathname();
  const isActive =
    (pathname.startsWith(link) && link !== "/") || pathname === link;
  return (
    <Link
      href={link}
      className={cn("text-white py-1 w-fit outline-none focus:outline-none", {
        "border-b border-mile-yellow": isActive,
      })}
    >
      <Wrapper>{label}</Wrapper>
    </Link>
  );
};

export default NavLink;
