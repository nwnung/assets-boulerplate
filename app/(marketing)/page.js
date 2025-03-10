import FeatureTwo from "@/components/marketing/feature-two";
import FeatureOne from "@/components/marketing/feture-one";
import Hero from "@/components/marketing/landing-page";
import PricingSection from "@/components/marketing/pricing-section";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeatureOne />
      <FeatureTwo />
      <PricingSection />
    </>
  );
};

export default HomePage;
