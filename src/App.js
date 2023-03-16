import "./App.css";
import Header from "./components/Header/Header";
import Body from "./containers/Body";
import Filters from "./utils/Filters/Filters";
import Footer from "./components/Footer/Footer";
import AllRoutes from "./utils/AllRoutes";
import Home from "./components/Home/Home";






function App() {

  return (
    <div className="App">
      <Header />
      <Body>
        <AllRoutes />
        <Filters />
      </Body>
      <Footer />
   
    </div>
  );
}

export default App;
