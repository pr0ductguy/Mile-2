import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface Props {
  faqs: {
    question: string;
    answer: string;
    _id: string;
  }[];
}

const FaqList = ({ faqs }: Props) => {
  return (
    <section className="bg-white">
      <div className="wrapper py-12 md:py-[94px]">
        <Accordion type="single" collapsible className="w-full ">
          {faqs.length > 0 &&
            faqs.map((el) => (
              <AccordionItem
                value={el._id}
                className="bg-mile-black rounded-[10px] max-w-[658px] w-full mx-auto mb-2"
                key={el._id}
              >
                <AccordionTrigger className="py-0">
                  <div className="flex justify-between w-full items-center p-4 md:p-8 text-left text-white font-manrope text-lg cursor-pointer">
                    <p>{el.question}</p>
                    <div className="w-[29px] shrink-0 h-[29px] flex justify-center items-center rounded-full bg-mile-yellow text-mile-black">
                      <Plus size={16} />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-mile-prime-100 py-0 px-4 md:px-8 text-sm font-manrope font-light">
                  {el.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqList;
