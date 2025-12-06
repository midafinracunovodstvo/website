"use client";

import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <>
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-mail"></i>
                </div>
                <h3>Mail Adresa</h3>
                <p>
                  <a href="mailto:office@midafin.rs">office@midafin.rs</a>
                </p>
                <p>
                  <a href="mailto:rade@midafin.rs">rade@midafin.rs</a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-map-2"></i>
                </div>
                <h3>Posetite nas</h3>
                <p>
                  Kumodraška 76 v, Voždovac <br /> Beograd 11000, SRB
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-call"></i>
                </div>
                <h3>Telefoni</h3>
                <p>
                  <a href="tel:+381642973235">+381 64 297 32 35</a>
                </p>
                <p>
                  <a href="tel:+381642973235">+381 64 297 32 35</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
