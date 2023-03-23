import "./App.css";

import React, { useState } from "react";

// import React from "react";

import Header from "./components/Header/Header";
import Body from "./containers/Body";
import Footer from "./components/Footer/Footer";
import AllRoutes from "./utils/AllRoutes";

import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import Accessibility from "./components/Accessibility/Accessibility";




function App() {
  const [lang, setLanguage] = React.useState("En");


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
    <div className="App" data-testid="App">
      <Header lang={lang} setLang={setLanguage}  showSidebar={showSidebar}/>
      <Body lang={lang}> 
        <AllRoutes lang={lang} brightness_val={brightness_val} contrast_val={contrast_val} saturate_val={saturate_val} monochrome_val={monochrome_val}
          DSwitch={DSwitch} PSwitch={PSwitch} TSwitch={TSwitch} />
      </Body >
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
      <Footer lang={lang}/>
</div>
);
}

export default App;
