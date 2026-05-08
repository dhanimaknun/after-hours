import { useState, useEffect  } from "react";
import Navbar from "../components/Navbar";
import MediaCard from "../components/MediaCard";
import { mediaData } from "../data/mediaData";

export default function Home() {
  // state utama (data media)
  const [media, setMedia] = useState(() => {
  const saved = localStorage.getItem("media");

  if (saved) {
    return JSON.parse(saved);
  } else {
    return mediaData;
  }
});

  // state form
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // function tambah data
  const handleAdd = () => 
    {
      if (!title || !image || !rating) return;

      const newItem = {
        id: Date.now(),
        title,
        image,
        rating,
      };

      setMedia([newItem, ...media]);

      // reset input
      setTitle("");
      setImage("");
      setRating("");
    };

 useEffect(() => {
    localStorage.setItem("media", JSON.stringify(media));
  }, [media]);

  const handleDelete = (id) => {
  const updated = media.filter((item) => item.id !== id);
  setMedia(updated);
  };

  const handleImageUpload = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onloadend = () => {
    setImage(reader.result); // ini base64
  };

  reader.readAsDataURL(file);
  };

  const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem("theme") === "dark";
  });

   useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <Navbar />

      <main className="bg-stone-100 dark:bg-zinc-900 text-black dark:text-white">
        {/* TITLE */}
        <h1 className="text-4xl font-bold mb-6">
          THIS MONTH
        </h1>

        <div className="mb-4 px-4 py-2 rounded-lg bg-white dark:bg-zinc-800">
          DARK MODE TEST
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mb-4 px-3 py-1 border rounded-lg"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        <button
          onClick={() => setIsOpen(true)}
          className="mb-6 px-5 py-2 bg-black text-white rounded-full hover:opacity-80"
        >
          + Add Entry
        </button>

        {/* FORM */}
        {isOpen && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    
    <div className="bg-white rounded-2xl p-6 w-full max-w-md space-y-4 relative">
      
      <h2 className="text-xl font-bold">
        Add New Entry
      </h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full rounded-lg"
      />

      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="border p-2 w-full rounded-lg"
      />

      {image && (
      <img
        src={image}
        alt="preview"
        className="w-full h-48 object-cover rounded-lg border"
      />
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="border p-2 w-full rounded-lg"
      />

      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="border p-2 w-full rounded-lg"
      />

      <div className="flex justify-end gap-2">
        <button
          onClick={() => setIsOpen(false)}
          className="px-4 py-2 rounded-lg border"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            handleAdd();
            setIsOpen(false);
          }}
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          Save
        </button>
      </div>

    </div>
  </div>
)}

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {media.map((item) => (
            <MediaCard
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              rating={item.rating}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </main>
    </>
  );
}