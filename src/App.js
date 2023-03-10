import "./App.css";
import Header from "./components/Header/Header";
import AdvanceFiltering from "./components/AdvanceFiltering";
import Footer from "./components/Footer/Footer";
import AllRoutes from "./utils/AllRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      {/* <AdvanceFiltering /> */}
      <Footer />
    </div>
  );
}

export default App;
