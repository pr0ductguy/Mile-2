import Image from "next/image";

const MileToken = () => {
  return (
    <section className="bg-[#F3F2F2] min-h-[607px]">
      <div className="px-0 h-full w-full">
        <div className="h-full flex flex-col lg:flex-row w-full max-lg:gap-10">
          <div className="lg:w-1/2 flex justify-center items-center lg:justify-end px-[31px] h-full lg:items-end lg:min-h-[607px] max-lg:py-[50px]">
            <Image
              src="/assets/images/coins.png"
              alt="coins"
              width={593}
              height={585}
              className="hidden lg:block"
              data-aos="fade-right"
              data-aos-delay="300"
            />
            <Image
              src="/assets/images/coins.mobile.png"
              alt="coins-mobile.png"
              width={337}
              height={333}
              className="lg:hidden"
              data-aos="fade-right"
              data-aos-delay="300"
            />
          </div>
          <div className="md:rounded-tl-[64px] rounded-tl-[33px] bg-mile-yellow h-full lg:w-1/2 flex flex-col justify-center px-[56px] py-[69px] md:px-[93px] md:min-h-[607px] text-black">
            <h2
              className="capitalize  mb-6 text-[25.143px] md:text-5xl font-bold"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              $MILE token
            </h2>
            <p
              className="text-black text-[9.429px] md:text-lg font-semibold font-manrope"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Miles Token is built on blockchain technology, which ensures
              secure, transparent, and immutable transactions. This technology
              is at the forefront of digital currency innovation.
            </p>
            <p
              className="text-black text-[9.429px] md:text-lg font-semibold font-manrope mt-10"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              The introduction of Miles Token aligns with Miles&apos; commitment
              to creating a user-centered experience, where every ride or drive
              is not just a journey but a valuable opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MileToken;
