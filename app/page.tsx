import { HeroSection }          from "@/components/sections/HeroSection";
import { StudioIntroSection }   from "@/components/sections/StudioIntroSection";
import { FeaturedWorkSection }  from "@/components/sections/FeaturedWorkSection";
import { ApproachSection }      from "@/components/sections/ApproachSection";
import { ProcessSection }       from "@/components/sections/ProcessSection";
import { CTASection }           from "@/components/sections/CTASection";
import { SectionMarker }        from "@/components/ui/SectionMarker";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <SectionMarker number="01" label="The Studio" />
      <StudioIntroSection />

      <SectionMarker number="02" label="Selected Work" />
      <FeaturedWorkSection />

      <SectionMarker number="03" label="Approach" />
      <ApproachSection />

      <SectionMarker number="04" label="Process" />
      <ProcessSection />

      <SectionMarker number="05" label="Let's Build" />
      <CTASection />
    </>
  );
}
