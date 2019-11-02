import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
  render() {
    
    // console.log(this.props);
    const { Books } = this.props;
    
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={Books} />
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