# Book Search Engine: Code Refactor Project

In order to better understand the Apollo Server and GraphQL API, this Book Search website was refactored from a RESTful API to one using GraphQL queries and mutations to fetch and modify data.

## Description

This site allows anyone to search for books that are found in Google Books. If a user logs into the site, they can also save books to their own personal lists.

## Installation

Check out the [Book Search Engine](https://quiet-springs-57791.herokuapp.com/) Site.

![Book Search Engine Site Demo](./assets/images/book_search_engine_demo.gif)

## Usage

Type in the name of a book or search for a book by typing in keywords. A list of books will display once the search has been entered. In order to login into the site, click the `Login/Signup` menu option and enter in the appropriate information for as a returning user (login) or a new user (signup). Once logged in, making any book searches will allow the user to add any book result to thier personal list of books by clicking the `Save` button. After saving their desired books, a user can click on the option to view their saved books and see all saved books made thus far, as well as remove any books from their list with the `Remove` button. Once a user is done with the site, they can logout with the `Logout` button and be returned to the page shown for those not currently logged into the site.

## Technologies Used

- Node.js
- Express.js
- Heroku
- GraphQL
- Apollo Server

## Credits

Starting code (the RESTful code) created by [Xandromus](https://github.com/Xandromus).  
Code conversion to an Apollo Server with GraphQL API done by myself, [mfcodingbc](https://github.com/mfcodingbc).

## License

[MIT](https://choosealicense.com/licenses/mit/)
