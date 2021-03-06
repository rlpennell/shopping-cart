import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import KeycapPage from './components/KeycapPage'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Shop from './components/Shop'

const App = () => {
  return (

    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={Shop} />
          <Route path='/keycaps' component={KeycapPage} />

        </Switch>
      </div>
    </Router>
  )
}

export default App;
