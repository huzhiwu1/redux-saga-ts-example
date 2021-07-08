import { all, fork } from "redux-saga/effects";
import counterSaga from "./counterSaga";
import watchAndLogSaga from "./watchAndLogSaga";
import threeActionTipsSaga from "./threeActionTipsSaga";
import userSaga from "./userSaga";

export default function* rootSaga() {
    yield all([
        fork(counterSaga),
        fork(watchAndLogSaga),
        fork(threeActionTipsSaga),
        fork(userSaga)
    ])
}