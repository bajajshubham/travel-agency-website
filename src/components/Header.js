import React from "react";
import {
  AccessibilityNew as AccessibilityNewIcon,
  Language as LanguageIcon,
} from "@mui/icons-material";
import "./Header.css";

let lang = "en";

const Header = () => {
  return (
    <div className="header">
      <div className="header-top-part">
        <div className="web">
          <h1>TravelGOat</h1>
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
        <div className="nav-items">Home</div>
        <div className="nav-items">Trips</div>
        <div className="nav-items">Services</div>
        <div className="nav-items">Help</div>
      </div>
    </div>
  );
};

export default Header;
