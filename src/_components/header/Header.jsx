import React, { useState, useEffect } from "react";
import _NavLogo from "./_NavLogo";
import "./_header.sass";
import _NavBtms from "./_NavBtms";
import _FindStore from "./_FindStore";
import LogBtm from "./log/LogBtm";
import Burger from "./Burger";
import SmallNav from "./_SmalNav";

function Header() {
  const log = { id: "log_in", title: "Log in", classProp: "log_btm" };
  const sing = { id: "sing_up", title: "Join now", classProp: "sing_btn" };
  const [isBurgerOn, setIsBurgerOn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="h-wrap-rg">
        <_NavLogo
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setIsBurgerOn={setIsBurgerOn}
        />
        <_NavBtms />
        <Burger
          setIsBurgerOn={setIsBurgerOn}
          isBurgerOn={isBurgerOn}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
      <div className="h-wrap-lf">
        <_FindStore />
        <div className="h-wrap-lf-log">
          <LogBtm log={log} />
          <LogBtm log={sing} />
        </div>
      </div>
      <SmallNav
        isBurgerOn={isBurgerOn}
        setIsBurgerOn={setIsBurgerOn}
        setIsOpen={setIsOpen}
        sing={sing}
        log={log}
      />
    </div>
  );
}

export default Header;
//Logo
//nav btms
//nav btms
