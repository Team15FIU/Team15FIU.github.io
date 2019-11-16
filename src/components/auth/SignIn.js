import React, { Component } from 'react'

class SignIn extends Component {
    state = {
        identification: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="identification">ID</label>
                        <input type="text" id="identification" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn cyan z-depth-0">Login</button>
                    </div>

                </form>
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

export default SignIn
