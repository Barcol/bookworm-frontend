import {Book} from './types'
import {generateId} from './utils'

type Props = {
    book: Book,
    setBooks: (fn: (books: Book[]) => Book[]) => void,
    onBackPress: () => void
}

export default function ({book, setBooks, onBackPress}: Props) {
    const lastReading = book.readings.at(-1)

    function handleStartReading() {
        setBooks((previousBooks) => previousBooks.map(b => {
            if (b.id !== book.id) return b
            const newReading = {id: generateId(), startPage: 0, startDate: new Date(), finalDetails: null}

            return {...b, readings: [...b.readings, newReading]
            }
        }))
    }

    function handleStopReading() {
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
                ? <button onClick={handleStartReading}>STAART</button>
                : <button onClick={handleStopReading}>FACET MA JUŻ DOŚĆ</button>}
            <button onClick={onBackPress}>Back</button>
        </div>
    )
}
