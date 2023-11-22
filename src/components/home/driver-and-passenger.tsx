import Image from "next/image";
import ManSmiling from "../../../public/assets/images/home-guy-smiling.png";
import WomanSmiling from "../../../public/assets/images/home-woman-with-phone.png";
import DownloadAppButton from "../download-app-button";

const DriverAndPassenger = () => {
  return (
    <section className="bg-[#F8F8F8] py-[58px] md:py-[100px]">
      <div className="wrapper">
        <div className="flex items-center mb-10 gap-5 md:gap-[77px] justify-between flex-col md:flex-row">
          <div className="md:w-[463px]" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-mile-black text-[1.75rem] lg:text-4xl font-bold max-w-[463px]">
              With Mile, you don&apos;t just drive; you thrive
            </h3>
            <p className="max-w-[487px] text-mile-prime-400 font-manrope text-sm lg:text-lg mt-6 lg:leading-[36px] mb-6 lg:mb-[59px]">
              Turn your rides into tangible results - It&apos;s not just about
              getting from A to B; it&apos;s about earning, flexibility, and a
              rewarding experience. Drivers get the chance to set preferences.
            </p>
            <DownloadAppButton />
          </div>
          <div>
            <Image
              src={ManSmiling}
              alt="man smiling"
              width={645}
              height={666}
              data-aos="zoom-in-up"
              data-aos-duration={900}
              data-aos-delay="300"
            />
          </div>
        </div>
        <div className="flex items-center mb-10 gap-5 md:gap-[77px] justify-between flex-col md:flex-row">
          <div>
            <Image
              src={WomanSmiling}
              alt="woman smiling"
              width={645}
              height={666}
              data-aos="zoom-in-up"
              data-aos-duration={900}
              data-aos-delay="300"
            />
          </div>
          <div
            className="md:w-[550px] order-first md:order-last"
            data-aos="fade-up"
          >
            <h3 className="text-mile-black text-[1.75rem] capitalize lg:text-4xl font-bold">
              Enjoy Safe, and comfortable rides with miles
            </h3>
            <p className=" font-manrope text-mile-prime-400 text-sm lg:text-lg mt-6 lg:leading-[36px] mb-6 lg:mb-[59px]">
              Choose Mile for trips that priorities your safety and comfort
              while rewarding you every step of the way. Mile added security
              steps ensures safety.
            </p>
            <DownloadAppButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverAndPassenger;
