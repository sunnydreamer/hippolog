import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import Home from "./components/Home/Home";
import Settings from "./components/Settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<div className="main-content">Home</div>} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
