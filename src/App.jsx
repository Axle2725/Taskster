import { Route, Routes } from "react-router-dom";
import "./Style.css";
import Form from "./pages/Form";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
    </Routes>
  );
}

export default App;
