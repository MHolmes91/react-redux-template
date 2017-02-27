import { combineReducers } from 'redux'
import { LOGIN_SUBMIT, LOGOUT_SUBMIT, REGISTRATION_SUBMIT } from '../actions'

function login(state = {}, action){
	switch(action.type){
		case LOGIN_SUBMIT:
			if(action.data.username && action.data.password){
				return Object.assign({}, state, {
					loggedInUser: action.data.username
				});
			}
			else{
				return state;
			}
		case REGISTRATION_SUBMIT:
			if(action.data.username && action.data.password && action.data.email){
				return Object.assign({}, state, {
					loggedInUser: action.data.username
				});
			}
			else{
				return state;
			}
		case LOGOUT_SUBMIT:
			return Object.assign({}, state, {
				loggedInUser: null
			});
		default:
			return state;
	}
}

const templateApp = combineReducers({
	login:login
})

export default templateApp