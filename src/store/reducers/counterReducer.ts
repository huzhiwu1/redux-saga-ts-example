import * as actions from "../actionTypes/counterType";

export type CounterState = number

const initState: CounterState = 0

export default function counterReducer(state = initState, action: actions.counterAction): CounterState {
    switch (action.type) {
        case actions.DECREMENTCOUNTER:
            return state - 1;
        case actions.INCREMENTCOUNTER:
            return state + 1;
        default:
            return state;
    }
}