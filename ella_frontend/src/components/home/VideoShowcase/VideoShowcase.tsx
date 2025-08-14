"use client";

import { useScroll, useTransform } from "motion/react";
import * as motion from "motion/react-client";
import { useRef } from "react";

const VideoShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    // video scales starts at 0 and scales to full once the scroll reaches the video
    <motion.div
      ref={ref}
      style={{
        scale,
        scrollBehavior: "smooth",
        scrollSnapAlign: "center",
        scrollSnapStop: "always",
        backgroundImage: `url('/videos/showreel.mp4')`,
      }}
      className="lg:min-h-screen h-fit bg-gray-700 my-[72px] items-center justify-center flex"
    >
      <video width={"100%"} height={"100%"} className="object-cover" muted autoPlay loop>
        <source src="/videos/showreel.mp4" className="object-cover" type="video/mp4" />
      </video>
    </motion.div>
  );
};

export default VideoShowcase;
