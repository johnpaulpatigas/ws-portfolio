import {
  AboutDetails,
  AboutHero,
  ExperienceTimeline,
  ProfessionalProfile,
  TechnicalSkills,
} from "@/components/features/about/about-sections";

export default function About() {
  return (
    <div className="space-y-16 py-8 max-w-4xl mx-auto">
      <AboutHero />
      <ProfessionalProfile />
      <TechnicalSkills />
      <ExperienceTimeline />
      <AboutDetails />
    </div>
  );
}
