import { applyMiddleware, createStore, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootReducer from './reducers';

const defaultState = {
  user: null
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  connectRouter(history)(rootReducer),
  defaultState,
  composeEnhancers(applyMiddleware(middleware))
);

export default store;
