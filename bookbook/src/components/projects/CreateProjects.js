import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'

class CreateProject extends Component {
  state = {
    title: '',
    author: '',
    description: '',
    genre: '',
    publisher: '',
    releaseDate: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push('/');
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Add a new book</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Book Title</label>
          </div>
          <div className="input-field">
            <textarea id="author" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="author">Author</label>
          </div>
          <div className="input-field">
            <textarea id="description" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="description">Description</label>
          </div>
          <div className="input-field">
            <textarea id="genre" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="genre">Genre</label>
          </div>
          <div className="input-field">
            <textarea id="publisher" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="publisher">Publisher</label>
          </div>
          <div className="input-field">
            <textarea id="releaseDate" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="releaseDate">Release Date</label>
          </div>
          <div className="input-field">
            <textarea id="cover" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="cover">Cover</label>
          </div>
          <div className="input-field">
            
            <button className="btn cyan">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject)