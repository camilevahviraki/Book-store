import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';
import Input from './Input';

function Form() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    book: '',
    author: '',
  });

  const ChangeInput = (e) => {
    const X = e.target.name;
    if (X === 'Author') {
      setState({
        book: state.book,
        author: e.target.value,
      });
    } else if (X === 'Add book') {
      setState({
        author: state.author,
        book: e.target.value,
      });
    }
  };

  return (
    <div>
      <Input name="Add book" enterBook={ChangeInput} />
      <Input name="Author" enterBook={ChangeInput} />
      <button type="submit" onClick={() => dispatch(addBook(state))}>
        Add Book
      </button>
    </div>
  );
}

export default Form;
