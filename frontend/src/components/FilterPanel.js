import React from "react";

const FilterPanel = ({ setSeed, setLikes, setSortBy, setLanguage, page, setPage }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <select
        onChange={(e) => setLanguage(e.target.value)}
        className="border rounded p-2"
      >
        <option value="English (US)">English (US)</option>
        <option value="Spanish">Spanish</option>
        {/* Add more languages */}
      </select>

      <button
        onClick={() => setSeed(Math.floor(Math.random() * 100000))}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Shuffle Seed
      </button>

      <input
        type="range"
        min="0"
        max="100"
        onChange={(e) => setLikes(e.target.value)}
        className="w-1/3"
      />

      <select
        onChange={(e) => setSortBy(e.target.value)}
        className="border rounded p-2"
      >
        <option value="">Sort By</option>
        <option value="likes">Likes</option>
        <option value="reviews">Reviews</option>
      </select>
    </div>
  );
};

export default FilterPanel;
