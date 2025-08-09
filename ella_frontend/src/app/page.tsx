
import { ProjectGrid } from "@/components/home/project-grid";
import { Text } from "@/components/ui/typography";

export default async function Home() {
  return (
    <main className=" min-h-screen p-8">
      <div className="grid grid-rows-2">
        <div>
          <Text variant="display">Ella(Jinying) Yang</Text>
        </div>
        <div className="flex justify-between">
          <div className="flex max-w-[744px]">
            <Text variant="body-large">
              Ella is a graphic/UI designer with 4+ years of experience in
              branding, marketing, and visual storytelling. Passionate about
              turning ideas into powerful, functional visuals that make an
              impact.
            </Text>
          </div>
          <div className="flex">
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

      <Text variant="section-heading">Works</Text>

      <ProjectGrid />
    </main>
  );
}
