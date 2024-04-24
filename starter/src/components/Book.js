import "../App.css";

import PropTypes from "prop-types";
import * as API from "../BooksAPI";

import noCover from "../icons/noCover.jpg"

const Book = (props) => {

    const { bookObj } = props;

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage:
                                `url(${bookObj.imageLinks ? bookObj.imageLinks.thumbnail : noCover})`
                        }}
                    ></div>
                    <div className="book-shelf-changer">
                        <select onChange={(e) => API.update(bookObj, e.target.value)} value={bookObj.shelf ? bookObj.shelf : "none"}>
                            <option value="none" disabled>
                                Move to...
                            </option>
                            <option value="currentlyReading">
                                Currently Reading
                            </option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{bookObj.title}</div>
                {bookObj.authors && bookObj.authors.map((author, index) => (
                    <div className="book-authors" key={index}>{author}</div>
                ))}
            </div>
        </li>
    );
};

Book.propTypes = {
    bookObj: PropTypes.object.isRequired,
};

export default Book;