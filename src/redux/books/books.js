export default function reducer(state = [], action) {
  switch (action.type) {
    case 'ADD-BOOK': 
        return [...state, action.book]

    case 'REMOVE': 
        return state.filter((book, id) => (state[id] !== state[action.bookId]))

    default:
      return state;
  }
}

export function addBook(book) {
  return { type: 'ADD-BOOK', book };
}

export function removeBook(bookId) {
  return { type: 'REMOVE', bookId };
}
