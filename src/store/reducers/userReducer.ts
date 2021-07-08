import * as actions from "../actionTypes/userType";
export interface IUser {
    name: string,
    password: string
}

const initState: IUser = {
    name: "",
    password: ""
}

export default function userReducer(state: IUser = initState, action: actions.UserAction): IUser {
    switch (action.type) {
        case actions.LOGINSUCCESS:
            return action.payload;
        case actions.LOGOUT:
            return {
                name: "",
                password: ""
            };
        default:
            return state
    }
}