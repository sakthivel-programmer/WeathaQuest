import React from "react";
// importing CSS module
import Styles from "./navbar.module.css"
// importing logo IMAGE
import logo from "../images/logo.png"
// functional component
function Navbar(){
  // JSX that to be rendered
  return (
    <div className={Styles.navbar}>
      {/* Application Logo */}
      <img className={Styles.logo} src={logo} alt="Logo"/>
      {/* Applicaiton Name */}
      <p className={Styles.appname}>
        WeathaQuest
      </p>

    </div>
  )
};
// Exporting component
export default Navbar;
