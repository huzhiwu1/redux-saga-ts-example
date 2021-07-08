export const LOGINSUCCESS = "user/login_success";

export interface LoginSuccessAction {
    type: typeof LOGINSUCCESS,
    payload: {
        name: string,
        password: string
    }
}

export const LOGINERROR = "user/login_error"

export interface LoginFailAction {
    type: typeof LOGINERROR,
}


export const LOGOUT = "user/logout"

export interface LogoutAction {
    type: typeof LOGOUT
}

export const LOGINREQUEST = "user/login_request"

export interface LoginRequestAction {
    type: typeof LOGINREQUEST,
    payload: {
        name: string,
        password: string
    }
}

export type UserAction = LoginFailAction | LoginSuccessAction | LogoutAction | LoginRequestAction