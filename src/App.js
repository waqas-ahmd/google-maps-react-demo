import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import Simple from "./components/maps/Simple";
import Home from "./components/Home";
import Markers from "./components/maps/Markers";
import ClickableMarkers from "./components/maps/ClickableMarkers";
import Polygon from "./components/maps/Polygon";
import Polyline from "./components/maps/Polyline";
import Circle from "./components/maps/Circle";

function App() {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-row">
      <SideBar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Simple />} path="/simple" />
        <Route element={<Markers />} path="/markers" />
        <Route element={<ClickableMarkers />} path="/clickable-markers" />
        <Route element={<Polygon />} path="/polygon" />
        <Route element={<Polyline />} path="/polyline" />
        <Route element={<Circle />} path="/circle" />
      </Routes>
    </div>
  );
}

export default App;
