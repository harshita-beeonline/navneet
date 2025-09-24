import React from "react";
import HeroSection from "../../components/Advertise/HeroSection/HeroSection";
import ShowcaseBrand from "../../components/Advertise/ShowcaseBrand/ShowcaseBrand";
import AboutNavneetSection from "../../components/Advertise/AboutNavneetSection/AboutNavneetSection";
import WhyAdvertiseSection from "../../components/Advertise/WhyAdvertise/WhyAdvertise";
import OurEsteemedSection from "../../components/Advertise/OurEsteemedSection/OurEsteemedSection";
import ProductsSection from "../../components/Advertise/ProductsSection/ProductsSection";
import ContactSection from "../../components/Advertise/ContactSection/ContactSection";
const AdvertiseWithUs = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      <ShowcaseBrand/>
      <AboutNavneetSection/>
      <ProductsSection/>
      <WhyAdvertiseSection/>
      <OurEsteemedSection/>
      <ContactSection/>

      {/* Other sections will come later */}
    </>
  );
};

export default AdvertiseWithUs;
