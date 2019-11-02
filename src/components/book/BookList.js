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
    },
    authorAsc: function(book1, book2){
        if(book1.author < book2.author)
            return -1;
        if(book1.author > book2.author)
            return 1;
        return 0;
    },
    authorDesc: function(book1, book2){
        if(book1.author < book2.author)
            return 1;
        if(book1.author > book2.author)
            return -1;
        return 0;
    },
    priceAsc: function(book1, book2){
        if(book1.price < book2.price)
            return -1;
        if(book1.price > book2.price)
            return 1;
        return 0;
    },
    priceDesc: function(book1, book2){
        if(book1.price < book2.price)
            return 1;
        if(book1.price > book2.price)
            return -1;
        return 0;
    },
    ratingAsc: function(book1, book2){
        if(book1.rating < book2.rating)
            return -1;
        if(book1.rating > book2.rating)
            return 1;
        return 0;
    },
    ratingDesc: function(book1, book2){
        if(book1.rating < book2.rating)
            return 1;
        if(book1.rating > book2.rating)
            return -1;
        return 0;
    },
    dateAsc: function(book1, book2){
        let date1 = new Date(book1.releaseDate);
        let date2 = new Date(book2.releaseDate);
        if(date1 < date2)
            return -1;
        if(date1 > date2)
            return 1;
        return 0;
    },
    dateDesc: function(book1, book2){
        let date1 = new Date(book1.releaseDate);
        let date2 = new Date(book2.releaseDate);
        if(date1 < date2)
            return 1;
        if(date1 > date2)
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
        case 'authorAsc':
            return sortTypes.authorAsc; 
        case 'authorDesc':
            return sortTypes.authorDesc;  
        case 'priceAsc':
            return sortTypes.priceAsc; 
        case 'priceDesc':
            return sortTypes.priceDesc; 
        case 'ratingAsc':
            return sortTypes.ratingAsc; 
        case 'ratingDesc':
            return sortTypes.ratingDesc; 
        case 'dateAsc':
            return sortTypes.dateAsc; 
        case 'dateDesc':
            return sortTypes.dateDesc; 
        default:
            return (() => 0)
    }
}

const BookList = ({books, sort, filter}) => {
    if(books){
        books.sort(getSorter(sort))
    }

    return (
        <div className="project-list section">
            { books && books.map(book => {
                return(
                    <Link style={{display: "inline-block", width: "100%", maxWidth: "250px"}} 
                        to={'/book/' + book.id}>
                     <BookSummary book={book} key={book.id}/>
                    </Link>
                )
            })}
            
        </div>
    )
}

export default BookList