import {createStore, applyMiddleware} from 'redux';
import { combineForms } from 'react-redux-form';
import templateApp from './reducers';
import { combineReducers } from 'redux'

const initialRegisterFormState = {
	username: '',
	password: '',
	confirmPassword: '',
	email: ''
};

const initialLoginFormState = {
	username: '',
	password: '',
};

const store = createStore(combineReducers({
	formModels: combineForms({
		registerForm: initialRegisterFormState,
		loginForm: initialLoginFormState
	}, 'formModels'),
	templateApp: templateApp
}));

export default store;