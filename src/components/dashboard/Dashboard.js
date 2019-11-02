import React, { Component } from 'react'
import BookList from '../book/BookList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import M from 'materialize-css'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = { sort: "none" }
  }

  componentDidMount(){
    M.FormSelect.init(this.select)
  }

  render() {

    // console.log(this.props);
    const { Books } = this.props;

    return (
      <div className="dashboard container">

        <div className="row">
          <div class="input-field col s12">
            <select ref={(select) => {this.select = select}} onChange={(e) => this.setState({ sort: e.target.value })} value={this.state.sort}>
              <option value="none" disabled selected>Sorting...</option>
              <option value="titleAsc">Title (Up)</option>
              <option value="titleDesc">Title (Down)</option>
            </select>
          </div>
          <div className="col s12 m6">
            <BookList books={Books} sort={this.state.sort} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
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