const express = require("express");
const cors = require("cors"); // Import cors
const app = express();
const books = require("./Book.json");
const PORT = 5000;

app.use(cors()); // Enable CORS

app.get("/", (req, res) => {
  res.json(books);
});
// app.get("/books/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const book = books.find((book) => book.id === id);
//   res.json(book);
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
