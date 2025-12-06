"use client";

import React, { useState, useRef } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const AboutContent: React.FC = () => {
  // Video Popup
  const [toggler, setToggler] = useState(false);

  // Rotation for 3D effect
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    const rotateY = (deltaX / (rect.width / 2)) * 15; // Max 15 degrees rotation
    const rotateX = -(deltaY / (rect.height / 2)) * 15; // Negative for correct direction

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="about-image">
                <div
                  ref={imageRef}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    transform: isHovering
                      ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                      : "perspective(1000px) rotateX(0deg) rotateY(0deg)",
                    transition: isHovering
                      ? "transform 0.1s ease-out"
                      : "transform 0.5s ease",
                  }}
                >
                  <Image
                    src="/images/about-img2.jpg"
                    alt="image"
                    className="rounded-10"
                    width={500}
                    height={750}
                    style={{
                      transform: isHovering ? "scale(1.05)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>

                <div className="video-box">
                  <div
                    className="video-btn"
                    onClick={() => setToggler(!toggler)}
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-content about-content-two">
                <div className="section-title">
                  <h2>O nama</h2>
                  <p>MIDAFIN je mlada firma osnovana u junu 2025. godine.</p>
                </div>

                <div className="about-text">
                  <h4>Ko smo mi?</h4>
                  <p>
                    MiDaFin je mlada firma osnovana u junu 2025. godine, ali iza
                    nje stoji više od 17 godina iskustva u računovodstvu,
                    finansijama i poslovnoj administraciji. Naše znanje potiče
                    iz rada u računovodstvenim agencijama i realnom sektoru — od
                    mikro i malih preduzeća, preko trgovine, pa sve do
                    kompleksnih proizvodnih sistema. Upravo ta kombinacija nam
                    daje posebnu prednost: razumemo i brojke i biznis.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Ideja MIDAFIN-a</h4>
                  <p>
                    MiDaFin je nastao iz potrebe da klijentima ponudimo uslugu
                    koja nije samo korektna, već stabilna, predvidiva i
                    maksimalno profesionalna. Spojili smo dugogodišnje iskustvo,
                    savremenu tehnologiju i moderan pristup u radu kako bi
                    pružili ono što današnjim preduzetnicima i firmama najviše
                    treba: kvalitetnu, blagovremenu i tačnu uslugu po
                    konkurentnim cenama.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Činjenice</h4>
                  <p>
                    Verujemo da je temelj svakog zdravog finansijskog sistema
                    upravo pouzdano računovodstvo. Zato radimo u jednom od
                    najboljih ERP sistema u regionu — Pantheonu — koji
                    obezbeđuje sigurnost podataka, preglednost procesa i
                    mogućnost detaljnog izveštavanja.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Misija</h4>
                  <p>
                    MiDaFin postoji sa jasnom misijom: da klijentima obezbedi
                    uredne finansije, stabilnu administraciju i svakodnevnu
                    podršku koja omogućava da se fokusiraju na razvoj svog
                    poslovanja.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 mt-5">
              <div className="section-title">
                <h3>Računovodstvo MiDaFin</h3>
                <p>Jasno. Tačno. Pouzdano.</p>
              </div>
              <div className="about-text">
                <h4>Jasno</h4>
                <p>
                  Objašnjavamo stvari jednostavno i razumljivo, bez stručnih
                  izraza koje klijent ne mora da zna. Dobijate izveštaje koji
                  imaju smisla, tumačenja koja možete da primenite i savete koji
                  rešavaju problem — umesto da stvaraju nove nedoumice. Jasna
                  komunikacija = brže odluke, manje grešaka i bolji uvid u
                  poslovanje.
                </p>
              </div>
              <div className="about-text">
                <h4>Tačno</h4>
                <p>
                  Svaka stavka u knjigama ima svoj trag, svaka promjena je
                  ispravno evidentirana, a svaki obračun je provereno precizan.
                  Tačnost nije samo tehnika — to je zaštita od rizika, kazni i
                  pogrešnih poslovnih odluka. Tačni podaci = stabilno i sigurno
                  poslovanje bez iznenađenja.
                </p>
              </div>
              <div className="about-text">
                <h4>Pouzdano</h4>
                <p>
                  Radimo blagovremeno, dostupni smo kad god je potreban savet i
                  preuzimamo odgovornost za kvalitet našeg rada. Pouzdanost
                  gradimo komunikacijom, tačnošću i stalnom usklađenošću sa
                  propisima. Pouzdana podrška = pouzdana administracija i
                  partner kom možete da verujete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
