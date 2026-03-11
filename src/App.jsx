import { Route, Routes } from "react-router-dom";
import "./Style.css";
import Form from "./pages/Form";
import Register from "./pages/Register";
import Landing from "./pages/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/taskpage" element={<Form />} />
      </Route>
    </Routes>
  );
}

export default App;
