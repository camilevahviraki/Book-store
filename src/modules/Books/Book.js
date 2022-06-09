import React from 'react';
import '../../styles/Book.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

export default function Book(props) {
  const dispatch = useDispatch();
  return (
    <div className="Book">
      <div className="leftH">
        <span>{props.book[1][0].category}</span>
        <h2>{props.book[1][0].title}</h2>
        <span>{props.book[1][0].author}</span>
        <ul>
          <li>
            <button type="button">Comments</button>
          </li>
          <li>
            <button type="button" onClick={() => dispatch(removeBook(props.book[0]))}>Remove</button>
          </li>
          <li>
            <button type="button">Edit</button>
          </li>
        </ul>
      </div>
      <div className="Middle">
        <div className="Circle" />
        <span>{props.book.Completed}</span>
        <span>Completed</span>
      </div>
      <div className="right">
        <h3>CURRENT CHAPTER</h3>
        <span>{props.book.currentChap}</span>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}
