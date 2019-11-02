import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import BookSummary from './BookSummary'
import { Link } from 'react-router-dom'

const sortTypes = {
    titleAsc: function(book1, book2){
        if(book1.title < book2.title)
            return -1;
        if(book1.title > book2.title)
            return 1;
        return 0;
    },
    titleDesc: function(book1, book2){
        if(book1.title < book2.title)
            return 1;
        if(book1.title > book2.title)
            return -1;
        return 0;
    }
}

const getSorter = (sort) => {
    switch(sort){
        case 'titleAsc':
            return sortTypes.titleAsc;
        case 'titleDesc':
            return sortTypes.titleDesc;
        default:
            return (() => 0)
    }
}

const BookList = ({books, sort}) => {
    if(books && sort != 'none'){
        books.sort(getSorter(sort))
    }

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