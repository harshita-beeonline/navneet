import HeroSection from "@/components/Responsibility/HeroSection/HeroSection";
import Information from "@/components/Responsibility/Information/Information";
import Initiatives from "@/components/Responsibility/Initiatives/Initiatives";
import Knowmore from "@/components/Responsibility/Knowmore/Knowmore";
import Webinar from "@/components/Responsibility/Webinar/Webinar";

export default function Responsibilty() {
  return (
    <>
      <HeroSection />
      <Initiatives />
      <Information />
      <Webinar />
      <Knowmore />
    </>
  );
}
