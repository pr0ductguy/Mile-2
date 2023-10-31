import DriverAndPassenger from "@/components/home/driver-and-passenger";
import GetStarted from "@/components/home/get-started";
import HomeHero from "@/components/home/home-hero";
import MileToken from "@/components/home/miletoken";
import Reward from "@/components/home/reward";
import Testimonial from "@/components/home/testimonial";
import WhyMile from "@/components/home/why-mile";

export default function Home() {
  return (
    <>
      <HomeHero />
      <GetStarted />
      <DriverAndPassenger />
      <Reward />
      <WhyMile />
      <MileToken />
      <Testimonial />
    </>
  );
}
