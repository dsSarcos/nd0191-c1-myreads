import "../App.css"

import * as API from "../BooksAPI";
import Book from "../components/Book";

import { useState } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const Search = (props) => {

    const { booksInShelves } = props;

    const [books, setBooks] = useState([]);

    const [searchError, setSearchError] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        const query = e.target.value;

        if (query) {
            API.search(query, 10).then((books) => {
                if (books.length <= 0) {
                    setBooks([]);
                    setSearchError(true);
                }
                else {
                    setBooks(books);
                    setSearchError(false);
                    syncBooksInShelves(books);
                }
            });
        } else {
            setBooks([]);
        }
    };

    const syncBooksInShelves = (books) => {
        if (books.length > 0) {
            books.forEach(book => {
                const hit = (booksInShelves.find((bookInShelf) => bookInShelf.id === book.id));
                if (hit) {
                    book.shelf = hit.shelf;
                } else {
                    book.shelf = "none";
                }
            });


            setBooks(books);

        }
    };

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link
                    className="close-search"
                    to="/"
                />
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        onChange={handleSearch}
                    />
                </div>
            </div>
            <div className="search-books-results">
                {books.length > 0 && (
                    <ol className="books-grid">
                        {books.map((book) => (
                            <Book key={book.id} bookObj={book} />
                        ))}
                    </ol>
                )}
                {searchError && (
                    <div>
                        <h4>No results, search again.</h4>
                    </div>
                )}
            </div>
        </div>
    );
};

Search.propTypes = {
    booksInShelves: PropTypes.array.isRequired,
};

export default Search;