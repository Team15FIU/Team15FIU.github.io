import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import BookDetails from './components/book/BookDetails'
import BookAuthors from './components/book/BookAuthors'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateBook from './components/book/CreateBook'
import Home from './components/home/Home'
import Footer from './components/layout/Footer'
import BookAuthors from './components/book/BookAuthors'
// import EnlargeImage from './components/book/EnlargeImage'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/catalog' component={Dashboard} />
            <Route path='/book/:id' component={BookDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateBook} />
            <Route path='/author/:filter' component={BookAuthors} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

