import ContactInformation from "@/components/contact/contact-information";
import Hero from "@/components/shared/Hero";

const ContactUsPage = () => {
  return (
    <>
      <Hero
        title="Contact US"
        subtitle="For Inquires, Questions or Concerns; drop us a line "
      />
      <ContactInformation />
    </>
  );
};

export default ContactUsPage;
