"use client";

import React, { useState, useRef } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const About: React.FC = () => {
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
              <div
                className="about-image"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
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
                  src="/images/about-img1.jpg"
                  alt="image"
                  className="rounded-10"
                  width={500}
                  height={750}
                  style={{
                    transform: isHovering ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.3s ease",
                  }}
                />

                <div className="video-box">
                  <div
                    onClick={() => setToggler(!toggler)}
                    className="video-btn"
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div
                className="about-content about-content-two"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <div className="section-title">
                  <h2>O nama</h2>
                  <p>
                    MIDAFIN je mlada firma osnovana u junu 2025. godine.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Ko smo mi</h4>
                  <p>
                    Posle 17 godina rada u računovodstvu i finansijama — u agenciji i u privredi  sa malim, srednjim i velikim pravnim licima kako u trgovini tako i u proizvodnji — osnovali smo firmu koja pruža pouzdane i profesionalne usluge: računovodstvo, poresko savetovanje i obračun zarada.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Ideja MIDAFIN-a</h4>
                  <p>
                    Ideja MIDAFIN-a je da kroz korišćenje stečenog znanja, savremene tehnologije i novih oblika rada, pružimo kvalitetnu, blagovremenu i tačnu uslugu — po konkurentnim cenama.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Činjenice</h4>
                  <p>
                    Svesni činjenice da „što se grbo rodi, vreme ne ispravi“, odlučili smo da našim klijentima pružamo usluge u jednom od najboljih ERP sistema na tržištu Srbije i regiona — PANTHEON-u.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
