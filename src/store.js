import {createStore, applyMiddleware} from 'redux';
import { combineForms } from 'react-redux-form';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import { routerReducer, routerMiddleware, push } from 'react-router-redux';
import { browserHistory } from 'react-router';

import templateApp from './reducers';
import {
	searchWatcher,
} from './sagas';

import {
	apiSearchWatcher,
} from './sagas/api.js';

const routerHistoryMiddleware = routerMiddleware(browserHistory);
const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

const initialSearchFormState = {
	query: '',
	type: 'artist'
};

const store = createStore(
	combineReducers({
		formModels: combineForms({
			searchForm: initialSearchFormState
		}, 'formModels'),
		templateApp,
		routing: routerReducer
	}),
	applyMiddleware(sagaMiddleware, loggerMiddleware, routerHistoryMiddleware)
);

sagaMiddleware.run(apiSearchWatcher);
sagaMiddleware.run(searchWatcher);

export default store;