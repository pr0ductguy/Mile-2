const Hero = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="relative lg:min-h-[635px] min-h-[300px] bg-black flex justify-center items-center flex-col gap-3 lg:gap-5 bg-[url('/assets/images/hero-bg.png')] bg-cover bg-[500px]  md:bg-center">
      <h2
        className="font-instrumental_sans font-bold text-[32px] text-white md:text-[56px] text-center"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {title}
      </h2>
      <p
        className="text-mile-prime-300 font-manrope text-[12px] md:text-2xl max-w-[200px] md:max-w-[440px] capitalize text-center"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {subtitle}
      </p>
    </div>
  );
};

export default Hero;
