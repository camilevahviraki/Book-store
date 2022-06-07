const CHECK_STATUS = 'Bookstore/redux/books/CHECK_STATUS';
const UPDATE_STATUS = 'Bookstore/redux/books/UPDATE_STATUS';

function categories(state = [], action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    case UPDATE_STATUS: {
      state.forEach((element) => {
        if (element.id === action.bookId) {
          element.status = action.newStatus;
        }
      });
      return state;
    }
    default:
      return state;
  }
}

export function check() {
  return { type: CHECK_STATUS };
}

export function update(bookId, newStatus) {
  return { type: UPDATE_STATUS, newStatus, bookId };
}

export default categories;
