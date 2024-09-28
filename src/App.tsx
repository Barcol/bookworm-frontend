import {useState} from 'react'
import {Book} from './types'
import {Dashboard} from "./Dashboard.tsx";
import {BookDetails} from "./BookDetails.tsx";

function App() {
    const [books, setBooks] = useState<Book[]>([])
    const [currentBook, setCurrentBook] = useState<Book | null>(null)

    return (
        <div>
            {currentBook ? <BookDetails book={currentBook} onBackPress={() => setCurrentBook(null)}/> :
                <Dashboard books={books} setBooks={setBooks} setCurrentBook={setCurrentBook}/>}
        </div>
    )
}

export default App
