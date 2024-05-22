import React, { useState } from "react";
import navMenuList from "../../../_asses/jsons/navMenuList.json";

export default function _NavMenu() {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleDropdown = (id) => {
    console.log(id);
    setOpenCategory(id);
  };

  return (
    <nav className="menu-nav-wrap">
      <ul>
        {navMenuList.map((item) => (
          <li key={item.groupName}>
            <p
              className="nav-menu-title"
              onClick={() => toggleDropdown(item.groupName)}
            >
              {item.groupName}
            </p>
            <ul
              className={`sub-ul ${
                openCategory === item.groupName ? "visible" : ""
              }`}
            >
              {item.items.map((elem) => (
                <li key={elem}>{elem}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
