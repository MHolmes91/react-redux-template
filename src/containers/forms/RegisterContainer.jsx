import { connect } from 'react-redux';
import {submitRegistration} from '../../actions';
import RegisterForm from '../../components/forms/RegisterForm.jsx';
import { browserHistory } from 'react-router';

import { actions } from 'react-redux-form'

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
	return {
		onRegisterSubmit: (username, password, email) => {
			dispatch(submitRegistration(username, password, email));
			dispatch(actions.reset('formModels.registerForm'));
			browserHistory.push('/');
		}
	}
}

const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(RegisterForm);

export default RegisterContainer;