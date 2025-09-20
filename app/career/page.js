import HeroSection from "@/components/Career/HeroSection/HeroSection";
import NavneetLife from "../../components/Career/NavneetLife/NavneetLife";
import NavnnetWorking from "../../components/Career/NavnnetWorking/NavnnetWorking";
import UpcomingVacancies from "@/components/Career/UpcomingVacancies/UpcomingVacancies";
import Contact from "@/components/Career/Contact/Contact";


export default function Career() {
  return (
    <>
      <HeroSection />
      <NavnnetWorking/>
      <NavneetLife/>
      <UpcomingVacancies/>
      <Contact/>
    </>
  );
}
