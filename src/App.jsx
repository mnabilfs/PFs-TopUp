import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topup_ml from "./pages/Topup_ml";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="topup_ml" element={<Topup_ml />}/>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
