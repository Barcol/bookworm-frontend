import {useState} from 'react'
import {Book} from './types'
import {Dashboard} from "./Dashboard.tsx";

function App() {
    const [books, setBooks] = useState<Book[]>([])


    return (
        <Dashboard books={books} setBooks={setBooks}/>
    )
}

export default App
