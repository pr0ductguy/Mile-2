"use client";
import { Play } from "lucide-react";
import ReactPlayer from "react-player";
import ClientOnly from "../client-only";

const Story = () => {
  return (
    <section className="wrapper md:pt-[112px] pt-[46px] md:mb-[120px] mb-[55px]">
      <h3 className="text-2xl md:text-[3.3125rem] font-bold text-mile-black mb-4 md:mb-10">
        The Mile Story
      </h3>
      <div className="rounded-[30px] h-[205px] md:h-[400px] bg-black lg:h-[541px] overflow-hidden">
        <ClientOnly>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            height={"100%"}
            width={"100%"}
            light={
              <div className="flex justify-center items-center relative h-full w-full bg-[url('/assets/images/good-vibes.png')] bg-cover">
                <PlayIcon />
              </div>
            }
          />
        </ClientOnly>
      </div>
    </section>
  );
};

export default Story;

const PlayIcon = () => (
  <div
    role="button"
    aria-label="video"
    className="bg-[#040400] flex justify-center items-center w-[107px] h-[107px] text-mile-yellow rounded-full z-10"
  >
    <Play size={41} className="translate translate-x-1" />
  </div>
);
