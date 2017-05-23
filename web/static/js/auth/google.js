import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import 'url-search-params-polyfill'
import axios from 'axios'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../actions/actionCreators'

export class GoogleCallback extends React.Component {
  componentDidMount () {
    const code = new URLSearchParams(this.props.location.search).get('code')
    axios
      .post('/api/v1/authorization', { code, provider: 'google' })
      .then(response => {
        this.props.userLogin('mytoken', response.data.data)
      })
      .catch(() => console.error('Error in HTTP call', arguments))
  }

  render () {
    if (this.props.user) {
      return <Redirect to='/' />
    } else {
      return <div>Google callback</div>
    }
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

GoogleCallback = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(GoogleCallback)
)
