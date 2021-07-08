import * as actions from "../actionTypes/counterType";
import * as actionCreators from "../actionCreators/counterActionCreators";
import { fork, put, all, call, takeEvery, delay } from "redux-saga/effects";


export function* syncIncrement() {
    yield delay(1000)
    yield put(actionCreators.incrementCounter())
}
export function* watchSyncIncrement() {
    yield takeEvery(actions.SYNCINCREMENTACTION, syncIncrement)
}

export function* syncDecrement() {
    yield delay(1000)
    yield put(actionCreators.decrementCounter())
}

export function* watchSyncDecrement() {
    yield takeEvery(actions.SYNCDECREMENTACTION, syncDecrement)
}

export default function* counterSaga() {
    yield all([
        fork(watchSyncDecrement),
        fork(watchSyncIncrement)
    ])
}