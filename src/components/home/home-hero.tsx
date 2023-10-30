import Image from "next/image";
import AppDownloadButton from "../AppDownloadButton";

const HomeHero = () => {
  return (
    <section className="min-h-[450px] bg-mile-black">
      <div className="wrapper py-[65px] flex items-center flex-col md:flex-row gap-[55px]">
        <div className="md:w-1/2 h-full justify-center items-center">
          <h2 className="font-bold leading-[41.912px] font-instrumental_sans text-[2rem] text-white lg:text-[3.5rem] lg:leading-[72px]">
            Every Ride is a <span className="text-mile-yellow">Rewarding</span>{" "}
            Adventure
          </h2>
          <p className="text-mile-prime-50 mt-8 text-[12px] md:mt-6 md:text-lg max-w-[450px]">
            Now you can earn rewards on every ride with us. Excited? Download
            the Mile app today!
          </p>
          <div className="flex space-x-2 mt-[24px] lg:mt-[49px]">
            <AppDownloadButton />
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/assets/images/home-hero.png"
            alt="home hero image"
            width={510}
            height={608}
            className="max-h-[400px] lg:max-h-none"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;