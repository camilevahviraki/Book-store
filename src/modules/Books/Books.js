import { useSelector } from 'react-redux';
import React, { Component, useState } from 'react';
import Book from './Book';
import Form from '../form/Form';
import Header from '../Header';

export default function Books() {
  const Bookstore = useSelector((state) => state.booksReducer);
  const [links] = useState([
    { status: false, link: '../categories' },
    { status: true, link: '../' },
  ]);

  return (
    <div>
      <Header obj={links} />
      {
        Bookstore.map((book) => (
          <Book key={book.id} book={book} />
        ))
}
      <Form />
    </div>
  );
}
