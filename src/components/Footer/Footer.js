import React from "react";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import "./Footer.css";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer--top">
        <div className="TnC">
        
          <p>{props.lang === "En" ? "Privacy Policy" : props.lang === "De" ? "Datenschutz-Bestimmungen" : "गोपनीयता नीति"}</p>
          <p>{props.lang === "En" ? "Terms & Conditions" : props.lang === "De" ? "Geschäftsbedingungen" : "नियम एवं शर्तें"}</p>
          <p>{props.lang === "En" ? "About us" : props.lang === "De" ? "Über uns" : "हमारे बारे में"}</p>
          <p>{props.lang === "En" ? "About us" : props.lang === "De" ? "Häufig gestellte Fragen" : "पूछे जाने वाले प्रश्न"}</p>
        </div>
        <div className="contact">
        <p>{props.lang === "En" ? "About us" : props.lang === "De" ? "Kontaktiere uns" : "पसंपर्क करें"}</p>
          <div>
            <MailOutlineOutlinedIcon />
            <p>contactus@email.com</p>
          </div>
          <div>
            <CallOutlinedIcon />
            <p>+49 176 00000000</p>
          </div>
        </div>
      </div>
      <div className="social-media">
        <hr />
        <div>
          <InstagramIcon />
          <GoogleIcon />
          <FacebookOutlinedIcon />
        </div>
        <hr />
      </div>
      <p className="copyright">Copyright 2023. All rights reserved.</p>
    </div>
  );
};

export default Footer;
