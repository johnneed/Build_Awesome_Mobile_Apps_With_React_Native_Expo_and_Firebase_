import * as firebaseData from '../../data-layer';
import * as types from '../../constants/action-types';

export function getCurrentUser() {
    return (dispatch) => {
        firebaseData.getCurrentUser(dispatch);
    };
}


export function logout() {
    return (dispatch) => {
        firebaseData.logout()
            .then((results) => {
                dispatch({
                    type: types.LOGOUT_SUCCESSFUL,
                    results
                });
            })
            .catch(err => {
                dispatch({type: types.LOGOUT_FAIL, err});
            });
    };
}



export function loginWithEmailPassword(email, password) {
    return (dispatch) => {
        firebaseData.loginWithEmailPassword(email, password).catch(error => {
            dispatch({type: types.LOGIN_FAIL, error});
        });
    };
}



export function resetPassword(emailAddress) {
    return (dispatch) => {
        firebaseData.resetPassword(emailAddress)
            .then(() => dispatch({type: types.RESET_PASSSWORD_SUCCESS}))
            .catch(error => {
                dispatch(
                    {
                        type: types.RESET_PASSWORD_FAIL,
                        error
                    }
                );
            });
    };
}