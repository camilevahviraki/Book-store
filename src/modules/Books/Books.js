import React, { Component } from 'react';
import Book from './Book';
import Form from '../form/Form';
import Header from '../Header';

export default class Books extends Component {
  state = {
    books: [
      {
        id: 1, title: 'Hunger games', currentChap: 'Chap 1', Author: 'Camilux', Completed: '15', type: 'action',
      },
      {
        id: 2, title: 'Transporters', currentChap: 'Chap 3', Author: 'A7', Completed: '05', type: 'adventure',
      },
    ],
  }

  links = [
    { status: false, link: '../categories' },
    { status: true, link: '../' },
  ]

  addBook = (book) => {
    const newTodo = {
      id: this.state.books.length + 1, title: book.book, currentChap: 'Chap 1', Author: book.author, Completed: '0', type: 'action',
    };
    this.setState({
      books: [...this.state.books, newTodo],
    });
    console.log('new', this.state.books);
  }

  render() {
    return (
      <div>
        <Header obj={this.links} />
        {this.state.books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
        <Form addBook={this.addBook} />
      </div>
    );
  }
}
