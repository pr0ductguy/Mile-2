const Careers = () => {
  return (
    <section>
      <div className="flex items-center justify-center flex-col md:flex-row">
        <div className="wrapper flex flex-col gap-2 py-20 lg:pl-52">
          <h2 className="text-[2.5rem] font-bold">Careers</h2>
          <p className="mt-2 font-manrope text-sm font-medium">
            Join A Workforce of Amazing People 🤩❤️
          </p>
          <p className="mt-2 font-manrope text-sm font-medium">
            Be a part of over 40+ amazing heroes spear heading <br /> growth in
            MILE while excelling in their careers.{" "}
          </p>
          <button className="flex justify-center items-center font-semibold mt-2 bg-mile-yellow rounded-full text-mile-black py-[14px] lg:py-[19px] px-[38px] lg:px-[51px] w-fit">
            Available Roles
          </button>
        </div>
        <div className="relative w-full bg-black bg-[url('/assets/images/carrer-bg.webp')] h-[465px]  lg:h-[515px] bg-cover order-first md:order-last" />
      </div>
    </section>
  );
};

export default Careers;
