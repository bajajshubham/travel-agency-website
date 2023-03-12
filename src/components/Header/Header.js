// import React from "react";
// import {
//   AccessibilityNew as AccessibilityNewIcon,
//   Language as LanguageIcon,
// } from "@mui/icons-material";
// import "./Header.css";
// import { NavLink } from "react-router-dom";
// import { Select, MenuItem } from "@mui/material";


// const Header = () => {
//   const [lang, setLanguage] = React.useState("En");


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
//             <LanguageIcon />
//           </span>
 
//           <Select
//             value={lang}
//             onChange={(e) => setLanguage(e.target.value)}
//             className="language-dropdown"
// >
//             <MenuItem value="En">English </MenuItem>
//             <MenuItem value="De">Deutsch</MenuItem>
//             <MenuItem value="Hi">Hindi</MenuItem>
//           </Select>
//           {/* <span>{lang}</span> */}
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
//   Language as LanguageIcon,
// } from "@mui/icons-material";
// import "./Header.css";
// import { NavLink } from "react-router-dom";
// import { Select, MenuItem } from "@mui/material";


// const Header = () => {
//   const [lang, setLanguage] = React.useState("En");


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
//             <LanguageIcon />
//           </span>
 
//           <Select
//             value={lang}
//             onChange={(e) => setLanguage(e.target.value)}
//             className="language-dropdown"
//           >
//             <MenuItem value="En">English</MenuItem>
//             <MenuItem value="De">Deutsch</MenuItem>
//             <MenuItem value="Hi">हिन्दी</MenuItem>
//           </Select>
//           {/* <span>{lang}</span>     //shows the language code */} 
//           <span>Login</span>
//           <span>Sign up</span>
//         </div>
//       </div>
//       <div className="header-bottom-part">
//         <NavLink className="nav-items" to="/">
//           {lang === "Hi" ? "होम" : "Home"}
//           {lang === "De" ? "Home": "Home"}
//         </NavLink>
//         <NavLink className="nav-items" to="/trips">
//           {lang === "Hi" ? "यात्राएँ" : "Trips"}
//           {lang === "De" ? "Reisen": "Trips"}
//         </NavLink>
//         <NavLink className="nav-items" to="/services">
//           {lang === "Hi" ? "सेवाएं" : "Services"}
//           {lang === "De" ? "Reisen": "Trips"}

//         </NavLink>
//         <NavLink className="nav-items" to="/help">
//           {lang === "Hi" ? "सहायता" : "Help"}
//           {lang === "De" ? "Reisen": "Trips"}

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

const Header = () => {
  const [lang, setLanguage] = React.useState("En");

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
            value={lang}
            onChange={(e) => setLanguage(e.target.value)}
            className="language-dropdown"
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
          {lang === "En" ? "Home" : lang === "De" ? "Startseite" : "घर"}
        </NavLink>
        <NavLink className="nav-items" to="/trips">
          {lang === "En" ? "Trips" : lang === "De" ? "Reisen" : "यात्राएं"}
        </NavLink>
        <NavLink className="nav-items" to="/services">
          {lang === "En" ? "Services" : lang === "De" ? "Dienstleistungen" : "सेवाएं"}
        </NavLink>
        <NavLink className="nav-items" to="/help">
          {lang === "En" ? "Help" : lang === "De" ? "Hilfe" : "मदद"}
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
