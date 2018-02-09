import { createStore, applyMiddleware} from 'redux';

import loggerMiddleware  from 'redux-logger';

import reducers from './reducers';

const middleware = applyMiddleware(loggerMiddleware);

const store = createStore(reducers, middleware);

//const store = createStore(reducers);

export default store;