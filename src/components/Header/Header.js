import React from "react";
import {
  AccessibilityNew as AccessibilityNewIcon,
  Language as LanguageIcon,
} from "@mui/icons-material";
import "./Header.css";
import { NavLink } from "react-router-dom";

let lang = "En";

const Header = () => {
  return (
    <div className="header">
      <div className="header-top-part">
        <div className="web">
          <h1>
            Travel<span style={{ color: "#E45E35" }}>GO</span>at
          </h1>
        </div>
        <div className="activity">
          <span>
            <AccessibilityNewIcon />
          </span>
          <span>
            <LanguageIcon />
          </span>
          {lang}
          {/* <span>{lang}</span> */}
          <span>Login</span>
          <span>Sign up</span>
        </div>
      </div>
      <div className="header-bottom-part">
        <NavLink className="nav-items" to="/">
          Home
        </NavLink>
        <NavLink className="nav-items" to="/trips">
          Trips
        </NavLink>
        <NavLink className="nav-items" to="/services">
          Services
        </NavLink>
        <NavLink className="nav-items" to="/help">
          Help
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
