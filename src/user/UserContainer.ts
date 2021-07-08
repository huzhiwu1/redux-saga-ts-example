import { connect } from "react-redux";
import { Dispatch } from "redux"
import { AppState } from '../store/reducers/rootReducer';
import * as action from "../store/actionTypes/userType";
import * as actionCreators from "../store/actionCreators/userActionCreators";
import UserComponent from "./UserComponent";
const mapStateToProps = (state: AppState) => {
    return {
        name: state.user.name,
        password: state.user.password
    }
}

const mapDispatchToProps = (dispatch: Dispatch<action.UserAction>) => {
    return {
        login(name: string, password: string) {
            dispatch(actionCreators.loginRequest(name, password))
        },
        logout() {
            dispatch(actionCreators.logout())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserComponent)