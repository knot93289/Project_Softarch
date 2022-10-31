import React from "react";
import Home from "./page/Home";
import Create from "./page/Create";
import Homepage from "./page/Homepage";
import Loginpage from "./page/Login";
import Hotels from "./page/Hotels";
import Activity from "./page/Activity";
import Cheap from "./page/Cheap";
import Long from "./page/Long";
import Near from "./page/Near";
import Hotelsinfo from "./page/Hotelsinfo";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Create" element={<Create />} />
      <Route path="/Login" element={<Loginpage />} />
      <Route path="/Homepage" element={<Homepage />} />
      <Route path="/Hotels" element={<Hotels />} />
      <Route path="/Activity" element={<Activity />} />
      <Route path="/Cheap" element={<Cheap />} />
      <Route path="/Long" element={<Long />} />
      <Route path="/Near" element={<Near />} />
      <Route path="Hotelsinfo" element={<Hotelsinfo />} />
    </Routes>
  );
}
export default App;
