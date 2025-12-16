"use client";

import React from "react";
import Link from "next/link";

interface ServiceData {
  iconName: string;
  title: string;
  shortText: string;
  viewDetails: string;
  aosDelay: string;
}

const servicesData: ServiceData[] = [
  {
    iconName: "pe-7s-comment bg-13c4a1",
    title: "Računovodstvo",
    shortText:
      "Pružamo uslugu vođenja poslovnih knjiga uz izradu i predaju završnog računa i poreskog bilansa.",
    viewDetails: "/services/racunovodstvo/",
    aosDelay: "100",
  },
  {
    iconName: "pe-7s-display2 bg-6610f2",
    title: "Interno izveštavanje",
    shortText:
      "Zajedno sa vama, koji poznajete svoje poslovanje, formulišemo izveštaje koji su Vam potrebni za praćenje poslovanja firme i koje dobijate u dogovorenom vremenskom intervalu.",
    viewDetails: "/services/interno-izvestavanje/",
    aosDelay: "200",
  },
  {
    iconName: "pe-7s-light bg-ffb700",
    title: "Obračun zarada",
    shortText:
      "Na raspolaganju smo pravnim licima koja žele da izmeste obračun zarada, vođenje evidencije odsustva i administriranje zaposleni.",
    viewDetails: "/services/obracun-zarada/",
    aosDelay: "300",
  },
  {
    iconName: "pe-7s-phone bg-fc3549",
    title: "Poresko savetovanje",
    shortText:
      "Dnevno smo na raspolaganju klijentima ukoliko im treba savet u vezi poreskih obaveza ili imaju nedoumicu kako će se neka poslovna aktivnost poreski tretirati. ",
    viewDetails: "/services/poresko-savetovanje/",
    aosDelay: "400",
  },
  {
    iconName: "pe-7s-cart bg-00d280",
    title: "Pravne usluge",
    shortText:
      "Midafin je potpisala ugovor sa advokatskom kancelarijom kako bi svojim klijentima obezbedila osnovne pravne savete.Takođe naši klijenti mogu ostvariti popust u slučaju potrebe angažovanja advokatske kancelarije u pravnim poslovima.",
    viewDetails: "/services/pravne-usluge/",
    aosDelay: "500",
  },
  {
    iconName: "pe-7s-users bg-ff612f",
    title: "Cene usluga",
    shortText:
      "Bazirani smo na poslovanju bez skrivenih troškova. U cenu su uključene sve redovne obaveze – prijave i odjave zaposlenih, statistički izveštaji, poreske prijave i redovna komunikacija sa institucijama.",
    viewDetails: "/services/cene-usluga/",
    aosDelay: "600",
  },
];

const Services: React.FC = () => {
  return (
    <>
      <div className="bg-fcfbfb pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Naše usluge</h2>
            <p>
              Obavezujemo se da redovno knjižimo dokumentaciju, i pratimo stavke
              u bilansima, tako da su brojke uvek tačne i pouzdane, a
              dokumentacija uvek spremne za poreske i druge kontrole.
            </p>
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 6).map((value, i) => (
                <div className="col-lg-4 col-sm-6" key={i}>
                  <div
                    className="service-card-one"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <i className={value.iconName}></i>
                    <h3>
                      <Link href={value.viewDetails}>{value.title}</Link>
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
