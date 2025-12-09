"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { menus } from "../../../libs/menus";
// import MegaMenu from "./MegaMenu";

const Navbar: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const elementId = document.getElementById("navbar");

    const onScroll = () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    };

    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <div id="navbar" className="navbar-area">
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container">
          <Link href="/" className="navbar-brand">
            <Image
              src="/images/logo_midafin_white.svg"
              alt="logo"
              width={150}
              height={50}
              priority
              unoptimized
            />
          </Link>

          <button
            onClick={toggleNavbar}
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>

          <div className={classOne} id="navbarSupportedContent">
            <ul className="navbar-nav">
              {menus.map((menuItem) => (
                <MenuItem key={menuItem.label} {...menuItem} />
              ))}
            </ul>

            <div className="others-options">
              <Link href="/contact-us/" className="btn btn-primary">
                Kontaktirajte nas
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
