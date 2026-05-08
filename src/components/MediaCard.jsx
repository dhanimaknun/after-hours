export default function MediaCard({ id, title, image, rating, onDelete }) {
  return (
    <div className="bg-white dark:bg-zinc-800 text-black dark:text-white rounded-3xl overflow-hidden shadow-sm relative">
      
      {/* DELETE BUTTON */}
      <button
        onClick={() => onDelete(id)}
        className="absolute top-2 right-2 bg-black/70 text-white w-7 h-7 rounded-full text-sm hover:bg-black"
      >
        ✕
      </button>

      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-amber-500 text-sm">⭐ {rating}</p>
      </div>
    </div>
  );
}