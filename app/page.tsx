import { HeroSection }         from "@/components/sections/HeroSection";
import { StudioIntroSection }  from "@/components/sections/StudioIntroSection";
import { FeaturedWorkSection } from "@/components/sections/FeaturedWorkSection";
import { ApproachSection }     from "@/components/sections/ApproachSection";
import { ProcessSection }      from "@/components/sections/ProcessSection";
import { CTASection }          from "@/components/sections/CTASection";

function Divider() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 md:px-10">
      <hr className="border-0 border-t border-line" />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StudioIntroSection />
      <Divider />
      <FeaturedWorkSection />
      <Divider />
      <ApproachSection />
      <Divider />
      <ProcessSection />
      <Divider />
      <CTASection />
    </>
  );
}
