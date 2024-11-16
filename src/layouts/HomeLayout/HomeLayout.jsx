import React from "react";

import dynamic from "next/dynamic";

import styles from "./styles.module.css";

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
  navContent,
  aboutContent,
  footerContent,
  actionMessage,
  reviewsContent,
  greetingContent,
  servicesContent,
  franchiseContent
}) => {
  return (
    <>
      <NavBar {...navContent} />
      <div className={styles["layout-container"]}>
        <GreetingSection {...greetingContent} handleSchedule={actionMessage} />
        <OurServicesSection
          {...servicesContent}
          handleLocation={actionMessage}
        />
        <ReviewsSection {...reviewsContent} />
        <AboutUsSection {...aboutContent} handleLocation={actionMessage} />
        <FranchiseSection
          {...franchiseContent}
          handleFranchise={actionMessage}
        />
        <Footer {...footerContent} />
      </div>
    </>
  );
};

export default HomeLayout;
