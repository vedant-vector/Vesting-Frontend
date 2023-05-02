import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import VestingPage from "./components/VestingPage";
import Claim from "./components/Claim";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Body />} />
          <Route path="/vesting" element={<VestingPage />} />
          <Route path="/claim" element={<Claim />} />
          <Route path="*" element={<Navigate to="/home" replace={true} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
