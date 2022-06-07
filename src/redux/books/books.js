const REMOVE_BOOK = 'Bookstore/redux/books/REMOVE_BOOK';
const ADD_BOOK = 'Bookstore/redux/books/ADD_BOOK';
const DISPLAY_BOOK = 'Bookstore/redux/books/DISPLAY_BOOK';

let defaultState = [];

export default function booksReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_BOOK: {
      defaultState = [...state, action.book];
      return [...state, action.book];
    }

    case REMOVE_BOOK: {
      defaultState = state.filter((book) => book.id !== action.bookId);
      return defaultState;
    }

    case DISPLAY_BOOK:
      return defaultState;

    default:
      return state;
  }
}

export function addBook(book) {
  return { type: ADD_BOOK, book };
}

export function removeBook(bookId) {
  return { type: REMOVE_BOOK, bookId };
}

export function displayBook() {
  return { type: DISPLAY_BOOK };
}
