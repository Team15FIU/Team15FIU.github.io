import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import BookSummary from './BookSummary'
import { Link } from 'react-router-dom'

const BookList = ({books}) => {
    return (
        <div className="project-list section">
            { books && books.map(book => {
                return(
                    <Link to={'/book/' + book.id}>
                     <BookSummary book={book} key={book.id}/>
                    </Link>
                )
            })}
            
        </div>
    )
}

export default BookList