import 'phoenix_html'

// import socket from "./socket"

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './containers/app'

/* eslint-disable fp/no-unused-expression */
// eslint-disable-next-line fp/no-nil, better/explicit-return
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('elplan-app')
  )
}

render(App)

// Hot Module Replacement API
// eslint-disable-next-line better/no-ifs
if (module.hot) {
  module.hot.accept('./containers/app', () => render(App))
}
/* eslint-enable fp/no-unused-expression */
