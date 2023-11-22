import Link from "next/link";

const Careers = () => {
  return (
    <section>
      <div className="grid md:grid-cols-2">
        <div
          className="flex flex-col gap-2 py-20 lg:pl-52"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <h2 className="text-[2.5rem] font-bold">Careers</h2>
          <p className="mt-[10px] font-manrope text-sm font-medium">
            Join A Workforce of Amazing People 🤩❤️
          </p>
          <p className="mt-2 font-manrope text-sm font-medium mb-4">
            Be a part of over 40+ amazing heroes spear heading <br /> growth in
            MILE while excelling in their careers.{" "}
          </p>
          <Link
            href="https://www.bamboohr.com/signup/"
            target="_blank"
            className="flex justify-center items-center font-semibold mt-2 bg-mile-yellow rounded-full text-mile-black py-[14px] lg:py-[19px] px-[38px] lg:px-[51px] w-fit"
          >
            Available Roles
          </Link>
        </div>
        <div className="relative w-full bg-black bg-[url('/assets/images/carrer-bg.webp')] h-[465px]  lg:h-[515px] bg-cover order-first md:order-last" />
      </div>
    </section>
  );
};

export default Careers;
