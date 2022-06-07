import { combineReducers, createStore } from 'react-redux';
import booksReducer from './books/books';
import categories from './categories/categories';

const rootReducer = combineReducers({
  booksReducer,
  categories,
});

const store = createStore(rootReducer);

export default store;
