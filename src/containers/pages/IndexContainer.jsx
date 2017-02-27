import { connect } from 'react-redux';
import Index from '../../components/pages/Index.jsx';
import { browserHistory } from 'react-router';

const mapStateToProps = (state) => { return {
	user: state.templateApp.login.loggedInUser
}};

const mapDispatchToProps = (dispatch) => {
	return {}
}

const IndexContainer = connect(mapStateToProps, mapDispatchToProps)(Index);

export default IndexContainer;