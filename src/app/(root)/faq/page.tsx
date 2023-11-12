import FaqList from "@/components/faq";
import Hero from "@/components/shared/Hero";
import { getFaqs } from "@/sanity/action";

const FAQPage = async () => {
  const faqs = await getFaqs();

  return (
    <>
      <Hero title="FAQ" subtitle="Knowledge Base: Learn More" />
      <FaqList faqs={faqs} />
    </>
  );
};

export default FAQPage;
