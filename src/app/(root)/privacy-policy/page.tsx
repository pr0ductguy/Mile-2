import RichTextComponents from "@/components/rich-text";
import Hero from "@/components/shared/Hero";
import { getLegalDocument } from "@/sanity/action";
import { PortableText } from "@portabletext/react";

const PrivacyPolicyPage = async () => {
  const policy = await getLegalDocument("Privacy Policy");

  return (
    <>
      <Hero title="Privacy Policy" subtitle="Privacy & Terms of Service" />
      <div className="max-w-4xl mx-auto w-full  py-20 prose prose-xl">
        <PortableText value={policy.content} components={RichTextComponents} />
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
