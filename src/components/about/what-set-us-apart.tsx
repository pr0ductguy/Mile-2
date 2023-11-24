import Image from "next/image";

const WhatSetUsAPart = () => {
  return (
    <section className="wrapper flex items-center mb-[100px] lg:mb-[223px] flex-col lg:flex-row justify-between">
      <div className="lg:w-1/2 flex justify-center items-center">
        <Image
          src="/assets/images/what-set-us-apart.png"
          alt="what set us apart"
          width={649}
          height={665}
          data-aos="fade-up"
          data-aos-duration={1200}
        />
      </div>
      <div
        data-aos="fade-up"
        className="lg:w-1/2 flex justify-end flex-col md:translate lg:-translate-y-11 mb-[31px] lg:mb-0 lg:pl-12 order-first lg:order-last"
      >
        <h3 className=" text-2xl md:text-[3.5rem] mb-2 md:mb-10 font-bold  text-mile-black">
          What Sets Us Apart
        </h3>
        <p className="text-mile-prime-300 font-manrope font-medium text-sm md:text-xl">
          Mile Cab-Hailing isn&apos;t your typical ride-sharing app; it&apos;s a
          revolutionary approach to commuting. We reward you with Mile Tokens
          for every trip you take, which can be exchanged for exciting benefits,
          making your rides more rewarding. We&apos;re also committed to
          sustainability with an eco-friendly fleet and carbon offset
          initiatives. Safety is our utmost priority, and our user-friendly app
          ensures a seamless experience. Plus, a portion of your earnings goes
          to community initiatives. We&apos;re all about innovation and setting
          new standards.
        </p>
      </div>
    </section>
  );
};

export default WhatSetUsAPart;
