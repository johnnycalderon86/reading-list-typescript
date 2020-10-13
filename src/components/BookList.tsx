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
      <div className="empty">You have read all the books on the list. Add some more to pump in that sweet Knowledge! </div>
    )

}
