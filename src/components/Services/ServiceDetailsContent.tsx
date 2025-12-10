"use client";

import React from "react";
import {ServiceData} from "../../../libs/services";

// import singleServiceImg from "../../../public/images/services/single-service.jpg";

type Props = {
  service: ServiceData;
};

const ServiceDetailsContent: React.FC<Props> = ({ service }) => {
  return (
    <>
      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="services-details-desc">
                <h2>{service.shortText}</h2>
                {service?.content?.map((item: any, index: number) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="services-details-info">
                <h3>Process rada: </h3>
                <ul>
                  <li>
                    Pružamo uslugu vođenja poslovnih knjiga uz izradu i predaju završnog računa i poreskog bilansa.
                  </li>
                  <li>
                    Zajedno sa vama, koji poznajete svoje poslovanje, formulišemo izveštaje koji su Vam potrebni za praćenje poslovanja.
                  </li>
                  <li>
                    Na raspolaganju smo pravnim licima koja žele da izmeste obračun zarada, vođenje evidencije odsustva i administriranje zaposleni.
                  </li>
                  <li>
                    Dnevno smo na raspolaganju klijentima ukoliko im treba savet u vezi poreskih obaveza ili imaju nedoumicu kako će se neka poslovna aktivnost poreski tretirati.
                  </li>
                  <li>
                    Midafin je potpisala ugovor sa advokatskom kancelarijom kako bi svojim klijentima obezbedila osnovne pravne savete.
                  </li>
                  <li>
                    Bazirani smo na poslovanju bez skrivenih troškova. U cenu su uključene sve redovne obaveze – prijave i odjave zaposlenih, statistički izveštaji, poreske prijave i redovna komunikacija sa institucijama.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
