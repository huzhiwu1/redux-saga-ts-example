import { all, take, fork } from 'redux-saga/effects';
import * as actions from "../actionTypes/counterType";

function* watchThreeIncrement() {
    for (let i = 0; i < 3; i++) {
        yield take(actions.INCREMENTCOUNTER)
        console.log(`第${i}调用incrementAction`)
    }
    yield console.log("您已经三次调用incrementAction")
}

function* watchThreeDecrement() {
    for (let i = 0; i < 3; i++) {
        yield take(actions.DECREMENTCOUNTER)
        console.log(`第${i}次调用decrementAction`)
    }
    yield console.log("您已经三次调用decrementAction")
}

export default function* threeActionTipSaga() {
    yield all([
        fork(watchThreeDecrement),
        fork(watchThreeIncrement)
    ])
}