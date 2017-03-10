import { connect } from 'react-redux';
import {submitSearch} from '../../actions';
import SearchResults from '../../components/blocks/SearchResults.jsx';

const mapStateToProps = (state) => {
	let searchState = state.templateApp.search;

	return {
		isPending: searchState.isPending,
		results: searchState.results,
		error: searchState.error,
		type: searchState.type
	};
};

const mapDispatchToProps = (dispatch) => ({})

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchResults);

export default SearchContainer;