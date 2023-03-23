import React, { useState } from "react";
import {
  AccessibilityNew as AccessibilityNewIcon,
  Language as LanguageIcon,
} from "@mui/icons-material";
import "./Header.css";



import { Link, NavLink } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import Accessibility from "../Accessibility/Accessibility";

import { Select, MenuItem } from "@mui/material";
import logo from "../../assets/logo/TG_PNG.png";

const Header = (props) => {



  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [brightness_val, setBrightness] = useState(1);
  const [contrast_val, setContrast] = useState(1);
  const [saturate_val, setSaturate] = useState(1);
  const [monochrome_val, setMonochrome] = useState(0);
  const [DSwitch, setDSwitch] = useState(false);
  const [PSwitch, setPSwitch] = useState(false);
  const [TSwitch, setTSwitch] = useState(false);

  const getBrightness_val = (bright) => {
    setBrightness(bright);
    console.log(bright + "App");
  };

  const getContrast_val = (contrast) => {
    setContrast(contrast);
    console.log(contrast + "App");
  };

  const getSaturate_val = (saturate) => {
    setSaturate(saturate);
    // console.log(contrast + "App");
  };

  const getMonochrome_val = (gray) => {
    setMonochrome(gray);
    // console.log(contrast + "App");
  };

  const getDSwitchState = (Dval) => {
    setDSwitch(Dval);
    // console.log(Dval + "Dapp");
  };

  const getPSwitchState = (Pval) => {
    setPSwitch(Pval);
    // console.log(Pval + "Papp");
  };
  const getTSwitchState = (Tval) => {
    setTSwitch(Tval);
  };

  return (
    <div className="header">
      <div className="header-top-part">
        <div className="web">
          <img className="logo" src={logo} alt="brand logo" />
          <h1>
            Travel<span style={{ color: "#E45E35" }}>GO</span>at
          </h1>
        </div>
        <div className="activity">
          <NavLink className="accessibility-icon">

            <AccessibilityNewIcon onClick={props.showSidebar} />
          </NavLink>

            {/* <AccessibilityNewIcon onClick={showSidebar} />
          </NavLink> */}
          <nav className={sidebar ? "menu access-active" : "menu"}>
            <div className="menu-items">
              <Link>
                <AiIcons.AiOutlineClose onClick={showSidebar} color={"white"} />
              </Link>
              <Accessibility
                sendBrightness={getBrightness_val}
                sendContrast={getContrast_val}
                sendSaturate={getSaturate_val}
                sendMonochrome={getMonochrome_val}
                sendDSwitch={getDSwitchState}
                sendPSwitch={getPSwitchState}
                sendTSwitch={getTSwitchState}
                brightness_val={brightness_val}
                contrast_val={contrast_val}
                saturate_val={saturate_val}
                monochrome_val={monochrome_val}
                DSwitch={DSwitch}
                PSwitch={PSwitch}
                TSwitch={TSwitch}
              />
            </div>
          </nav>

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
          {props.lang === "En"
            ? "Home"
            : props.lang === "De"

              ? "Startseite"
              : "घर"}

            {/* ? "Startseite"
            : "घर"} */}

        </NavLink>
        <NavLink className="nav-items" to="/trips">
          {props.lang === "En"
            ? "Trips"
            : props.lang === "De"

              ? "Reisen"
              : "यात्राएं"}
{/* 
            ? "Reisen"
            : "यात्राएं"} */}

        </NavLink>
        <NavLink className="nav-items" to="/services">
          {props.lang === "En"
            ? "Services"
            : props.lang === "De"

              ? "Dienstleistungen"
              : "सेवाएं"}
{/* 
            ? "Dienstleistungen"
            : "सेवाएं"} */}

        </NavLink>
        <NavLink className="nav-items" to="/help">
          {props.lang === "En" ? "Help" : props.lang === "De" ? "Hilfe" : "मदद"}
        </NavLink>
      </div>
    </div>
  );
};


export default Header;


