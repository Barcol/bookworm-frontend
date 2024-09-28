import {Book} from './types'
import {generateId} from './utils'

export function BookDetails({book, setBooks, onBackPress}: {
    book: Book,
    setBooks: (fn: (books: Book[]) => Book[]) => void,
    onBackPress: () => void
}) {
    const lastReading = book.readings.at(-1)

    function startReading() {
        setBooks((previousBooks) => previousBooks.map(b => {
            if (b.id !== book.id) return b
            const newReading = {id: generateId(), startPage: 0, startDate: new Date(), finalDetails: null}

            return {...b, readings: [...b.readings, newReading]
            }
        }))
    }

    function stopReading() {
        setBooks((previousBooks) => previousBooks.map(b => {
            if (b.id !== book.id) return b

            return {...b,
                readings: [...b.readings.slice(0, -1), {
                    ...lastReading,
                    finalDetails: {endDate: new Date(), endPage: 0}
                }]
            }
        }))
    }

    return (
        <div>
            {book.readings.map(reading => (
                <div key={reading.id}>
                    <p>{reading.startDate.toISOString()}</p>
                </div>
            ))}
            <h2>{book.title}</h2>
            <p>ID: {book.id}</p>

            {(!lastReading || lastReading.finalDetails)
                ? <button onClick={startReading}>STAART</button>
                : <button onClick={stopReading}>FACET MA JUŻ DOŚĆ</button>}
            <button onClick={() => onBackPress()}>Back</button>
        </div>
    )
}
