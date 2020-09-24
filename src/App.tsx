import React from 'react';
import { BookContextProvider } from './context/BookContextNew'
import BookList from './components/BookList'
import { Navbar } from './components/Navbar';
import { BookForm } from './components/BookForm';



function App() {

    return (
        <div className="App">
            <BookContextProvider>
                <Navbar />
                <BookList />
                <BookForm/>
            </BookContextProvider>
        </div>

    );

}

export default App;
