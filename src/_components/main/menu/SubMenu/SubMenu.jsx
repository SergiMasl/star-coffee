import React from "react";
import "./_submenu.sass";
import brew from "../../../../_asses/jsons/coffee/brew.json";
import SubMenuItem from "./SubMenuItem";
import { useParams } from "react-router-dom";
import LinkWrapMenu from "./LinkWrapMenu";
import "./_linkMenu.sass";

export default function SubMenu() {
  const { id } = useParams();

  console.log(id);

  return (
    <div className="sub-menu--wrapper">
      <LinkWrapMenu />
      <h2 className="sub-menu-title">Hot Coffees</h2>

      <SubMenuItem brew={brew} />
    </div>
  );
}
