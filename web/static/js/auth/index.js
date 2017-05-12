import React from "react"
import { Route } from "react-router-dom"

import { GoogleCallback } from "./google"
import AuthWidget from "./authWidget"

export default class Auth extends React.Component {
  render() {
    return (
      <div>
        <h1>Auth</h1>
        <Route path={ `${this.props.match.path}/google/callback` } component={ GoogleCallback } />
      </div>
    );
  }
}

export { AuthWidget }
