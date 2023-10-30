import DriverAndPassenger from "@/components/home/driver-and-passenger";
import GetStarted from "@/components/home/get-started";
import HomeHero from "@/components/home/home-hero";
import Reward from "@/components/home/reward";

export default function Home() {
  return (
    <>
      <HomeHero />
      <GetStarted />
      <DriverAndPassenger />
      <Reward />
    </>
  );
}
