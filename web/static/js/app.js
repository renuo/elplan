// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import 'phoenix_html'

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

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
