import React, { Component } from 'react'
import mediumZoom from 'medium-zoom'

export class ImageZoom extends Component {
  zoom = this.props.zoom.clone({
    background: this.props.color,
  })

  attachZoom = image => {
    this.zoom.attach(image)
  }

  render() {
    return (
      <img src={this.props.src} alt={this.props.alt} ref={this.attachZoom} className="cover"/>
    )
  }
}

