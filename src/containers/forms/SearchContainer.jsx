import { connect } from 'react-redux';
import {submitSearch} from '../../actions';
import SearchForm from '../../components/forms/SearchForm.jsx';

import { actions } from 'react-redux-form';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchSubmit: (query, type) => {
			dispatch(submitSearch(query, type));
		}
	}
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchForm);

export default SearchContainer;