import * as action from "../actionTypes/userType";

export function loginSuccess(name: string, password: string): action.LoginSuccessAction {
    return {
        type: action.LOGINSUCCESS,
        payload: {
            name,
            password
        }
    }
}

export function loginError(): action.LoginFailAction {
    return {
        type: action.LOGINERROR
    }
}

export function logout(): action.LogoutAction {
    return {
        type: action.LOGOUT
    }
}

export function loginRequest(name: string, password: string): action.LoginRequestAction {
    return {
        type: action.LOGINREQUEST,
        payload: {
            name,
            password
        }
    }
}