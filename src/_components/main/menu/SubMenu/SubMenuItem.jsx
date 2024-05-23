import React from "react";
import LogoAmer from "../../../../_asses/img/exemple.jpg";

export default function SubMenuItem({ brew }) {
  return (
    <div className="sub-menu-container">
      {brew.map((item) => (
        <div key={item.group}>
          <h3>{item.group}</h3>
          <div className="sub-menu-line"></div>
          <div className="sub-menu-content-wrapper">
            {item.items.map((elem) => (
              <div className="sub-menu-content" key={elem}>
                <img src={LogoAmer} />
                <p>{elem}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
