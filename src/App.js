import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Body from "./containers/Body";
import Footer from "./components/Footer/Footer";
import AllRoutes from "./utils/AllRoutes";



import Customize from "./components/Customize";
function App() {
  const [lang, setLanguage] = React.useState("En");
  return (
    <div className="App">
      <Header lang={lang} setLang={setLanguage}/>
      <Body>
        <AllRoutes lang={lang} />
      </Body >
      <Footer lang={lang}/>
    </div>
  );
}

export default App;
