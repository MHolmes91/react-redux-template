export const API_SEARCH = 'API_SEARCH'
export const API_SEARCH_SUCCESS = 'API_SEARCH_SUCCESS'
export const API_SEARCH_ERROR = 'API_SEARCH_ERROR'
export const MESSAGE_SEARCH = 'MESSAGE_SEARCH';
export const MESSAGE_SEARCH_SUCCESS = 'MESSAGE_SEARCH_SUCCESS';
export const MESSAGE_SEARCH_ERROR = 'MESSAGE_SEARCH_ERROR';

export function submitSearch(query, type = 'artist', limit = 20, offset = 0){
	return {
		type: MESSAGE_SEARCH,
		data: {
			query: query,
			type: type,
			limit: limit,
			offset: offset
		}
	}
}