import React, { useContext } from "react";

import {BookContextNew} from '../context/BookContextNew'






export default function BookList() {
  const { books } = useContext(BookContextNew);

  console.log(books);

  return (
    <div>
        {books.map((book:any)=>{
            return <h1 key ={book.id}>{book.title}</h1>
        })}
    </div>

      ) 
      
}
