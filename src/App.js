import "./style/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Form from "./pages/form";
import Test from "./pages/test";
function App() {
  return (
    <div className="">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/test" element={<Test />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
