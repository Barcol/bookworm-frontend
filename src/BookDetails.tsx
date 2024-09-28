import {useState} from 'react'
import {Book} from './types'

export function BookDetails({book, onBackPress}: { book: Book, onBackPress: () => void }) {
    const lastReading = book.readings.at(-1)

    function startReading() {

    }
    function stopReading() {

    }

    return (
        <div>
            <h2>{book.title}</h2>
            <p>ID: {book.id}</p>

            {(!lastReading || lastReading.finalDetails)
                ? <button onClick={startReading}>STAART</button>
                : <button onClick={stopReading}>FACET MA JUŻ DOŚĆ</button>}
            <button onClick={() => onBackPress()}>Back</button>
        </div>
    )
}
