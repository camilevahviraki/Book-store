import React from 'react';

function categories(state = [], action) {
  switch (action.type) {
    case 'CHECK-STATUS':
      return 'Under construction';
    case 'UPDATE-STATUS': {
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

export function check(bookId) {
  return { type: 'CHECK-STATUS' };
}

export function update(bookId, newStatus) {
  return { type: 'UPDATE-STATUS', newStatus, bookId };
}

export default categories;
