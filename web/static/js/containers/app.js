import React from 'react'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import store, { history } from '../store'
import Main from '../main'

export default function App (props) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history} store={store}>
        <Main store={store} />
      </ConnectedRouter>
    </Provider>
  )
}
