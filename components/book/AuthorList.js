import React, { useState } from 'react'
import BookSummary from './BookSummary'
import { Link } from 'react-router-dom'

var author = "";

const filterTypes = {
    author: (book) => {
        return book.author == author;
    }
}

const getFilter = (filter) => {
        return filterTypes.author;
    
}

const BookList = ({books, filter}) => {
    author = filter;
    if(books){
        books = books.filter(getFilter(filter))
    }

    return (
        <div className="project-list section">
            <h5>Books by: {author}</h5>
            { books && books.map(book => {
                return(
                    <Link 
                        className="col s3"
                        to={'/book/' + book.id}>
                     <BookSummary book={book} key={book.id}/>
                    </Link>
                )
            })}
        </div>
    )
}

export default BookList