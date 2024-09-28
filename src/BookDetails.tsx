import {useState} from 'react'
import {Book} from './types'

export function BookDetails({book}: {book: Book}) { // destructuring the props object
    return (
        <div>
            <h2>{book.title}</h2>
            <p>ID: {book.id}</p>
        </div>
    )
}
