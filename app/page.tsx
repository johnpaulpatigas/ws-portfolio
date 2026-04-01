import { HeroSection } from "@/components/features/home/hero-section";
import { WhatIDoSection } from "@/components/features/home/what-i-do-section";
import { FeaturedProjects } from "@/components/features/home/featured-projects";

export default function Home() {
  return (
    <div className="space-y-16 py-8">
      <HeroSection />
      <WhatIDoSection />
      <div className="text-center">
        <FeaturedProjects />
      </div>
    </div>
  );
}
