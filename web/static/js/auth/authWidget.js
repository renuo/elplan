import React from "react"
import { Button } from "react-bootstrap"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import * as actionCreators from '../actions/actionCreators'

class AuthWidget extends React.Component {
  componentDidMount() {

  }

  redirectToGoogle() {
    window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?scope=openid%20email%20profile&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Fauth%2Fgoogle%2Fcallback&response_type=code&client_id=330918691596-4jqcn7tdjv6kk8ub8qmg7le0mfu5b9t1.apps.googleusercontent.com'
  }

  render() {
    if (this.props.user) {
      return (
        <div>Hello, {this.props.user.firstName}</div>
      );
    } else {
      return (
        <Button className="btn-outline-primary" onClick={ this.redirectToGoogle }>Login with Google</Button>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthWidget);
