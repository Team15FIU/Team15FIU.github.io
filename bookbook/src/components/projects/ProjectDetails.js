import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ProjectDetails = (props) => {
    const { project } = props;
    if (project) {
      return (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{project.title}</span>
              <p>{project.content}</p>
              <p>By: {project.author}</p>
              <p>Genre: {project.genre}</p>
              <p>Publisher: {project.publisher}</p>
              <p>Release Date: {project.releaseDate}</p>
              <p>Price: ${project.price}</p>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="container center">
          <p>Loading project...</p>
        </div>
      )
    }
  }

const mapStateToProps = (state, ownProps) => {
    
  const id = ownProps.match.params.id;
    const Books = state.firestore.data.Books;
    const project = Books ? Books[id] : null
    return {
        project: project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'Books'}
    ])
)(ProjectDetails)
