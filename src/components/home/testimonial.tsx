"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

const SWIPER_BREAKPOINTS = {
  // when window width is >= 320px
  320: {
    slidesPerView: 1,
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 1,
  },
  // when window width is >= 640px
  640: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
};

const Testimonial = () => {
  return (
    <section>
      <div className="wrapper h-full pt-[100px] pb-[120px]">
        <h2
          className="text-2xl md:text-[2.5rem] font-instrumental_sans text-center font-bold  capitalize"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          what our users say about us
        </h2>
        <p
          className="font-manrope text-[12px] md:text-lg mt-2 font-semibold text-center text-mile-prime-400"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          We&apos;re redefining the rider and driver experience like never
          before
        </p>
        <div className="mt-10" data-aos="fade-up" data-aos-delay="500">
          <Swiper spaceBetween={20} breakpoints={SWIPER_BREAKPOINTS}>
            {data.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Card testimonial={item} />
              </SwiperSlide>
            ))}

            <div
              className="flex justify-end items-center  gap-5 mt-10 "
              slot="container-end"
            >
              <SwiperNavButtons />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flex items-center gap-5">
      <button
        aria-label="Prev"
        onClick={() => swiper.slidePrev()}
        className={`bg-mile-black text-mile-yellow rounded-full p-2`}
      >
        <ArrowLeft className=" w-6 h-6 " />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        aria-label="Next"
        className={`bg-mile-black text-mile-yellow rounded-full p-2`}
      >
        <ArrowRight className=" w-6 h-6 " />
      </button>
    </div>
  );
};

const Card = ({
  testimonial: { occupation, name, text },
}: {
  testimonial: { occupation: string; name: string; text: string };
}) => {
  return (
    <div className=" rounded-xl border border-mile-prime-100 font-manrope pb-5 overflow-hidden px-6 py-8 w-full max-w-[403px]">
      <Image
        src="/assets/icons/stars.svg"
        alt="stars"
        width={150}
        height={24}
        className="mb-3"
      />
      <p className="font-semibold font-manrope">{text}</p>
      <div className="flex gap-2 items-center mt-10">
        <div className="flex flex-col h-full">
          <p className="font-bold">{name}</p>
          <p className="font-semibold font-manrope capitalize mt-auto text-mile-prime-300">
            {occupation}
          </p>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    name: "Muyiwa Lawal",
    occupation: "Driver",
    text: "For the first time in history, online cab services allow us the privilege of setting safety rules for our vehicle. I am happy about this new development ",
  },
  {
    name: "Daniel Chinonso",
    occupation: "User",
    text: "Mile is my go-to cab service! That token make it feel like a game, and you know games are for winning. Also I enjoy Top-notch service from the riders.",
  },
  {
    name: "Usang Koti",
    occupation: "Driver",
    text: "Better pay and flexibility, the top code and many more. I simply love this app, goodbye to the traditional names we know, mile is here to stay. ",
  },
  {
    name: "Anita Quadri",
    occupation: "User",
    text: "To know I'm a big fan of miles, check my friends phone. I'm also practically their sales reps...lol ",
  },
];
