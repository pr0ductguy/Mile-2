import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/assets/images/logo.png"
      alt="logo"
      width={127}
      height={45}
      className="w-[66px] h-[23.386px] lg:w-[127px] lg:h-[45px]"
    />
  );
};

export default Logo;
