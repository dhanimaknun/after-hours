import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Library from "./pages/Library.jsx";
import Favorites from "./pages/Favorites.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/library" element={<Library />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}