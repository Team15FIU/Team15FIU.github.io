import React, { Component } from 'react'
import AuthorList from '../book/AuthorList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import M from 'materialize-css'

class BookAuthors extends Component {
  constructor(props) {
    super(props)
    this.state = { filter: "none" }
  }

  componentDidMount(){
    M.FormSelect.init(document.querySelectorAll('.dashboard select'))
    
  }

  render() {
    const { Books } = this.props;
    return (
      <div className="dashboard container">
        <div className="row s12">
            <AuthorList books={Books} filter={this.props.match.params.filter}/>
        </div>
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
)(BookAuthors)