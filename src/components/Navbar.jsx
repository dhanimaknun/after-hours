import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-zinc-800 shadow-sm">
  <h1 className="text-xl font-bold">Media Haven</h1>

  <div className="space-x-4">
    <a className="hover:underline">Home</a>
    <a className="hover:underline">Library</a>
  </div>
</nav>
  );
}