import PropTypes from 'prop-types'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button } from 'react-blazecss'

import * as actionCreators from '../actions/actionCreators'
import Icon from '../widgets/icon'

function AuthWidget (props) {
  return props.user
    ? <Button onClick={props.userLogout} ghost bStyle="error">
      <Icon name="account-logout" /> Logout
      </Button>
    : <Button onClick={redirectToGoogle} ghost bStyle="primary">
      <Icon name="account-login" /> Login with Google
      </Button>
}

AuthWidget.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      token: PropTypes.string,
      name: PropTypes.string,
      email: PropTypes.string
    })
  ]),
  userLogout: PropTypes.func.isRequired
}

AuthWidget.defaultProps = {
  user: false
}

function redirectToGoogle () {
  const uri = encodeURIComponent(`${window.location.origin}/auth/google/callback`)
  window.location.href =
    `https://accounts.google.com/o/oauth2/v2/auth?` +
    `scope=openid%20email%20profile&` +
    `redirect_uri=${uri}&response_type=code&` +
    `client_id=330918691596-4jqcn7tdjv6kk8ub8qmg7le0mfu5b9t1.apps.` +
    `googleusercontent.com`
  return true
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthWidget)
