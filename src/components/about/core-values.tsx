const CoreValues = () => {
  return (
    <section className="bg-mile-sec-50 md:py-[94px] py-[75px]">
      <div className="wrapper">
        <h2 className="md:text-[3.5rem] font-bold text-2xl md:text-center">
          Our Core Values
        </h2>
        <p className="font-manrope text-sm mt-4 text-mile-prime-400  md:text-xl md:text-center">
          Our Values are Our Commitments To You
        </p>
        <div className="grid md:grid-cols-3 gap-8 md:gap-4 lg:gap-20 mt-[50px] lg:mt-[72px]">
          {data.map((item) => (
            <div
              key={item.title}
              className="border-dashed border rounded-[30px] border-[#7A7A7A] px-[27px] py-[50px]"
            >
              <h3 className="text-2xl font-bold mb-2 text-mile-black">
                {item.title}
              </h3>
              <p className="font-manrope text-mile-prime-400 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;

const data = [
  {
    title: "Transparency",
    description:
      "Transparency is at the core of our service. We believe in open and honest communication with our riders and drivers. We provide clear, upfront pricing and detailed trip information, so you always know what to expect. ",
  },
  {
    title: "Safety & Trust",
    description:
      "Your safety is our top priority. We've implemented rigorous safety measures, including thorough driver screenings, real-time trip tracking, and 24/7 customer support. You can trust us to prioritize your well-being during every journey.",
  },
  {
    title: "Innovation & Rewards",
    description:
      "Innovation is in our DNA. We continuously strive to enhance your travel experience through cutting-edge technology and features that make your rides more convenient and enjoyable. We go beyond traditional ride-sharing by rewarding you with Mile Tokens for every trip.",
  },
];
