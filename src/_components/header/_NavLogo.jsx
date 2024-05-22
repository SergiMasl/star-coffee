import React from "react";
import Logo from "../../_asses/svgs/NavLogo.svg";
import { Link } from "react-router-dom";

export default function _NavLogo({ isOpen, setIsBurgerOn, setIsOpen }) {
  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
      setIsBurgerOn(false);
    }
  };

  return (
    <Link to={"/star-coffee"} className="nav-logo" onClick={() => toggleMenu()}>
      <img src={Logo} />
    </Link>
  );
}
