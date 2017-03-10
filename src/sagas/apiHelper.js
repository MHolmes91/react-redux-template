import { call, put } from "redux-saga/effects";

export function* apiCall(successEvent, failureEvent, path, method = 'GET', getData = null, postData = null, options = {}, action = null){
	path = path + (getData ? '?' + constructGetParameters(getData) : '');

	options.method = method;
	if(postData){
		options.body = postData;
	}

	let requestStartTime = new Date();

	try{
		const data = yield call(fetch, path, options);
		if(data.ok){
			yield put({
				type: successEvent,
				data: {
					body: yield data.json(),
					meta: {
						status: data.status,
						statusText: data.statusText,
						startTime: requestStartTime,
						endTime: new Date()
					}
				}
			});
		}
		else{
			yield put({
				type: failureEvent,
				data: {
					error: yield data.json(),
					meta: {
						status: data.status,
						statusText: data.statusText,
						startTime: requestStartTime,
						endTime: new Date()
					}
				}
			});
		}
	}
	catch(e){
		yield put({
			type: failureEvent,
			data: {
				error: e,
				meta: {
					status: 0,
					statusText: 'Unknown error',
					startTime: requestStartTime,
					endTime: new Date()
				}
			}
		});
	}
}

export function* authenticatedApiCall(successEvent, failureEvent, path, method = 'GET', getData = null, postData = null, options = {}, action = null){
	//Add access token
	if(action.data && action.data.access_token){
		let authorizationHeader = {'Authorization': 'Bearer ' + action.data.access_token};
		if(options){
			if(options.headers instanceof Headers){
				options.headers.set('Authorization', authorizationHeader['Authorization']);
			}
			else{
				options.headers = new Headers({'Authorization': authorizationHeader});
			}
		}
		else{
			options = {
				headers: new Headers({'Authorization': authorizationHeader})
			};
		}
	}

	yield* apiCall(successEvent, failureEvent, path, method, getData, postData, options, action);
}

function constructGetParameters(parameterObject){
	return Object.keys(parameterObject).map((objKey) => encodeURIComponent(objKey) + '=' + encodeURIComponent(parameterObject[objKey])).join('&');
}