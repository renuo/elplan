import React from 'react'
import { Route } from 'react-router-dom'

import Home from './home'
import About from './about'
import Auth from './auth'
import Navbar from './navbar'

export default props =>
  (<div className="container">
    <header className="header">
      <Navbar />
    </header>
    <main role="main">
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/auth" component={Auth} />
    </main>
  </div>)
