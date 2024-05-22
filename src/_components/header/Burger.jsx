import React from "react";

export default function Burger({
  setIsBurgerOn,
  isBurgerOn,
  isOpen,
  setIsOpen,
}) {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsBurgerOn(!isBurgerOn);
  };

  return (
    <div className="burger-menu" onClick={toggleMenu}>
      <div className={`burger ${isOpen ? "open" : ""}`}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
}
