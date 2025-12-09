"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import errorImg from "../../../public/images/404.png";

const ErrorContent: React.FC = () => {
  return (
    <>
      <div className="error-area ptb-100">
        <div className="container">
          <div className="error-content">
            <Image src={errorImg} alt="Error" width={810} height={448} />
            <h3>Greška 404 : stranica nije pronađena</h3>
            <p>
              Stranica koju tražite je možda uklonjena, jer joj je promenjeno ime ili je privremeno nedostupna.
            </p>

            <div className="back-btn">
              <Link href="/" className="btn btn-primary">
                Početna
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorContent;
