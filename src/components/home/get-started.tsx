import Image from "next/image";
import AcceptRide from "../../../public/assets/images/accept-a-ride.png";
import EnterYourDestination from "../../../public/assets/images/enter-your-destination.png";
import GetToDestination from "../../../public/assets/images/get-to-destination.png";
import MeetYourDriver from "../../../public/assets/images/meet-your-driver.png";
import MeetYourPassenger from "../../../public/assets/images/meet-your-passenger.png";
import SitBackAndRelax from "../../../public/assets/images/sit-back-relax.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const riderSteps = [
  {
    image: AcceptRide,
    title: "Step One - Accept a ride",
    description:
      "Accept drives based of your preference. You’re provided with information of the passengers pick up point and destination.",
  },
  {
    image: MeetYourPassenger,
    title: "Step Two - Meet your Passenger",
    description:
      "Get to the pick up point, verify the destination for accuracy. Miles provide you with an in app map to help you navigate easily",
  },
  {
    image: GetToDestination,
    title: "Step Three - Get to destination",
    description:
      "Upon arrival, the fare is calculated based on the distance traveled and any additional charges. The passenger get to make payment through our multiple payment option",
  },
];

const driverSteps = [
  {
    image: EnterYourDestination,
    title: "Step One - Enter your destination",
    description:
      "Launch the app, input your destination. Confirm your pickup location with a tap.Tap once more to match with a nearby driver.",
  },
  {
    image: MeetYourDriver,
    title: "Step Two - Meet your driver",
    description:
      "You have the ability to monitor their approach on the map. As they get closer, prepare to meet them at your designated pickup spot.",
  },
  {
    image: SitBackAndRelax,
    title: "Step Three - Sit back and relax",
    description:
      "Upon arrival, the payment process is simple. you have flexible choices. You can pay with cash, a credit card, or you wallet ($MILE token).",
  },
];

const GetStarted = () => {
  return (
    <section className="py-[90px]">
      <div className="wrapper">
        <h2 className="text-2xl md:text-[2.5rem] text-center font-bold font-instrumental_sans mb-12">
          Get Started in 3 Simple Steps
        </h2>

        <div>
          <Tabs defaultValue="driver">
            <TabsList className="grid w-[242px] md:w-[362px] grid-cols-2 mx-auto mt-6 md:mt-10 rounded-full h-auto text-black font-manrope text-lg">
              <TabsTrigger
                value="driver"
                className="data-[state=active]:bg-mile-black data-[state=active]:text-mile-yellow rounded-full py-[12px] md:py-[19px] "
              >
                I&apos;m a Driver
              </TabsTrigger>
              <TabsTrigger
                value="rider"
                className="data-[state=active]:bg-mile-black data-[state=active]:text-mile-yellow rounded-full py-[12px] md:py-[19px] "
              >
                I&apos;m a Rider
              </TabsTrigger>
            </TabsList>
            <TabsContent value="driver" className=" mt-10 md:mt-16">
              <div className="grid md:grid-cols-3 gap-6">
                {driverSteps.map((step) => (
                  <Card
                    image={step.image}
                    title={step.title}
                    description={step.description}
                    key={step.title}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="rider" className="mt-10 md:mt-16">
              <div className="grid md:grid-cols-3 gap-6  place-content-center">
                {riderSteps.map((step) => (
                  <Card
                    image={step.image}
                    title={step.title}
                    description={step.description}
                    key={step.title}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;

const Card = ({ image, title, description }: any) => {
  return (
    <div className="flex flex-col mx-auto max-w-[404px] gap-3 rounded-xl border border-mile-prime-100 font-instrumental_sans pb-5 overflow-hidden">
      <Image
        src={image}
        alt="title"
        width={404}
        height={237}
        placeholder="blur"
      />
      <h3 className=" text-lg font-semibold capitalize px-5">{title}</h3>
      <p className="text-sm font-normal px-5 font-manrope leading-[28px] text-mile-prime-400">
        {description}
      </p>
    </div>
  );
};
