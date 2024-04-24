import "../App.css"

import Header from "../components/Header"
import OpenSearch from "../components/OpenSearch";
import Bookshelf from "../components/Bookshelf";

import PropTypes from "prop-types";

const Home = (props) => {

    const { books } = props;

    const shelves = [
        { name: "Currently Reading", id: "currentlyReading" },
        { name: "Want to Read", id: "wantToRead" },
        { name: "Read", id: "read" }
    ];

    return (
        <div className="app">
            <Header />
            <div>
                {shelves.map((shelf) => {
                    return (
                        <Bookshelf key={shelf.id} shelfObj={shelf} booksInShelf={books.filter((book) => (book.shelf === shelf.id))} />
                    );
                })}
            </div>
            <OpenSearch />
        </div>
    );
};

Home.propTypes = {
    books: PropTypes.array.isRequired,
};

export default Home;