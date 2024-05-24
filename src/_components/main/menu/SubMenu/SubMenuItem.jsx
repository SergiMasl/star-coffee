import React from "react";
import LogoAmer from "../../../../_asses/img/exemple.jpg";
import { Link } from "react-router-dom";

export default function SubMenuItem({ brew }) {
  return (
    <div className="sub-menu-container">
      {brew.map((item) => (
        <div key={item.group}>
          {console.log(item)}
          <h3>{item.group}</h3>
          <div className="sub-menu-line"></div>
          <div className="sub-menu-content-wrapper">
            {item.items.map((elem) => (
              <Link
                to={`/star-coffee/product/${elem.link}`}
                className="sub-menu-content"
                key={elem.name}
              >
                <img src={LogoAmer} />
                <p>{elem.name}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
