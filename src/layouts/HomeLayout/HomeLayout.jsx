import React from "react";

import dynamic from "next/dynamic";

const GreetingSection = dynamic(
  () => import("./components/GreetingSection/GreetingSection")
);
const OurServicesSection = dynamic(
  () => import("./components/OurServicesSection/OurServicesSection")
);
const ReviewsSection = dynamic(
  () => import("./components/ReviewsSection/ReviewsSection")
);
const AboutUsSection = dynamic(
  () => import("./components/AboutUsSection/AboutUsSection")
);
const FranchiseSection = dynamic(
  () => import("./components/FranchiseSection/FranchiseSection")
);

const Footer = dynamic(() => import("@/components/organisms/Footer/Footer"));
const NavBar = dynamic(() => import("@/components/organisms/NavBar/NavBar"));

const HomeLayout = ({
  isLoading,
  greetingContent,
  servicesContent,
  reviewsContent,
  aboutContent,
  franchiseContent
}) => {
  return (
    <div>
      <NavBar />
      <GreetingSection {...greetingContent} isLoading={isLoading} />
      <OurServicesSection {...servicesContent} isLoading={isLoading} />
      <ReviewsSection {...reviewsContent} isLoading={isLoading} />
      <AboutUsSection {...aboutContent} isLoading={isLoading} />
      <FranchiseSection {...franchiseContent} isLoading={isLoading} />
      <Footer />
    </div>
  );
};

export default HomeLayout;
