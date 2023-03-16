import "./App.css";
import Header from "./components/Header/Header";
import Body from "./containers/Body";
import Footer from "./components/Footer/Footer";
import AllRoutes from "./utils/AllRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <Body>
        <AllRoutes />
      </Body>
      <Footer />
    </div>
  );
}

export default App;
