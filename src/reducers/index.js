import { combineReducers } from 'redux'
import {
	MESSAGE_SEARCH,
	MESSAGE_SEARCH_SUCCESS,
	MESSAGE_SEARCH_ERROR
} from '../actions'

function search(state = {}, action){
	switch(action.type){
		case MESSAGE_SEARCH:
			return Object.assign({}, state, {
				isPending: true,
				error: false,
				pendingType: action.data.type
			});
		case MESSAGE_SEARCH_SUCCESS:
			let pendingType = state.pendingType;
			
			return Object.assign({}, state, {
				isPending: false,
				results: action.data,
				error: false,
				type: pendingType,
				pendingType: false
			});
		case MESSAGE_SEARCH_ERROR:
			return Object.assign({}, state, {
				isPending: false,
				results: [],
				error: action.error,
				type: false,
				pendingType: false
			});
		default:
			return state;
	}
}

const templateApp = combineReducers({
	search: search
})

export default templateApp