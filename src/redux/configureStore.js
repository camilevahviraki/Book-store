import { combineReducers } from 'react-redux';
import reducer from './books/books';
import categories from './categories/categories';

export default combineReducers({
  reducer,
  categories,
});
