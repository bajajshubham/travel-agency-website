




import React from "react";
import {
  AccessibilityNew as AccessibilityNewIcon,
  Language as LanguageIcon,
} from "@mui/icons-material";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { Select, MenuItem } from "@mui/material";

const Header = (props) => {
  

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
          <Select
            value={props.lang}
            onChange={(e) => props.setLang(e.target.value)}
            className="props language-dropdown"
          >
            <MenuItem value="En">En</MenuItem>
            <MenuItem value="De">De</MenuItem>
            <MenuItem value="Es">हिंदी</MenuItem>
          </Select>
          <span>Login</span>
          <span>Sign up</span>
        </div>
      </div>
      <div className="header-bottom-part">
        <NavLink className="nav-items" to="/">
          {props.lang === "En" ? "Home" : props.lang === "De" ? "Startseite" : "घर"}
        </NavLink>
        <NavLink className="nav-items" to="/trips">
          {props.lang === "En" ? "Trips" : props.lang === "De" ? "Reisen" : "यात्राएं"}
        </NavLink>
        <NavLink className="nav-items" to="/services">
          {props.lang === "En" ? "Services" : props.lang === "De" ? "Dienstleistungen" : "सेवाएं"}
        </NavLink>
        <NavLink className="nav-items" to="/help">
          {props.lang === "En" ? "Help" : props.lang === "De" ? "Hilfe" : "मदद"}
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
