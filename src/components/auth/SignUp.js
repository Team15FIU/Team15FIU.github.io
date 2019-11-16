import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        identification: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        homeAddress: '',
        nickname: '',
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
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="identification">ID</label>
                        <input type="text" id="identification" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Last Name</label>
                        <input type="text" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="homeAddress">Home Address</label>
                        <input type="text" id="homeAddress" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="nickname">Nickname</label>
                        <input type="text" id="nickname" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn cyan z-depth-0">Sign Up</button>
                    </div>

                </form>
                <div class="white-text"><h5>
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

export default SignUp
