import React from "react"
import { withRouter, Redirect } from "react-router-dom"
import "url-search-params-polyfill"

export class GoogleCallback extends React.Component {
  componentDidMount() {
    console.log('component mounted', new URLSearchParams(this.props.location.search).get('code'));
  }

  render() {
    if (false) {
      return (<Redirect to="/"/>);
    } else {
      return (<div>Google callback</div>);
    }
  }
}

GoogleCallback = withRouter(GoogleCallback);
