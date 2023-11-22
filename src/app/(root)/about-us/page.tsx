import Careers from "@/components/about/careers";
import CoreValues from "@/components/about/core-values";
import Story from "@/components/about/story";
import WhatSetUsAPart from "@/components/about/what-set-us-apart";
import Hero from "@/components/shared/Hero";

export const metadata = {
  title: "About Us",
};

const AboutPage = () => {
  return (
    <>
      <Hero title="About US" subtitle="Our Story Sets Us Apart" />
      <Story />
      <WhatSetUsAPart />
      <CoreValues />
      <Careers />
    </>
  );
};

export default AboutPage;
