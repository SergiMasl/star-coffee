import React from "react";
import { Link } from "react-router-dom";
import list from "../../_asses/jsons/headerMainBtms.json";

export default function _NavBtms() {
  return (
    <nav className="nav-btms-wrap">
      <ul>
        {list.map((elem) => (
          <li key={elem.id}>
            <Link to={`star-coffee/${elem.link}`}>{elem.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
