import {useState} from 'react'

type Book = {
    id: number,
    title: string
}

function App() {
    const [books, setBooks] = useState<Book[]>([])
    const [bookName, setBookName] = useState('')

    function handleBookAdd() {
        setBooks([...books, {id: books.length, title: bookName}])
        setBookName('')
    }

    return (
        <div>
            <h1>Books</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
            <input value={bookName} onChange={e => setBookName(e.target.value)}/>
            <button onClick={handleBookAdd}>Add book</button>
        </div>
    )
}

export default App
