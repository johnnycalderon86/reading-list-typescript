import React, { createContext, useReducer, useEffect } from "react";
import { Reduser } from "../reducers/Reduser";


export interface IBook {
  title: string;
  id: string
  author: string;
}

export interface IBookContext {
  books: IBook[];
  dispatch: any

}

type Props = {
  children?: React.ReactNode
}

export const BookContext = createContext<IBookContext>({} as IBookContext);

export const BookContextProvider: React.FC = ({ children }: Props) => {
  const [books, dispatch] = useReducer(Reduser, [], ():IBook[]=> {
    const localData = localStorage.getItem('books');
   return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books]);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};
