import React, { useContext } from 'react'
import { BookContext } from '../context/BookContextNew'

export const Navbar = () => {

    const { books } = useContext(BookContext)
    
    return (
        <div className="navbar">
            <h1>BOOK LIST</h1>
            {books.length === 0 || books.length > 1 ? 
              <p className="numberText">You have currently <span className="numberOfBooks">{books.length}</span> books in your to read list </p>:
              <p className="numberText">You have currently <span className="numberOfBooks">{books.length}</span> book in your to read list </p>
        }
          

        </div>
    )
}
