import Image from "next/image";

const SingleBlogPage = () => {
  return (
    <div>
      <div className="wrapper flex flex-col py-20">
        <h2 className=" text-[22px] md:text-[38px] lg:text-[56px] text-mile-black text-center mb-5 font-bold">
          The Rise and Fall of Echidimme
        </h2>
        <p className="text-center text-mile-prime-200 font-manrope font-medium text-xs md:text-2xl">
          October 12th, 2023
        </p>
        <Image
          alt="banner"
          width={1277}
          height={540}
          className="max-h-[540px] rounded-[30px] my-10"
          src="https://plus.unsplash.com/premium_photo-1699292639215-6f34ff51daec?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default SingleBlogPage;
