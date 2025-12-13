"use client";

import React from "react";
import Link from "next/link";

const pricingData = [
  {
    title: "Start",
    price: "140",
    originalPrice: "180",
    duration: "/Mesečno",
    shortText: "do 3 zaposlena, do 40 faktura",
    aosDelay: "200",
    priceList: [
      { title: "Knjiženje dokumentacije" },
      { title: "Izrada završnog računa" },
      { title: "Obračun zarada" },
      { title: "Prijava i odjava zaposlenih" },
      { title: "Poresko savetovanje" },
      { title: "Zastupanje pred poreskim organima" },
      { title: "Popunjavanje statističkih obrazaca" },
    ],
  },
  {
    title: "Srednji",
    price: "240",
    originalPrice: "300",
    duration: "/Mesečno",
    shortText: "do 7 zaposlena, do 80 faktura",
    aosDelay: "200",
    priceList: [
      { title: "Knjiženje dokumentacije" },
      { title: "Izrada završnog računa" },
      { title: "Obračun zarada" },
      { title: "Prijava i odjava zaposlenih" },
      { title: "Poresko savetovanje" },
      { title: "Zastupanje pred poreskim organima" },
      { title: "Popunjavanje statističkih obrazaca" },
    ],
  },
  {
    title: "Premium",
    price: "340",
    originalPrice: "420",
    duration: "/Mesečno",
    shortText: "do 15 zaposlena, do 140 faktura",
    aosDelay: "200",
    priceList: [
      { title: "Knjiženje dokumentacije" },
      { title: "Izrada završnog računa" },
      { title: "Obračun zarada" },
      { title: "Prijava i odjava zaposlenih" },
      { title: "Poresko savetovanje" },
      { title: "Zastupanje pred poreskim organima" },
      { title: "Popunjavanje statističkih obrazaca" },
    ],
  },
];

const PricingStyleThree: React.FC = () => {
  return (
    <>
      <div className="pricing-area pt-100 pb-70 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Izaberite cenovni plan</h2>
            <p>
              <span style={{ color: "#ff2c9c" }}>
                Cene se odnose na PDV obveznike
                <br />
              </span>
              Za firme preko 15 zaposlenih i preko 140 faktura, kontaktirajte
              nas kako bi zajedno uradili analizu Vaših potreba i napravili
              preciznu ponudu. Takođe za firme i preduzetnike koji nisu u
              sistemu pdv-a cene se koriguju naniže.
            </p>
          </div>

          <div className="row justify-content-center">
            {pricingData &&
              pricingData.slice(0, 6).map((value, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <div
                    className="single-pricing-table"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="pricing-header">
                      <h3>{value.title}</h3>
                    </div>
                    
                    <div className="price">
                      <sup>&euro;</sup>
                      {value.price}

                      {value.originalPrice ? (
                        <span
                          style={{
                            marginLeft: "10px",
                            color: "#9ca3af", // siva
                            textDecoration: "line-through",
                            fontSize: "0.95em",
                            fontWeight: 500,
                          }}
                        >
                          <sup>&euro;</sup>
                          {value.originalPrice}
                        </span>
                      ) : null}

                      <sub>{value.duration}</sub>
                      <p className="info-text">{value.shortText}</p>
                    </div>

                    <ul className="pricing-features">
                      {value.priceList.map((value, i) => (
                        <li key={i}>
                          <i className="fa-solid fa-circle-check"></i>{" "}
                          {value.title}
                        </li>
                      ))}
                    </ul>

                    <div className="btn-box">
                      <Link
                        href="/contact-us/"
                        className="btn btn-primary"
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-delay="400"
                      >
                        Kontakt
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="row justify-content-center">
            <div className="col-12">
              Promo cene važe za klijente koji potpišu ugovor do kraja januara
              2026 !
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingStyleThree;
