import {useState} from 'react'
import {Book} from './types'

export function BookDetails({book, onBackPress}: { book: Book, onBackPress: () => void }) {
    return (
        <div>
            <h2>{book.title}</h2>
            <p>ID: {book.id}</p>
            <button onClick={() => onBackPress()}>Back</button>
        </div>
    )
}
