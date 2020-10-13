import React, { createContext, useState } from "react";


export interface IBook {
  title: string;
  id: string
  author: string;
}

export interface IBookContext {
  books: IBook[];
  addbook: (a: string, b: string) => void;
  removeBook: (a: string) => void;

}

type Props = {
  children?: React.ReactNode
}

export const BookContext = createContext<IBookContext>({} as IBookContext);

export const BookContextProvider: React.FC = ({ children }: Props) => {
  const [books, setBooks] = useState<IBook[]>([
    {} as IBook
  ]);



  const addbook = (title: string, author: string) => {
    setBooks([
      ...books, { title, author, id:"djkd" },
    ])
  }
  const removeBook = (id: string) => {
    setBooks(books.filter(book => book.id !== id))
  }

  return (
    <BookContext.Provider value={{ books, addbook, removeBook }}>
      {children}
    </BookContext.Provider>
  );
};
