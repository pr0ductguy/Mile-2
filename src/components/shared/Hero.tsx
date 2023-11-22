import Image from "next/image";
import HeroBg from "../../../public/assets/images/hero-bg.png";

const Hero = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="relative lg:min-h-[635px] min-h-[300px]  flex justify-center items-center flex-col gap-3 lg:gap-5  md:bg-center">
      <h2 className="font-instrumental_sans font-bold text-[32px] text-white md:text-[56px] text-center">
        {title}
      </h2>
      <p className="text-mile-prime-300 font-manrope text-[12px] md:text-2xl max-w-[200px] md:max-w-[440px] capitalize text-center">
        {subtitle}
      </p>
      <div className="absolute -z-10 inset-0 ">
        <Image src={HeroBg} fill alt="hero" className="object-cover" />
      </div>
    </div>
  );
};

export default Hero;
