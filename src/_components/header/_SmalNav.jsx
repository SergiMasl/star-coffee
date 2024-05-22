import React from "react";
import LogBtm from "./log/LogBtm";

export default function _SmalNav({
  isBurgerOn,
  setIsBurgerOn,
  setIsOpen,
  sing,
  log,
}) {
  const toggleMenu = () => {
    setIsOpen(false);
    setIsBurgerOn(false);
  };

  return (
    <nav className={`nav--sm ${isBurgerOn ? "visble" : ""}`}>
      <ul>
        <li>
          <a href="#" onClick={() => toggleMenu()}>
            MENU
          </a>
        </li>
        <li>
          <a href="#" onClick={() => toggleMenu()}>
            REWARDS
          </a>
        </li>
        <li>
          <a href="#" onClick={() => toggleMenu()}>
            GIFT CARTS
          </a>
        </li>
      </ul>
      <div className="nav-line-sm"></div>
      <div className="h-wrap-lf-log-sm">
        <LogBtm log={log} />
        <LogBtm log={sing} />
      </div>
    </nav>
  );
}
