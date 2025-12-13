import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import ContactInfo from "../../components/Contact/ContactInfo";
import ContactForm from "../../components/Contact/ContactForm";
import Footer from "../../components/Layouts/Footer";
import ContactPageConversion from "../../components/Tracking/ContactPageConversion";

export default function Page() {
  return (
    <>
    <ContactPageConversion />
      <NavbarTwo />

      <PageBanner pageTitle="Kontaktirajte nas" BGImage="/images/services_category_back.jpg" />

      <ContactInfo />

      <ContactForm />

      <Footer />
    </>
  );
}
