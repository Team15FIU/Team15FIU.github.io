import React from 'react'

const BookSummary = ({book}) => {
    if (book.title.length > 40)
        book.title = book.title.substring(0,40) + '…';
    
    return (
        <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <img src={book.cover} class="cover"></img>
                    <p class="bookTitle" style={{minHeight: "3em"}}>{book.title}</p>
                    <p class="bookDesc">By: {book.author}</p>
                </div>
            </div>
    )
}

export default BookSummary