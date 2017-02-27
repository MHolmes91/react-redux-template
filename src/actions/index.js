export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGOUT_SUBMIT = 'LOGOUT_SUBMIT';
export const REGISTRATION_SUBMIT = 'REGISTER_SUBMIT';

export function submitLogin(username, password){
	return {
		type: LOGIN_SUBMIT,
		data: {
			username: username,
			password: password
		}
	}
}

export function submitLogout(){
	return {
		type: LOGOUT_SUBMIT
	}
}

export function submitRegistration(username, password, email, name){
	return {
		type: REGISTRATION_SUBMIT,
		data: {
			username: username,
			password: password,
			email: email,
			name: name
		}
	}
}