import Image from "next/image";

const driverSteps = [
  {
    image: "/assets/images/car.svg",
    title: "Earn as you ride",
    description:
      "Every Ride is a rewarding opportunity, putting more in your pocket as you ride.",
  },
  {
    image: "/assets/images/cash.svg",
    title: "Unbeatable Price",
    description:
      "Mile offers rides that won’t break the bank without compromising on top-notch service and quality.",
  },
  {
    image: "/assets/images/wallet.svg",
    title: "Flexible Payment Option",
    description:
      "We offer a variety of payment methods to make your journey even more convenient. Choose the option that suits you best and enjoy the ride!",
  },
];

const WhyMile = () => {
  return (
    <section className="py-[90px]">
      <div className="wrapper">
        <h2 className="text-2xl md:text-[2.5rem] text-center font-bold ">
          Why Choose MILE?
        </h2>
        <p className="font-manrope text-[12px] text-mile-prime-300 md:text-lg mt-2 font-semibold text-center">
          We&apos;re redefining the rider and driver experience like never
          before
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6 mt-6 md:mt-[42px]  place-content-center">
          {driverSteps.map((step) => (
            <Card
              image={step.image}
              title={step.title}
              description={step.description}
              key={step.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMile;

const Card = ({ image, title, description }: any) => {
  return (
    <div className="flex mx-auto flex-col   max-w-[400px] min-h-[468px] gap-3 rounded-xl border border-mile-prime-100 bg-[#FAFAFA] font-instrumental_sans pb-5 overflow-hidden">
      <div className="pt-[59px] px-5">
        <div className="h-[180px] relative   overflow-hidden  flex justify-start">
          <Image
            src={image}
            alt="title"
            width={180}
            height={180}
            className="  object-contain"
          />
        </div>
      </div>
      <h3 className=" text-[1.5625rem] lg:text-[1.75rem] font-bold capitalize px-5 mt-10">
        {title}
      </h3>
      <p className=" text-[12.53px] lg:text-sm font-normal font-manrope text-mile-prime-300 px-5 capitalize">
        {description}
      </p>
    </div>
  );
};
