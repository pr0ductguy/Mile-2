import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { navigationLinks } from "@/contants/navigation";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Logo from "../Logo";
import GetAppButton from "./get-app-button";
import MobileMenu from "./mobile-menu";
import NavLink from "./navlink";

const Navbar = () => {
  return (
    <nav className="h-[84px] lg:h-[120px] z-[99999] bg-mile-black font-instrumental_sans fixed inset-x-0 top-0 w-full">
      <div className="flex wrapper  items-center justify-between  h-full">
        <Link href="/">
          <Logo />
        </Link>
        <div className="items-center hidden lg:inline-flex">
          <div className="mr-10 space-x-6 font-semibold">
            {navigationLinks.map((item) => {
              if (!item?.dropdown)
                return (
                  <NavLink
                    label={item.label}
                    link={item.link}
                    key={item.label}
                  />
                );
              return (
                <Popover key={item.label}>
                  <PopoverTrigger asChild>
                    <div
                      role="button"
                      aria-label={item.label}
                      key={item.label}
                      className="inline-flex text-white flex items-center"
                    >
                      <span>{item.label}</span>{" "}
                      <ChevronDown size="16" className="ml-[2px]" />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="mt-5 bg-[#1B1B1B] z-[99999] text-[#E7E7E7] border-none p-0 max-w-[218px] rounded-none">
                    <div className="flex flex-col space-y-6 p-6  ">
                      {item.dropdown.map((el) => (
                        <Link
                          className="text-white py-1 w-fit"
                          href={el.link}
                          key={el.label}
                        >
                          <PopoverClose>{el.label}</PopoverClose>
                        </Link>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              );
            })}
          </div>
          <GetAppButton />
        </div>
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
