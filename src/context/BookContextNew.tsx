import React, { useState } from "react";

export interface IBook {
  title: string;
  id: string;
  author: string;
}

export interface BookContext {
  books: IBook[];
}

export const BookContextNew = React.createContext<BookContext>({
  books: [{ title: 'null', id: "0", author: "loading" }],
});

export const BookContextNewProvider: React.FC<{}> = (props) => {
  const [books, setBooks] = useState<IBook[]>([
    { title: "Name of the wind", author: "patrick rothfuss", id: "1" },
    { title: "The final empire", author: "brandon sanderson", id: "2" },
  ]);

  return (
    <BookContextNew.Provider value={{ books }}>
      {props.children}
    </BookContextNew.Provider>
  );
};
