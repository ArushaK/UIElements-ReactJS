import React, { useState } from "react";

import classes from "./Header.module.css";
import SideDrawer from "./SideDrawer";

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>HEADER</h1>
      </header>
    </>
  );
}

export default Header;
