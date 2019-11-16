import React, { Component } from 'react'
import { NavLink  } from 'react-router-dom'
import CatalogLinks from '../layout/CatalogLinks'
import SignedinLinks from '../layout/SignedInLinks'

class Home extends Component {
    render() {
        return (
            <div id="parent">
                <div class="row">
                    <div class="col s12 center-align">
                        <h1>Welcome to BookBook NYC!</h1>
                    </div>
                    <NavLink to ='/catalog'>
                        <div class="col s3 offset-s3 center-align">
                            <div class="card-panel cyan z-depth-0 white-text">
                                <h3>
                                    Catalog
                                </h3>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to ='/signup'>
                        <div class="col s3 center-align">
                            <div class="card-panel cyan z-depth-0 white-text">
                                <h3>
                                    Sign Up
                                </h3>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div class="white-text">
                                <h5>
                                    Ghetto way to make footer stick LMAO
                                </h5>
                                <h5>
                                    Ghetto way to make footer stick LMAO
                                </h5>
                                <h5>
                                    Ghetto way to make footer stick LMAO
                                </h5>
                                <h5>
                                    Ghetto way to make footer stick LMAO
                                </h5>
                                <h5>
                                    Ghetto way to make footer stick LMAO
                                </h5>
                                <h5>
                                    Ghetto way to make footer stick LMAO
                                </h5>
                                <h5>
                                    Ghetto way to make footer stick LMAO
                                </h5>
                                
                </div>
            </div>

            
        )
    }
}

export default Home