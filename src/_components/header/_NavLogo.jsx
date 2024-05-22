import React from "react";
import Logo from "../../_asses/svgs/NavLogo.svg";

export default function _NavLogo({ isOpen, setIsBurgerOn, setIsOpen }) {
  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
      setIsBurgerOn(false);
    }
  };

  return (
    <a href="#" className="nav-logo" onClick={() => toggleMenu()}>
      <img src={Logo} />
    </a>
  );
}
