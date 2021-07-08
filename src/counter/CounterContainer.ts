import { connect } from "react-redux";
import { Dispatch } from "redux";
import { counterAction } from '../store/actionTypes/counterType';
import { AppState } from '../store/reducers/rootReducer';
import * as actionCreators from "../store/actionCreators/counterActionCreators";
import CounterComponent from "./CounterComponent";
const mapStateToProps = (state: AppState) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch: Dispatch<counterAction>) => {
    return {
        increment() {
            dispatch(actionCreators.incrementCounter())
        },
        decrement() {
            dispatch(actionCreators.decrementCounter())
        },
        syncIncrement() {
            dispatch(actionCreators.syncIncrement())
        },
        syncDecrement() {
            dispatch(actionCreators.syncDecrement())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent)