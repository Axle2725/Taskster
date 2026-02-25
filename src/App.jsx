import { Route, Routes } from "react-router-dom";
import "./Style.css";
import Form from "./pages/Form";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/taskpage" element={<Form />} />
    </Routes>
  );
}

export default App;
