import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navigationLinks } from "@/contants/navigation";
import { Menu, X } from "lucide-react";
import NavLink from "./navlink";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger
        asChild
        className="data-[state=closed]:block data-[state=open]:hidden"
      >
        <button aria-label="open menu" className="text-white">
          <Menu />
        </button>
      </SheetTrigger>
      <SheetTrigger
        asChild
        className="data-[state=closed]:hidden data-[state=open]:block"
      >
        <button aria-label="close menu" className="text-white">
          <X />
        </button>
      </SheetTrigger>

      <SheetContent
        side="left"
        asChild
        className="bg-[#1B1B1B] h-fit w-full border-none"
      >
        <div className="p-6 flex flex-col  space-y-6  top-[84px]">
          {navigationLinks.map((item) => {
            if (!item?.dropdown)
              return (
                <NavLink
                  link={item.link}
                  label={item.label}
                  key={item.label}
                  isMobile
                />
              );
            return (
              <Accordion type="single" collapsible key={item.label}>
                <AccordionItem
                  value={item.label}
                  className="border-none p-0 min-h-0 "
                >
                  <AccordionTrigger className="justify-start space-x-2 py-0 text-white hover:no-underline">
                    <span>{item.label}</span>
                  </AccordionTrigger>
                  <AccordionContent asChild className="pb-0">
                    <div className="flex flex-col space-y-6 px-0 py-6  text-white">
                      {item.dropdown.map((el) => (
                        <NavLink
                          link={el.link}
                          label={el.label}
                          key={el.label}
                          isMobile
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
