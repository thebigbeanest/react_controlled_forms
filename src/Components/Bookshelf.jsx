import { useState } from 'react';
import './Bookshelf.css'; // Made a basic css file but it's not needed since it's already covered by index.css

function Bookshelf() {
  // State to hold the list of books
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  // Initial state for the new book form
  const initialState = {
    title: '',
    author: ''
  };

  // State to hold the form input
  const [newBook, setNewBook] = useState(initialState);

  // Handle changes in the input fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook((prevNewBook) => ({
      ...prevNewBook,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add the new book to the list
    setBooks((prevBooks) => [...prevBooks, newBook]); // ... spread operator used here to iterate through previous books and add a new one dynamically
    // Reset the form to a new initial state
    setNewBook(initialState);
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bookshelf;









