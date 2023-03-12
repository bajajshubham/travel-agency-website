import "./App.css";
import Header from "./components/Header/Header";
import Body from "./containers/Body";
import Filters from "./utils/Filters/Filters";
import Footer from "./components/Footer/Footer";
import AllRoutes from "./utils/AllRoutes";

import Customize from "./components/Customize";
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Body>
          <AllRoutes />
          <Customize />
        </Body>
        <Footer />
      </div>
    </>
  );
}

export default App;
