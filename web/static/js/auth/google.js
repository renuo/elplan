import PropTypes from 'prop-types'
import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import 'url-search-params-polyfill'
import axios from 'axios'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../actions/actionCreators'

// FIXME: This should be made functional, but we have a lifecycle event...
// eslint-disable-next-line fp/no-class
class GoogleCallback extends React.Component {
  componentDidMount () {
    const { location, userLogin } = this.props // eslint-disable-line fp/no-this
    const code = new window.URLSearchParams(location.search).get('code') // eslint-disable-line better/no-new
    return axios
      .post('/api/v1/authorization', { code, provider: 'google' })
      .then(response => userLogin('mytoken', response.data.data))
      .catch(() => false) // FIXME: Do something
  }

  render () {
    // eslint-disable-next-line fp/no-this
    return this.props.user ? <Redirect to="/" /> : <div>Google callback</div>
  }
}

GoogleCallback.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string
  }).isRequired,
  userLogin: PropTypes.func.isRequired,
  user: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      token: PropTypes.string
    })
  ])
}

GoogleCallback.defaultProps = {
  user: false
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GoogleCallback))
