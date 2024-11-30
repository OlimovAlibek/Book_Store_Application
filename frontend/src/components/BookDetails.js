import React, { useEffect, useState } from "react";
import axios from "axios";

const BookDetails = ({ book, onClose }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5002/book/${book.id}`);
        setDetails(response.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchDetails();
  }, [book]);

  if (!details) return <p>Loading details...</p>;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <button onClick={onClose} className="text-red-500 float-right">
          Close
        </button>
        <h2 className="text-xl font-bold">{details.title}</h2>
        <p className="text-gray-600">by {details.author}</p>
        <img src={details.coverImage} alt={details.title} className="my-4 w-full" />
        <h3 className="text-lg font-semibold">Reviews:</h3>
        <ul>
          {details.reviews.map((review, index) => (
            <li key={index} className="mb-2">
              <strong>{review.author}:</strong> {review.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookDetails;
