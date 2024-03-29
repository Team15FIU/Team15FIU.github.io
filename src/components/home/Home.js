import React, { Component } from 'react'
import { NavLink  } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div id="parent">
                <div className="row">
                    <div className="col s12 center-align">
                        <h2>Welcome to BookBook NYC!</h2>
                    </div>
                    <NavLink to ='/catalog'>
                        <div className="col s3 offset-s3 center-align card-panel hoverable">
                            <div className="card-panel cyan z-depth-0 white-text">
                                <h5>
                                    Catalog
                                </h5>
                            </div>
                        </div>
                    </NavLink>
                    
                    <NavLink to ='/signup'>
                        <div className="col s3 center-align card-panel hoverable">
                            <div className="card-panel cyan z-depth-0 white-text">
                                <h5>
                                    Sign Up
                                </h5>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>

            
        )
    }
}

export default Home