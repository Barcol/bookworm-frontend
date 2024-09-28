import {useState} from 'react'
import {Book} from './types'

export function Dashboard({books, setBooks, setCurrentBook}: {
    books: Book[],
    setBooks: (books: Book[]) => void,
    setCurrentBook: (book: Book) => void
}) {
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
                    <button onClick={() => setCurrentBook(book)} key={book.id}>{book.title}</button>
                ))}
            </ul>
            <input value={bookName} onChange={e => setBookName(e.target.value)}/>
            <button onClick={handleBookAdd}>Add book</button>
        </div>
    )
}
