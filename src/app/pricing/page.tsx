import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
// import PricingStyleTwo from "../../components/Pricing/PricingStyleTwo";
import PricingStyleThree from "../../components/Pricing/PricingStyleThree";
import CtaAreaTwo from "../../components/Common/CtaAreaTwo";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="Naše cene" BGImage="/images/services_category_back.jpg" />

      {/* <PricingStyleTwo /> */}
      <PricingStyleThree />

      <CtaAreaTwo />

      <Footer />
    </>
  );
}
