import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import AboutContent from "../../components/About/AboutContent";
import FunFactsTwo from "../../components/Common/FunFactsTwo";
import TeamStyleThree from "../../components/Common/TeamStyleThree";
import Feedback from "../../components/Common/Feedback";
import Partner from "../../components/Common/Partner";
import CtaAreaTwo from "../../components/Common/CtaAreaTwo";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="O nama" BGImage="/images/services_category_back.jpg" />

      <AboutContent />

      {/* <FunFactsTwo />

      <TeamStyleThree />

      <Feedback />

      <Partner /> */}

      <CtaAreaTwo />

      <Footer />
    </>
  );
}
