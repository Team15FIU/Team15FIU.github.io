import React, { Component } from 'react'
import BookList from '../book/BookList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import M from 'materialize-css'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = { sort: "none", filter: "none" }
  }

  componentDidMount(){
    M.FormSelect.init(document.querySelectorAll('.dashboard select'))
  }

  render() {
    const { Books } = this.props;

    return (
      <div className="dashboard container">
        <div className="row s12">
          <div class="input-field col s3">
              <select onChange={(e) => this.setState({ sort: e.target.value })} value={this.state.sort}>
                <option value="none" disabled selected>Sorting...</option>
                <option value="titleAsc">Title A-Z</option>
                <option value="titleDesc">Title Z-A</option>
                <option value="authorAsc">Author A-Z</option>
                <option value="auhtorDesc">Author Z-A</option>
                <option value="priceAsc">Price (Low)</option>
                <option value="priceDesc">Price( High)</option>
                <option value="ratingAsc">Rating (Low)</option>
                <option value="ratingDesc">Rating (High)</option>
                <option value="dateDesc">Date (Most Recent)</option>
                <option value="dateAsc">Date (Oldest)</option>
              </select>
          </div>
          <div class="input-field col s3">
              <select onChange={(e) => this.setState({ filter: e.target.value })} value={this.state.filter}>
                <option value="none" disabled selected>Filter By...</option>
                <optgroup label="Genre">
                  <option value="genreNonfi">Non-Fiction</option>
                  <option value="genreScifi">Science Fiction</option>
                  <option value="genreFant">Fantasy</option>
                </optgroup>
                <optgroup label="Rating">
                  <option value="rating1">★</option>
                  <option value="rating2">★★</option>
                  <option value="rating3">★★★</option>
                  <option value="rating4">★★★★</option>
                  <option value="rating5">★★★★★</option>
                </optgroup>
                <optgroup label="Top Sellers">
                  <option value="top">All Top Selling Books</option>
                </optgroup>
              </select>
          </div>
        </div>
        <BookList books={Books} sort={this.state.sort} filter={this.state.filter}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    Books: state.firestore.ordered.Books
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'Books' }
  ])
)(Dashboard)