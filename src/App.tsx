import {useState} from 'react'
import {Book} from './types'
import Dashboard from "./Dashboard.tsx";
import BookDetails from "./BookDetails.tsx";

function App() {
    const [books, setBooks] = useState<Book[]>([])
    const [currentBookId, setCurrentBookId] = useState<string | null>(null)

    return (
        <div>
            {currentBookId ? <BookDetails book={books.find(book => book.id === currentBookId)} setBooks={setBooks} onBackPress={() => setCurrentBookId(null)}/> :
                <Dashboard books={books} setBooks={setBooks} setCurrentBookId={setCurrentBookId}/>}
        </div>
    )
}

export default App
