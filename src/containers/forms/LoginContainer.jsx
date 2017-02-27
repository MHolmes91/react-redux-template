import { connect } from 'react-redux';
import {submitLogin} from '../../actions';
import LoginForm from '../../components/forms/LoginForm.jsx';
import { browserHistory } from 'react-router';

import { actions } from 'react-redux-form';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
	return {
		onLoginSubmit: (username, password) => {
			dispatch(submitLogin(username, password));
			dispatch(actions.reset('formModels.loginForm'));
			browserHistory.push('/');
		}
	}
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default LoginContainer;