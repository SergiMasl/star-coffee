import React from "react";
import menuLis from "../../../_asses/jsons/menuLis.json";

export default function _NavMenuSM() {
  return (
    <nav className="menu-nav-wrap-sm">
      <ul>
        {menuLis.map((item) => (
          <li key={item.id}>{item.id}</li>
        ))}
      </ul>
    </nav>
  );
}
