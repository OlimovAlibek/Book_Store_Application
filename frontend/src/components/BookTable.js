import React, { useState } from "react";

const BookTable = ({ books, loading }) => {
  const [expandedRow, setExpandedRow] = useState(null);

  if (loading) return <p>Loading...</p>;

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-200">
          <th>#</th>
          <th>ISBN</th>
          <th>Title</th>
          <th>Author(s)</th>
          <th>Publisher</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <>
            <tr
              key={book.id}
              className="cursor-pointer hover:bg-gray-100"
              onClick={() => setExpandedRow(expandedRow === index ? null : index)}
            >
              <td>{index + 1}</td>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publisher}</td>
            </tr>
            {expandedRow === index && (
              <tr className="bg-gray-50">
                <td colSpan={5} className="p-4">
                  <div>
                    <h3 className="font-bold text-lg">{book.title}</h3>
                    <p>By {book.author}</p>
                    <p>{book.publisher}</p>
                    <p>Likes: {book.likes}</p>
                    <p>Reviews: {book.reviews}</p>
                  </div>
                </td>
              </tr>
            )}
          </>
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;
