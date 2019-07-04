//constants
import { userConstants } from '../_constants/user.constant';
import { userService } from '../_services/user.service';

let user = userService.getCurrentUser();
const initialState = user ? { loggedIn: true, user } : {};

export function users(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN:
            return {
                loggingIn: true,
                email: action.email
            };
        case userConstants.LOGIN_SUCCESS:
            return { loggedIn: true, user: action.user };
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state;
    }
}
