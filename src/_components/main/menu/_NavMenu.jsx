import React from "react";
import navMenuList from "../../../_asses/jsons/navMenuList.json";

export default function _NavMenu() {
  return (
    <nav className="menu-nav-wrap">
      <ul>
        {navMenuList.map((item) => (
          <li
            key={item.description}
            className={`menu-nav-link ${
              item.title == "title" && "menu-nav-link-title"
            }`}
          >
            <a href="#"> {item.description}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
