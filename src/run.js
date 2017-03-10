import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, withRouter } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Index from './containers/pages/IndexContainer.jsx';
import FourOhFour from './components/pages/FourOhFour.jsx';

require('./sass/main.scss');

import { Provider } from 'react-redux'
import { createStore } from 'redux';
import templateApp from './reducers';

import store from './store.js';

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

console.log('Initial Store State');
console.log(store.getState());
console.log('');

const App = withRouter(
	React.createClass({
		render() {
			return(
				<div className='wrapper'>
					{this.props.children && React.cloneElement(this.props.children)}
				</div>
			)
		}
	})
)

ReactDOM.render((
	<Provider store={store}>
		<Router history={history}>
			<IndexRoute component={Index}/>
			<Route path="/" component={Index}/>
			<Route path="*" component={FourOhFour}/>
		</Router>
	</Provider>
), document.getElementById('app'))