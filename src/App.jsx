import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Library from "./pages/Library";
import Favorites from "./pages/Favorites";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/library" element={<Library />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}