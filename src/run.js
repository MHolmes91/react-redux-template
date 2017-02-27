import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Index from './containers/pages/IndexContainer.jsx';
import Logout from './containers/pages/LogoutContainer.jsx';
import Login from './components/pages/Login.jsx';
import Register from './components/pages/Register.jsx';
import FourOhFour from './components/pages/FourOhFour.jsx';

require('./sass/main.scss');

import { Provider } from 'react-redux'
import {createStore} from 'redux';
import templateApp from './reducers';

import store from './store.js';

console.log('Initial Store State');
console.log(store.getState());

let storeLoggerUnsubscribe = store.subscribe(() => {
	console.log('Store State Change'),
	console.log(store.getState())
});

ReactDOM.render((
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Index}/>
			<Route path="/logout" component={Logout}/>
			<Route path="/login" component={Login}/>
			<Route path="/register" component={Register}/>
			<Route path="*" component={FourOhFour}/>
		</Router>
	</Provider>
), document.getElementById('app'))