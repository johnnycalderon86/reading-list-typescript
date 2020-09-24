import React, { useContext } from 'react'
import { BookContext } from '../context/BookContextNew'

export const Navbar = () => {

    const { books } = useContext(BookContext)

    return (
        <div className="navbar">
            <h1>Reading List</h1>
            <p>{books.length}</p>
        </div>
    )
}
