import {useState} from 'react'
import {Book} from './types'
import {generateId} from './utils'

export function Dashboard({books, setBooks, setCurrentBookId}: {
    books: Book[],
    setBooks: (books: Book[]) => void,
    setCurrentBookId: (id: string) => void
}) {
    const [bookName, setBookName] = useState('')

    function handleBookAdd() {
        setBooks([...books, {id: generateId(), title: bookName, readings: []}])
        setBookName('')
    }

    return (
        <div>
            <h1>Books</h1>
            <ul>
                {books.map((book) => (
                    <button onClick={() => {setCurrentBookId(book.id)}} key={book.id}>{book.title}</button>
                ))}
            </ul>
            <input value={bookName} onChange={e => setBookName(e.target.value)}/>
            <button onClick={handleBookAdd}>Add book</button>
        </div>
    )
}
