import { userConstants } from '../_constants/user.constant';
import { userService } from '../_services/user.service';

export const userActions = {
    login,
    logout,
    register
};

function login(email, password) {
    return dispatch => {
        dispatch(request({ email }));

        userService.login(email, password).then(
            user => {
                dispatch(success(user));
            },
            error => {
                dispatch(failure(error.toString()));
            }
        );
    };

    function request(email) {
        return { type: userConstants.LOGIN, email };
    }
    function success(user) {
        return { type: userConstants.LOGIN_SUCCESS, user };
    }
    function failure(error) {
        return { type: userConstants.LOGIN_FAILURE, error };
    }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user).then(
            user => {
                dispatch(success());
            },
            error => {
                dispatch(failure(error.toString()));
            }
        );
    };

    function request(email) {
        return { type: userConstants.REGISTER, email };
    }
    function success(user) {
        return { type: userConstants.REGISTER_SUCCESS, user };
    }
    function failure(error) {
        return { type: userConstants.REGISTER_FAILURE, error };
    }
}
