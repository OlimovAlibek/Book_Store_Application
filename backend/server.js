const express = require("express");
const cors = require("cors");
const { faker } = require("@faker-js/faker");

const app = express();
app.use(cors());

app.get("/books", (req, res) => {
  const { seed, page, likes, reviews } = req.query;

  // Set the seed for consistent data generation
  const finalSeed = parseInt(seed || "0") + parseInt(page || "1");
  faker.seed(finalSeed);

  const books = [];
  for (let i = 0; i < 20; i++) {
    books.push({
      id: faker.string.uuid(),
      title: faker.commerce.productName(),
      author: faker.person.fullName(),
      publisher: faker.company.name(),
      likes: Math.floor(Math.random() * (likes || 100)),
      reviews: Math.floor(Math.random() * (reviews || 100)),
    });
  }

  res.json(books);
});

app.listen(5002, () => {
  console.log("Server running on http://localhost:5002");
});
