import { HeroSection }        from "@/components/sections/HeroSection";
import { FeaturedWorkSection } from "@/components/sections/FeaturedWorkSection";
import { ApproachSection }     from "@/components/sections/ApproachSection";
import { ProcessSection }      from "@/components/sections/ProcessSection";
import { CTASection }          from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedWorkSection />
      <ApproachSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
