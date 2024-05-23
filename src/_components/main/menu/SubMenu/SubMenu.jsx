import React from "react";
import "./_submenu.sass";
import brew from "../../../../_asses/jsons/coffee/brew.json";
import { Link } from "react-router-dom";
import SubMenuItem from "./SubMenuItem";
import { useParams } from "react-router-dom";

export default function SubMenu() {
  const { id } = useParams();

  console.log(id);

  return (
    <div className="sub-menu--wrapper">
      <div className="sub-menu--title-wrap">
        <Link to="/star-coffee/menu">Menu</Link>
        <span>/</span>
        <p>Hot Coffees</p>
      </div>
      <h2 className="sub-menu-title">Hot Coffees</h2>

      <SubMenuItem brew={brew} />
    </div>
  );
}
