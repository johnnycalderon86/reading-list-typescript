import { v4 as uuidv4 } from 'uuid';


type BookDetails = {
    title: string
    id: string
    author: string
}

type Books = {
    book: BookDetails[]

}
interface IAction {
    books: BookDetails
    type: string
}

export const Reduser = (state: Books[], action: IAction) => {

    switch (action.type) {
        case 'ADD_BOOK':
            return [...state, {
                title: action.books.title,
                author: action.books.author,
                id: uuidv4(),
            }]
    }
}
