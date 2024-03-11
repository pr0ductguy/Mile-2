"use client";
import { cn } from "@/lib/utils";
import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

const Story = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (!videoRef) return;
    if (!isPlaying) {
      videoRef.current?.play();
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  };
  return (
    <section className="wrapper md:pt-[112px] pt-[46px] md:mb-[120px] mb-[55px]">
      <h3 className="text-2xl md:text-[3.3125rem] font-bold text-mile-black mb-4 md:mb-10">
        The Mile Story
      </h3>
      <div className="rounded-[30px] h-[205px] md:h-[400px] relative group lg:h-[541px] overflow-hidden w-full mx-auto">
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/dbjrkugfl/video/upload/v1710171769/IMG_1707_a9vy4n.mp4"
          className="w-full h-full"
          poster="/assets/images/good-vibes.png"
          onEnded={() => {
            setIsPlaying(false);
          }}
        />

        <div
          className={cn(
            "absolute inset-0 w-full h-full justify-center items-center hidden group-hover:flex",
            {
              flex: !isPlaying,
            }
          )}
        >
          <div
            role="button"
            aria-label="video"
            className="bg-[#040400] flex justify-center items-center w-[107px] h-[107px] text-mile-yellow rounded-full z-10"
            onClick={handlePlayClick}
          >
            {isPlaying ? (
              <Pause size={41} className="translate" />
            ) : (
              <Play size={41} className="translate translate-x-1" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
