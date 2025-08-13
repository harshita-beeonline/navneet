import LeaderSection from "@/components/Home/BussinessStats/BussinessStats";
import Investors from "@/components/Home/Investors/Investors";
import JourneySection from "@/components/Home/JourneySection/JourneySection";
import OurBrands from "@/components/Home/OurBrands/OurBrands";
import ResponsibilitySection from "@/components/Home/ResponsibilitySection/ResponsibilitySections";
import EHSSection from "@/components/Home/EHSInitiatives/EHSSection";
import InternationalBusiness from "@/components/Home/InternationalBusiness/InternationalBusiness";
import StoreNearYou from "@/components/Home/StoreNearYou/StoreNearYou";
import TrendingProducts from "../components/Home/OurTrendingProducts/TrendingProducts";

export default  function Page() {

  return (
    <>
     <LeaderSection />
     <OurBrands />
     <TrendingProducts />
     <JourneySection />
     <Investors />
     <EHSSection />
     <InternationalBusiness />
     <ResponsibilitySection />
     <StoreNearYou />
    </>
  );
}
