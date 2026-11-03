import express from 'express';

const app = express();
const PORT = 4000;
app.use(express.json());

let books = [
  { id: 1, title: 'The Alchemist', author: 'Paulo Coelho', price: 350, category: 'Fiction' },
  { id: 2, title: 'Atomic Habits', author: 'James Clear', price: 450, category: 'Self-help' },
  { id: 3, title: 'Clean Code', author: 'Robert C. Martin', price: 550, category: 'Programming' }
];

function isValidBook(book) {
  return book &&
    Number.isInteger(Number(book.id)) && Number(book.id) > 0 &&
    typeof book.title === 'string' && book.title.trim() !== '' &&
    typeof book.author === 'string' && book.author.trim() !== '' &&
    Number.isFinite(Number(book.price)) && Number(book.price) >= 0 &&
    typeof book.category === 'string' && book.category.trim() !== '';
}

app.get('/books', (request, response) => {
  response.json(books);
});

app.get('/books/:id', (request, response) => {
  const book = books.find((item) => item.id === Number(request.params.id));
  if (!book) return response.status(404).json({ message: 'Book not found' });
  response.json(book);
});

app.post('/books', (request, response) => {
  const newBook = request.body;
  if (!isValidBook(newBook)) {
    return response.status(400).json({ message: 'Provide id, title, author, a non-negative price, and category.' });
  }
  if (books.some((book) => book.id === Number(newBook.id))) {
    return response.status(400).json({ message: 'A book with this id already exists.' });
  }
  const createdBook = {
    id: Number(newBook.id),
    title: newBook.title.trim(),
    author: newBook.author.trim(),
    price: Number(newBook.price),
    category: newBook.category.trim()
  };
  books.push(createdBook);
  response.status(201).json({ message: 'Book added successfully', book: createdBook });
});

app.put('/books/:id', (request, response) => {
  const bookId = Number(request.params.id);
  const index = books.findIndex((book) => book.id === bookId);
  if (index === -1) return response.status(404).json({ message: 'Book not found' });

  const updatedBook = { ...request.body, id: bookId };
  if (!isValidBook(updatedBook)) {
    return response.status(400).json({ message: 'Provide title, author, a non-negative price, and category.' });
  }
  books[index] = {
    id: bookId,
    title: updatedBook.title.trim(),
    author: updatedBook.author.trim(),
    price: Number(updatedBook.price),
    category: updatedBook.category.trim()
  };
  response.json({ message: 'Book updated successfully', book: books[index] });
});

app.delete('/books/:id', (request, response) => {
  const bookId = Number(request.params.id);
  const index = books.findIndex((book) => book.id === bookId);
  if (index === -1) return response.status(404).json({ message: 'Book not found' });
  const [deletedBook] = books.splice(index, 1);
  response.json({ message: 'Book deleted successfully', book: deletedBook });
});

app.use((request, response) => {
  response.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Express Server running at http://localhost:${PORT}`);
});
