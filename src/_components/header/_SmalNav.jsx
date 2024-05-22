import React from "react";
import LogBtm from "./log/LogBtm";
import { Link } from "react-router-dom";
import list from "../../_asses/jsons/headerMainBtms.json";

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
        {list.map((elem) => (
          <li key={elem.id}>
            <Link to={`star-coffee/${elem.link}`} onClick={() => toggleMenu()}>
              {elem.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav-line-sm"></div>
      <div className="h-wrap-lf-log-sm">
        <LogBtm log={log} />
        <LogBtm log={sing} />
      </div>
    </nav>
  );
}
