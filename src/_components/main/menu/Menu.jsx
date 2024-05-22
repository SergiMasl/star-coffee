import React from "react";
import "./_menu.sass";
import _NavMenu from "./_NavMenu";
import _MenuWrapper from "./_MenuWrapper";
import _NavMenuSM from "./_NavMenuSM";

export default function Menu() {
  return (
    <div className="menu-container">
      <_NavMenu />
      <_NavMenuSM />
      <_MenuWrapper />
    </div>
  );
}
