import "../App.css";

import PropTypes from "prop-types";

import Book from "./Book";

const Bookshelf = (props) => {
    const { shelfObj, booksInShelf } = props;

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfObj.name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {booksInShelf.map((book) => (
                        <Book bookObj={book} key={book.id} />
                    ))}
                </ol>
            </div>
        </div>
    );
};

Bookshelf.propTypes = {
    shelfObj: PropTypes.object.isRequired,
    booksInShelf: PropTypes.array.isRequired,
};

export default Bookshelf;