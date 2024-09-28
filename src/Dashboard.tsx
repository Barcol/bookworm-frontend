import {useState} from 'react'
import {Book} from './types'

export function Dashboard({books, setBooks}: { books: Book[], setBooks: (books: Book[]) => void }) {
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
