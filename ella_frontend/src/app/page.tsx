import { Hero } from "@/components/home/hero";
import { ProjectGrid } from "@/components/home/ProjectGrid/project-grid";
import VideoShowcase from "@/components/home/VideoShowcase/VideoShowcase";
import { Text } from "@/components/ui/typography";
import { CursorProvider } from "@/providers/CursorProvider";

export default function Home() {
  return (
    <CursorProvider>
      <main className=" min-h-screen">
        <Hero />

        <VideoShowcase />

        <div className="min-h-screen p-8">
          <Text className="text-center mb-[72px]" variant="section-heading">
            Works
          </Text>

          <ProjectGrid />
        </div>
      </main>
    </CursorProvider>
  );
}
