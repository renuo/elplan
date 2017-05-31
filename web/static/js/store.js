import { applyMiddleware, createStore, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import rootReducer from './reducers'
import { loadState, saveState } from './services/localStorage'

const defaultState = loadState() || {
  user: false
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(
  connectRouter(history)(rootReducer),
  defaultState,
  composeEnhancers(applyMiddleware(middleware))
)

// eslint-disable-next-line fp/no-unused-expression
store.subscribe(() =>
  saveState({
    user: store.getState().user
  })
)

export default store
