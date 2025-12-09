import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
// import ServicesStyleOne from "../../components/Services/ServicesStyleOne";
import ServicesStyleFour from "../../components/Services/ServicesStyleFour";
import CtaAreaTwo from "../../components/Common/CtaAreaTwo";
import Footer from "../../components/Layouts/Footer";
import { servicesPageData } from "../../../libs/services";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="Naše usluge" BGImage="/images/page-banner1.jpg" />
      {/* <ServicesStyleOne /> */}
      <ServicesStyleFour servicesData={servicesPageData} />

      <CtaAreaTwo />

      <Footer />
    </>
  );
}
