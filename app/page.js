import LeaderSection from "@/components/Home/BussinessStats/BussinessStats";
import Investors from "@/components/Home/Investors/Investors";
import JourneySection from "@/components/Home/JourneySection/JourneySection";
import OurBrands from "@/components/Home/OurBrands/OurBrands";
import ResponsibilitySection from "@/components/Home/ResponsibilitySection/ResponsibilitySections";
import EHSSection from "@/components/Home/EHSInitiatives/EHSSection";
import InternationalBusiness from "@/components/Home/InternationalBusiness/InternationalBusiness";
import StoreNearYou from "@/components/Home/StoreNearYou/StoreNearYou";
import TrendingProducts from "../components/Home/OurTrendingProducts/TrendingProducts";
import NavneetAiSection from "@/components/Home/NavneetAI/NavneetAiSection";
import DigibookSection from "@/components/Home/Digibook/DigibookSection";
import NavneetCBSESection from "@/components/Home/NavneetCBSE/NavneetCBSESection";
import HomeBanner from "@/components/Home/HomeBanner/HomeBanner";

export default  function Page() {

  return (
    <>
    <HomeBanner/>
     <LeaderSection />
     <OurBrands />
     <NavneetAiSection />
     <DigibookSection />
     <NavneetCBSESection />
     <TrendingProducts />
     <JourneySection />
     <Investors />
     {/* <EHSSection />
     <InternationalBusiness /> */}
     <ResponsibilitySection />
     <StoreNearYou />
    </>
  );
}
