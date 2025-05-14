import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Topup_ml from "./pages/Topup_ml";
import NotFound from "./pages/NotFound";
import Account_ml from "./pages/Account_ml";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="topup_ml" element={<Topup_ml />}/>
      <Route path="account_ml" element={<Account_ml />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;