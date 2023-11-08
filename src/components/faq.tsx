import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FaqList = () => {
  return (
    <section className="bg-white">
      <div className="wrapper py-[94px]">
        <Accordion type="single" collapsible className="w-full ">
          {new Array(4).fill(0).map((el, idx) => (
            <AccordionItem
              value={`item-${idx}`}
              className="bg-mile-black rounded-[10px] max-w-[658px] w-full mx-auto mb-2"
              key={idx}
            >
              <AccordionTrigger className="py-0">
                <div className="flex justify-between w-full items-center p-8 text-white font-manrope text-lg cursor-pointer">
                  <p> What options are available to pay for mile rides?</p>
                  <div className="w-[29px] h-[29px] flex justify-center items-center rounded-full bg-mile-yellow text-mile-black">
                    <Plus size={16} />
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-mile-prime-100 py-0 px-8 text-sm font-manrope font-light">
                SImply enjoy your rides and accumulate tokens with every trip
                you take. The more you ride, the more tokens you earn, making
                every trip even even more satisfying.
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqList;
