import { v4 as uuidv4 } from 'uuid';


export interface IBook {
    title: string;
    id: string
    author: string;
  }
  
export interface IAction {
    id: string;
    books: IBook
    type: string
}

export const Reduser = (state: IBook[], action: IAction) => {

    switch (action.type) {
        case 'ADD_BOOK':
            return [...state, {
                title: action.books.title,
                author: action.books.author,
                id: uuidv4(),
            }]
            case 'REMOVE_BOOK':
                return state.filter(book=> book.id !== action.id)
            default: 
            return state
    }
}
