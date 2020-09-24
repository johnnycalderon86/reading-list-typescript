import React, { useContext, useState } from 'react'
import { BookContext } from '../context/BookContextNew'



export const BookForm = () => {
    const { addbook } = useContext(BookContext)
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        addbook(title, author)
      console.log(title, author);
      
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
            <input type="text" value={author} onChange={e => setAuthor(e.target.value)} required />
            <input type="submit"  />
        </form>

    )
}
