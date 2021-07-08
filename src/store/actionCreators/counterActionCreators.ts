import * as actions from "../actionTypes/counterType";

export function incrementCounter(): actions.IncrementCounterAction {
    return {
        type: actions.INCREMENTCOUNTER
    }
}

export function decrementCounter(): actions.DecrementCounterAction {
    return {
        type: actions.DECREMENTCOUNTER
    }
}

export function syncDecrement(): actions.SyncDecrementAction {
    return {
        type: actions.SYNCDECREMENTACTION
    }
}

export function syncIncrement(): actions.SyncIncrementAction {
    return {
        type: actions.SYNCINCREMENTACTION
    }
}