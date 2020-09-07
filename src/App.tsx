import React from 'react';
import {BookContextNewProvider} from './context/BookContextNew'
import BookList from './components/BookList'



function App() {

return(
<div>
     <BookContextNewProvider>
     <BookList/>
 </BookContextNewProvider>
</div>

);
 
}

export default App;
