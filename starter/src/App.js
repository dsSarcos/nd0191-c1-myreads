import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search"

import * as API from "./BooksAPI";
import { useState, useEffect } from "react";

const App = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    
    API.getAll().then((books) => {
      setBooks(books);
    });

  }, [books]);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home books={books} />} />
          <Route path="/search" element={<Search booksInShelves={books} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
};

export default App;
