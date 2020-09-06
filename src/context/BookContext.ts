import React, {createContext} from 'react'

const theme = "whiote"

type Props = {
    children: React.ReactNode
  };
  
 const BookContext = React.createContext(theme)

 const BookContextProvider = ({children}:Props)=>{

 }


export {BookContext, BookContextProvider}