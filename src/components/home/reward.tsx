import Image from "next/image";
import AppDownloadButton from "../AppDownloadButton";

const Reward = () => {
  return (
    <section className="bg-mile-black py-[59px] md:py-[91px]">
      <div className="wrapper">
        <div className="flex items-center mb-10 gap-5 md:gap-[77px] justify-between flex-col md:flex-row">
          <div>
            <Image
              src="/assets/images/reward.png"
              alt="man smiling"
              width={615}
              height={690}
              data-aos="fade-right"
              data-aos-delay="1000"
            />
          </div>
          <div className="md:w-[500px] order-first md:order-last">
            <h3
              className="text-[1.75rem] lg:text-4xl text-white capitalize font-bold max-w-[500px]"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              This is your invitation to be limitless.
            </h3>
            <p
              className="max-w-[487px] font-manrope text-[12.298px] lg:text-lg mt-6 lg:leading-[36px] text-mile-prime-200 my-[32px]"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Scan Code to Download. <br />
              The Mile App is Available on IOS and Android App Stores.
            </p>
            <div
              className="flex space-x-2"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <AppDownloadButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reward;
