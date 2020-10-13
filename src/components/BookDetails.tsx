import React, { useContext } from 'react'
import { BookContext } from '../context/BookContextNew'
import { Books } from './BookList'


export type BookDetailsType = {
    book: Books
}


export const BookDetails = ({ book }: BookDetailsType) => {

    const { dispatch } = useContext(BookContext)
    return (
        <li onClick={() => dispatch({type:'REMOVE_BOOK', id: book.id})}>
            <div >
               <h3  className="title container"> <span className="bookDetails">Title </span> {book.title}</h3> 
            </div>

            <div >
               <h4 className="author container"><span className="bookDetails">Author </span>{book.author}</h4> 
            </div>
        </li>
    )
}
