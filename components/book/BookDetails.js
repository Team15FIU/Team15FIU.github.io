import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { NavLink, Link  } from 'react-router-dom'
import BookAuthors from './BookAuthors'


const BookDetails = (props) => {
    const { book } = props;
    if (book) {
      return (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <div className="image center" onClick={() => {alert('Supposed to enlarge, but nope')}}>
                <img src={book.cover} class="cover"></img>
              </div>
              <p class="bookTitle">{book.title}</p>
              <p></p>
              <p>{book.description}</p>
              <div class="bookDesc">
                <p>{book.content}</p>
                <Link to={'/author/' + book.author}>
                  <p className="black-text">
                    By: {book.author}
                  </p>
                </Link>
                <p>{book.bio}</p>
              </div>
              <div class="bookDesc">
                <p>Genre: {book.genre}</p>
                <p>Publisher: {book.publisher}</p>
                <p>Release Date: {book.releaseDate}</p>
                <p>Price: ${book.price}</p>
                <p>Rating: {book.rating}</p>
              </div>
              
            </div>
          </div>
        </div>
        
      )
    } else {
      return (
        <div className="container center">
          <p>Loading book...</p>
        </div>
      )
    }
  }

const mapStateToProps = (state, ownProps) => {
    
  const id = ownProps.match.params.id;
    const Books = state.firestore.data.Books;
    const book = Books ? Books[id] : null
    return {
        book
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'Books'}
    ])
)(BookDetails)