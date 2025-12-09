"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../../public/images/logo.png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/images/logo_midafin_white.svg"
                      alt="Logo"
                      width={150}
                      height={40}
                    />
                  </Link>
                </div>

                <p>
                  Jasno. Tačno. Pouzdano.
                  <br />
                  Uređene finansije, jasni izveštaji i stabilan sistem koji
                  podržava rast vašeg poslovanja. Dugogodišnje iskustvo u radu
                  sa malim, srednjim i velikim pravnim licima. Usluge pružamo u
                  ERP sistemu Pantheon, uz stalnu komunikaciju i dostupnost
                  klijentima.
                </p>

                {/* <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget ml-4 pl-5"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <h3>Istažite</h3>

                <ul className="list">
                  <li>
                    <Link href="/">Početna</Link>
                  </li>
                  <li>
                    <Link href="/about/">O nama</Link>
                  </li>
                  <li>
                    <Link href="/services/">Usluge</Link>
                  </li>
                  <li>
                    <Link href="/pricing/">Cenovnik</Link>
                  </li>
                  <li>
                    <Link href="/contact-us/">Kontakt</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-footer-widget ml-4"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <h3>Brzi linkovi</h3>

                <ul className="list">
                  <li>
                    <Link href="/privacy-policy/">Politika privatnosti</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions/">Uslovi korišćenja</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <h3>Budimo u kontaktu</h3>

                <ul className="get-in-touch">
                  <li>
                    <i className="fa-solid fa-location-dot"></i> Kumodraška 76,
                    Beograd, <br /> BG 11000, SRB
                  </li>
                  <li>
                    <i className="fa-solid fa-headset"></i>
                    <a href="tel:+381642973235">+381 64 297 32 35</a>
                    <br />
                    <a href="tel:+381642973235">+381 64 297 32 35</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:hello@pungent.com">office@midafin.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <p>
              Autorska prava &copy; {currentYear} MIDAFIN. Sva prava rezervisana{" "}
              <a href="https://midafin.com" target="_blank">
                MIDAFIN
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
