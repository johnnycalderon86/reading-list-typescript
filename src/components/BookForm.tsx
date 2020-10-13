import React, { useContext, useState } from 'react'
import { BookContext } from '../context/BookContextNew'



export const BookForm = () => {
    const { dispatch } = useContext(BookContext)
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        dispatch({type:'ADD_BOOK', books:{title, author}})
        setTitle('');
        setAuthor('');
        console.log(title, author);

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} required placeholder="Book Title"/>
            <input type="text" value={author} onChange={e => setAuthor(e.target.value)} required  placeholder="Author"/>
            <input type="submit" value="Add Book"/>
        </form>

    )
}
