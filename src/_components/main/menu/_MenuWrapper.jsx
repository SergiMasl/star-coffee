import React from "react";
import menuLis from "../../../_asses/jsons/menuLis.json";
import LogoEx from "../../../_asses/img/exemple.jpg";

export default function _MenuWrapper() {
  console.log(menuLis);
  return (
    <section className="menu-wrap">
      <h2 className="menu-title">Menu</h2>
      <div className="menu-grid-container">
        {menuLis.map((category) => (
          <div key={category.id} className="menu-item">
            <h1 className="menu-sub-title">{category.title}</h1>
            <ul className="menu-list-ul">
              {category.items.map((item) => (
                <li key={item.id} className="menu-list-item">
                  <a href="#">
                    <img className="menu-list-item-icon" src={LogoEx} />
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
