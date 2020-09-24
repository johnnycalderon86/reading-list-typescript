import React, { useContext } from "react";

import { BookContext } from '../context/BookContextNew'
import { BookDetails } from "./BookDetails";






export type Books = {
  title: string
  id: string
  author: string 
}

export default function BookList() {
  const { books } = useContext(BookContext);

  console.log(books);



  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book: Books) => {
          return <BookDetails book={book} key={book.id} />
        })}
      </ul>
     
    </div>

  ) : (
      <h1>You have read all the books in the list. Good for you... Nerd! </h1>
    )

}
