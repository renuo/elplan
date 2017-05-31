import PropTypes from 'prop-types'
import React from 'react'
import { Route } from 'react-router-dom'

import GoogleCallback from './google'
import AuthWidget from './authWidget'

const Auth = props => (
  <div>
    <h1>Auth</h1>
    <Route path={`${props.match.path}/google/callback`} component={GoogleCallback} />
  </div>
)

Auth.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired
  }).isRequired
}

export default Auth
export { AuthWidget }
