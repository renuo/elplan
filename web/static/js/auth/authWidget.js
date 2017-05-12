import React from "react"
import { Button } from "react-bootstrap"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import * as actionCreators from '../actions/actionCreators'

class AuthWidget extends React.Component {
  componentDidMount() {

  }

  render() {
    if (this.props.user) {
      return (
        <div>Hello, {this.props.user.firstName}</div>
      );
    } else {
      return (
        <Button className="btn-outline-primary">Login with Google</Button>
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
