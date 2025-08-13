"use client";

import { Text } from "../ui/typography";
import * as motion from "motion/react-client";
export const Hero = () => {
  return (
    <div className="flex flex-col gap-[82px] h-fit p-8">
      <div className=" -space-y-4">
        <div className="overflow-hidden pb-4">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{
              y: 0,
              transition: {
                duration: 0.3,
              },
            }}
          >
            <Text variant="display" className="leading-none">
              Ella(Jinying)
            </Text>
          </motion.div>
        </div>

        <div className="overflow-hidden pb-4">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{
              y: 0,
              transition: {
                duration: 0.3,
              },
            }}
          >
            <Text variant="display" className="leading-none">
              Yang
            </Text>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between h-fit">
        <div className="flex max-w-[744px]">
          <Text variant="body-large">
            Ella is a graphic/UI designer with 4+ years of experience in
            branding, marketing, and visual storytelling. Passionate about
            turning ideas into powerful, functional visuals that make an impact.
          </Text>
        </div>
        <div className="flex flex-row gap-[60px]">
          <div className="max-w-[266px]">
            <Text variant="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </div>
          <div className="max-w-[266px]">
            <Text variant="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
