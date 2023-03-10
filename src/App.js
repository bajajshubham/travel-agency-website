import "./App.css";
import Header from "./components/Header";
import AdvanceFiltering from './components/AdvanceFiltering'
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AdvanceFiltering />
      <Footer />
    </div>
  );
}

export default App;
