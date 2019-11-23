import React, { useState } from 'react'
import Dashboard from '../dashboard/Dashboard'
import BookSummary from './BookSummary'
import ReactPaginate from 'react-paginate';
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

const filterTypes = {
    genreNonfi: (book) => {
        return book.genre == 'Non-Fiction';
    },
    genreScifi: (book) => {
        return book.genre == 'Science Fiction';
    },
    genreFant: (book) => {
        return book.genre == 'Fantasy';
    },
    rating1: (book) => {
        return book.rating >= 1;
    },
    rating2: (book) => {
        return book.rating >= 2;
    },
    rating3: (book) => {
        return book.rating >= 3;
    },
    rating4: (book) => {
        return book.rating >= 4;
    },
    rating5: (book) => {
        return book.rating >= 5;
    },
    top: (book) => {
        return book.isTopSeller;
    }  
}

const getFilter = (filter) => {
    switch(filter){
        case "genreNonfi":
            return filterTypes.genreNonfi;
        case "genreScifi":
            return filterTypes.genreScifi;
        case "genreFant":
            return filterTypes.genreFant;
        case "rating1":
            return filterTypes.rating1;
        case "rating2":
            return filterTypes.rating2;
        case "rating3":
            return filterTypes.rating3;
        case "rating4":
            return filterTypes.rating4;
        case "rating5":
            return filterTypes.rating5;
        case "top":
            return filterTypes.top;
        default:
            return (() => true)
    }
}



const BookList = ({books, sort, filter}) => {
    const [pageNum, setPageNum] = useState(0);
    const pageSize = 10;

    const limitBooks = (data) => {
        setPageNum(data.selected)
    }

    let pages = 0;

    if(books){
        books.sort(getSorter(sort))
        books = books.filter(getFilter(filter))
        pages = Math.ceil(books.length/pageSize)
        books = books.slice(pageNum * pageSize, (pageNum + 1) * pageSize);
    }

    return (
        <div className="project-list section">
            { books && books.map(book => {
                return(
                    <Link 
                    // style={{display: "inline-block", width: "100%", maxWidth: "250px"}}
                        className="col s3"
                        to={'/book/' + book.id}>
                     <BookSummary book={book} key={book.id}/>
                    </Link>
                )
            })}
            <div className="col s12">
            { books && 
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={limitBooks}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
                />
            }                
            </div>
        </div>
    )
}

export default BookList