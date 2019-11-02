import React from 'react'
import { shortenTitle } from '../../store/actions/projectFunctions'

const BookSummary = ({book}) => {
    return (
        <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <img src={book.cover} class="cover"></img>
                    <p class="bookTitle">{book.title}</p>
                    <p class="bookDesc">By: {book.author}</p>
                </div>
            </div>
    )
}

export default BookSummary