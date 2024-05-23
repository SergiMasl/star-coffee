import React from "react";
import "./_menu.sass";
import _NavMenu from "./_NavMenu";
import _MenuWrapper from "./_MenuWrapper";
import _NavMenuSM from "./_NavMenuSM";
import SubMenu from "./SubMenu/SubMenu";
import { Route, Routes } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu-container">
      <_NavMenu />
      <_NavMenuSM />
      <Routes>
        <Route path="/" element={<_MenuWrapper />} />
        {/* <Route path="/submenu:id" element={<SubMenu />} /> */}
        <Route path="/submenu" element={<SubMenu />} />
      </Routes>
    </div>
  );
}
