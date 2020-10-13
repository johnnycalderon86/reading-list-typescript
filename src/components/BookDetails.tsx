import React, { useContext } from 'react'
import { BookContext } from '../context/BookContextNew'
import { Books } from './BookList'


export type BookDetailsType = {
    book: Books
}


export const BookDetails = ({ book }: BookDetailsType) => {

    const { removeBook } = useContext(BookContext)
    return (
        <li onClick={()=>removeBook(book.id)}>
            <div className="title">
                {book.title}
            </div>

            <div className="author">
                {book.author}
            </div>
        </li>
    )
}
