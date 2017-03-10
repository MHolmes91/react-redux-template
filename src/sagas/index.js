import { takeLatest } from "redux-saga";
import { put, take, select } from "redux-saga/effects";
import { push } from 'react-router-redux';
import {
	API_SEARCH,
	API_SEARCH_SUCCESS,
	API_SEARCH_ERROR,
	MESSAGE_SEARCH,
	MESSAGE_SEARCH_SUCCESS,
	MESSAGE_SEARCH_ERROR
} from '../actions';
import { actions } from 'react-redux-form';

//Outputs a message after getting the API response
function* search(action){
	//Dispatches the search action
	yield put({
		type: API_SEARCH,
		data: action.data
	});

	//waits for a success or error
	const apiSearchResult = yield take([API_SEARCH_SUCCESS, API_SEARCH_ERROR]);
	const isSuccess = apiSearchResult.type == API_SEARCH_SUCCESS;

	//Do something else if needed, another API call or dispatching/waiting for more actions

	//Dispatch success or failure events
	if(isSuccess){
		yield put({
			type: MESSAGE_SEARCH_SUCCESS,
			data: apiSearchResult.data.body
		})
	}
	else{
		yield put({
			type: MESSAGE_SEARCH_ERROR,
			data: error
		})

		//yield put(push('/error'));	//Navigate
	}
}

function* searchWatcher(){
	yield* takeLatest(MESSAGE_SEARCH, search);
}

export { searchWatcher };