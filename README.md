# MyReads Project

Author: Diego Santamaria-Sarcos

This repository contains my submission for the first project in Udacity's React course. This project involves developing a web app, MyReads, using React.js. The MyReads app is comprised of two main pages: a home page and a search page. The homepage shows a selection of books categorized into three shelves: Currently Reading, Want to Read, and Read. The user can click on the dropdown menu by each book to change the shelf it's on or remove it entirely. Clicking the plus on the bottom right of the homepage navigates the user to the search page, where new books can be searched for added via the same dropdown menus.

## Running Instructions

To ensure that the project runs well, we need to use nvm to set our current node version. The full installation and running instructions are as follows:

```bash
$nvm install 16
$npm install
$npm start
```

## Sources

1. [No cover image](https://dhmckee.com/archives/2018/11/podcast-book-cover-design-tips-with-stuart-bache/)
2. [Passing props through route](https://ui.dev/react-router-pass-props-to-components)

## Project Hierarchy

```bash
├── README.md - This file.
├── 
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # The root of the app
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── Components # The components used to build the main pages
    │   ├── Book.js
    │   ├── Bookshelf.js
    │   ├── Header.js
    │   └── OpenSearch.js
    ├── icons # Images for the app
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   ├── arrow-drop-down.svg
    │   └── noCover.png
    ├── Pages # The two pages comprising the app
    │   ├── Home.js
    │   └── Search.js
    │   
    ├── index.css # Global styles. 
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Contributing

This repository is my submission for Udacity's React course. While I won't accept any pull requests, feel free to check out Udacity's [starter repository](https://github.com/udacity/nd0191-c1-myreads) for this project and try it out for yourself!

# Udacity's Original Documentation

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.