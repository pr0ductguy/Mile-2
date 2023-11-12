import DriverAndPassenger from "@/components/home/driver-and-passenger";
import GetStarted from "@/components/home/get-started";
import HomeHero from "@/components/home/home-hero";
import MileToken from "@/components/home/miletoken";
import Reward from "@/components/home/reward";
import WhyMile from "@/components/home/why-mile";
import dynamic from "next/dynamic";

const Testimonial = dynamic(() => import("@/components/home/testimonial"), {
  loading: () => <p>Loading...</p>,
});

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
