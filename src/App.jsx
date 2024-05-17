import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./pages/Hero";
import UserInfo from "./components/UserInfo"; // Asegúrate de que la ruta sea correcta
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/user-info" element={<UserInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
