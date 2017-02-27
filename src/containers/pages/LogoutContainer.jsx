import { connect } from 'react-redux';
import {submitLogout} from '../../actions';
import Logout from '../../components/pages/Logout.jsx';

const mapStateToProps = (state) => { return {}};

const mapDispatchToProps = (dispatch) => {
	return {
		onLogout: () => {
			dispatch(submitLogout());
		}
	}
}

const LogoutContainer = connect(mapStateToProps, mapDispatchToProps)(Logout);

export default LogoutContainer;