import { useContext , createContext } from "react";


const BooksContext = createContext()

export const useBooksContext = ()=>{
    return useContext(BooksContext);
}

export default BooksContext;

// export const Provider = useContext(BooksContext)