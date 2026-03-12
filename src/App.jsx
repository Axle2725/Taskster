import { Route, Routes } from "react-router-dom";
// import "./Style.css";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Home />} />
    </Routes>
  );
}

export default App;
