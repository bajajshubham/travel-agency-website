// import React from "react";
// import {
//   AccessibilityNew as AccessibilityNewIcon,
//   props.Language as props.LanguageIcon,
// } from "@mui/icons-material";
// import "./Header.css";
// import { NavLink } from "react-router-dom";
// import { Select, MenuItem } from "@mui/material";


// const Header = () => {
//   const [props.lang, setprops.Language] = React.useState("En");


//   return (
//     <div className="header">
//       <div className="header-top-part">
//         <div className="web">
//           <h1>
//             Travel<span style={{ color: "#E45E35" }}>GO</span>at
//           </h1>
//         </div>
//         <div className="activity">
//           <span>
//             <AccessibilityNewIcon />
//           </span>
//           <span>
//             <props.LanguageIcon />
//           </span>
 
//           <Select
//             value={props.lang}
//             onChange={(e) => setprops.Language(e.target.value)}
//             className="props.language-dropdown"
// >
//             <MenuItem value="En">English </MenuItem>
//             <MenuItem value="De">Deutsch</MenuItem>
//             <MenuItem value="Hi">Hindi</MenuItem>
//           </Select>
//           {/* <span>{props.lang}</span> */}
//           <span>Login</span>
//           <span>Sign up</span>
//         </div>
//       </div>
//       <div className="header-bottom-part">
//         <NavLink className="nav-items" to="/">
//           Home
//         </NavLink>
//         <NavLink className="nav-items" to="/trips">
//           Trips
//         </NavLink>
//         <NavLink className="nav-items" to="/services">
//           Services
//         </NavLink>
//         <NavLink className="nav-items" to="/help">
//           Help
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default Header;




// import React from "react";
// import {
//   AccessibilityNew as AccessibilityNewIcon,
//   props.Language as props.LanguageIcon,
// } from "@mui/icons-material";
// import "./Header.css";
// import { NavLink } from "react-router-dom";
// import { Select, MenuItem } from "@mui/material";


// const Header = () => {
//   const [props.lang, setprops.Language] = React.useState("En");


//   return (
//     <div className="header">
//       <div className="header-top-part">
//         <div className="web">
//           <h1>
//             Travel<span style={{ color: "#E45E35" }}>GO</span>at
//           </h1>
//         </div>
//         <div className="activity">
//           <span>
//             <AccessibilityNewIcon />
//           </span>
//           <span>
//             <props.LanguageIcon />
//           </span>
 
//           <Select
//             value={props.lang}
//             onChange={(e) => setprops.Language(e.target.value)}
//             className="props.language-dropdown"
//           >
//             <MenuItem value="En">English</MenuItem>
//             <MenuItem value="De">Deutsch</MenuItem>
//             <MenuItem value="Hi">हिन्दी</MenuItem>
//           </Select>
//           {/* <span>{props.lang}</span>     //shows the props.language code */} 
//           <span>Login</span>
//           <span>Sign up</span>
//         </div>
//       </div>
//       <div className="header-bottom-part">
//         <NavLink className="nav-items" to="/">
//           {props.lang === "Hi" ? "होम" : "Home"}
//           {props.lang === "De" ? "Home": "Home"}
//         </NavLink>
//         <NavLink className="nav-items" to="/trips">
//           {props.lang === "Hi" ? "यात्राएँ" : "Trips"}
//           {props.lang === "De" ? "Reisen": "Trips"}
//         </NavLink>
//         <NavLink className="nav-items" to="/services">
//           {props.lang === "Hi" ? "सेवाएं" : "Services"}
//           {props.lang === "De" ? "Reisen": "Trips"}

//         </NavLink>
//         <NavLink className="nav-items" to="/help">
//           {props.lang === "Hi" ? "सहायता" : "Help"}
//           {props.lang === "De" ? "Reisen": "Trips"}

//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default Header;





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
            <MenuItem value="En">English</MenuItem>
            <MenuItem value="De">German</MenuItem>
            <MenuItem value="Es">Hindi</MenuItem>
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
