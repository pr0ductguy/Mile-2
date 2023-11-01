const Hero = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="relative lg:min-h-[635px] min-h-[300px] bg-black flex justify-center items-center flex-col gap-3 lg:gap-5 bg-[url('/assets/images/hero-bg.png')] bg-cover">
      <h2 className="font-instrumental_sans font-bold text-[32px] text-white lg:text-[56px] text-center">
        {title}
      </h2>
      <p className="text-mile-prime-300 font-manrope text-[12px] lg:text-2xl max-w-[200px] lg:max-w-[440px] capitalize text-center">
        {subtitle}
      </p>
    </div>
  );
};

export default Hero;
