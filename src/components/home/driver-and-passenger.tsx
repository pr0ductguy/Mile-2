import Image from "next/image";

const DriverAndPassenger = () => {
  return (
    <section className="bg-[#F8F8F8] py-[58px] md:py-[100px]">
      <div className="wrapper">
        <div className="flex items-center mb-10 gap-5 md:gap-[77px] justify-between flex-col md:flex-row">
          <div className="md:w-[463px]">
            <h3 className="text-mile-black text-[1.75rem] lg:text-4xl font-bold max-w-[463px]">
              With Mile, you don&apos;t just drive; you thrive
            </h3>
            <p className="max-w-[487px] font-manrope text-sm lg:text-lg mt-6 lg:leading-[36px]">
              Turn your rides into tangible results - It&apos;s not just about
              getting from A to B; it&apos;s about earning, flexibility, and a
              rewarding experience.
            </p>
          </div>
          <div>
            <Image
              src="/assets/images/home-guy-smiling.png"
              alt="man smiling"
              width={645}
              height={666}
            />
          </div>
        </div>
        <div className="flex items-center mb-10 gap-5 md:gap-[77px] justify-between flex-col md:flex-row">
          <div>
            <Image
              src="/assets/images/home-woman-with-phone.png"
              alt="man smiling"
              width={645}
              height={666}
            />
          </div>
          <div className="md:w-[463px] order-first md:order-last">
            <h3 className="text-mile-black text-[1.75rem] lg:text-4xl font-bold max-w-[463px]">
              With Mile, you don&apos;t just drive; you thrive
            </h3>
            <p className="max-w-[487px] font-manrope text-sm lg:text-lg mt-6 lg:leading-[36px]">
              Turn your rides into tangible results - It&apos;s not just about
              getting from A to B; it&apos;s about earning, flexibility, and a
              rewarding experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverAndPassenger;
