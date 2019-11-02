import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Search from './components/layout/Search'
import Dashboard from './components/dashboard/Dashboard'
import BookDetails from './components/book/BookDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateBook from './components/book/CreateBook'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/book/:id' component={BookDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateBook} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

