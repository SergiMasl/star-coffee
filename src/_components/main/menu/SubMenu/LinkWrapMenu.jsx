import React from "react";
import { Link } from "react-router-dom";

export default function LinkWrapMenu({ link }) {
  console.log(link);
  return (
    <div className="sub-menu--title-wrap">
      <Link to="/star-coffee/menu">Menu</Link>
      <span>/</span>
      {!link ? (
        <p>Hot Coffees</p>
      ) : (
        <>
          <Link to="/star-coffee/menu/Hot_Coffees">Hot Coffees</Link>{" "}
          <span>/</span>
          <p>{link}</p>
        </>
      )}
    </div>
  );
}
