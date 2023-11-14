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
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>

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

const Card = () => {
  return (
    <div className=" rounded-xl border border-mile-prime-100 font-manrope pb-5 overflow-hidden px-6 py-8 w-full max-w-[403px]">
      <Image
        src="/assets/icons/stars.svg"
        alt="stars"
        width={150}
        height={24}
        className="mb-3"
      />
      <p className="font-semibold">
        Started driving with Miles to earn some extra income, and I was
        pleasantly surprised. The flexibility is fantastic, and the rewards are
        a great bonus. It&apos;s a win-win!
      </p>
      <div className="flex gap-2 items-center mt-10">
        <Image
          src="https://s3-alpha-sig.figma.com/img/0c27/648b/dc88f3209ccfbcc5d9b9d169cf99426c?Expires=1699833600&Signature=gH--9tsLvs7SRvoM84M1wQSUWkT0p~gOdAqmJPNh8GBxkiBjs40MIgs4NnkkSRLbNm1pMxGY2c4QgkosjmdDgaOs25zDrosG~OgbucZa4LhqZ-SDMp1cK7wEiUDov-78uGq51fs~CqS35I8D9ht6w~5fMF1StGQ2OeyQIbyckTchtEnwvHZ6~YkaV1mGC5480PET~KZzI38XFTbskdwtYL~EEEGlgBOz-VGaKgWJ~vBzJakJzBEbADtIWUwIFELGPUYE7RC-g9svsUd2qFzIUG1PlKAaJ4wI~vy0qBKIcggx1-cFGv~t024UgEHu2Y7SEypKZ4n2i5CuOShtySqk3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          width={56}
          height={56}
          alt="testimonial user"
          className="mb-3 rounded-full"
        />
        <div className="flex flex-col h-full">
          <p className="font-bold">Sarah D</p>
          <p className="font-semibold capitalize mt-auto text-mile-prime-300">
            Driver Extraordinaire
          </p>
        </div>
      </div>
    </div>
  );
};
