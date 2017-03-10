import { takeLatest } from "redux-saga";

import {
	API_SEARCH,
	API_SEARCH_SUCCESS,
	API_SEARCH_ERROR
} from '../actions';

import { apiCall, authenticatedApiCall } from "./apiHelper.js"; 

import {
	apiBase,
	apiId,
	apiSecret
} from "../constants";

function* apiSearch(action){
	yield* apiCall(
		API_SEARCH_SUCCESS,
		API_SEARCH_ERROR,
		apiBase + '/search',
		'GET',
		{
			q: action.data.query,
			type: action.data.type, //Album, Artist, Track, Playlist
			offset: action.data.offset,
			limit: action.data.limit
		},
		null,
		{
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			mode: 'cors'
		}
	);
}

function* apiSearchWatcher(){
	yield* takeLatest(API_SEARCH, apiSearch);
}

export { apiSearchWatcher };