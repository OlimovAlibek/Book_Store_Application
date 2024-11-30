import React, { useEffect, useState } from "react";
import axios from "axios";
import BookTable from "./components/BookTable";
import FilterPanel from "./components/FilterPanel";

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [seed, setSeed] = useState(12345);
  const [likes, setLikes] = useState(0);
  const [sortBy, setSortBy] = useState("");
  const [language, setLanguage] = useState("English (US)");

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5002/books", {
        params: { seed, page, likes, sortBy },
      });
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [page, seed, likes, sortBy]);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <FilterPanel
        setSeed={setSeed}
        setLikes={setLikes}
        setSortBy={setSortBy}
        setLanguage={setLanguage}
        page={page}
        setPage={setPage}
      />
      <BookTable books={books} loading={loading} />
    </div>
  );
};

export default App;
