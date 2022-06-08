const REMOVE_BOOK = 'Bookstore/redux/books/REMOVE_BOOK';
const ADD_BOOK = 'Bookstore/redux/books/ADD_BOOK';
const DISPLAY_BOOK = 'Bookstore/redux/books/DISPLAY_BOOK';

let defaultState = [
  {
    id: 1,
    title: 'Hunger games',
    currentChap: 'Chap 1',
    Author: 'Camilux',
    Completed: '15',
    type: 'action',
  },
  {
    id: 2,
    title: 'Transporters',
    currentChap: 'Chap 3',
    Author: 'A7',
    Completed: '05',
    type: 'adventure',
  },
];

export default function booksReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_BOOK: {
      const newBook = {
        id: state.length + 1,
        title: action.book.book,
        currentChap: 'Chap 1',
        Author: action.book.author,
        Completed: '0',
        type: 'adventure',
      };
      defaultState = [...state, newBook]; // [...state, newBook]
      return defaultState;
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
