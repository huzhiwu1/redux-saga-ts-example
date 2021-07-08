import { select, take } from 'redux-saga/effects';
export default function* watchAction(): Generator<any> {
    while (true) {
        const action = yield take("*")
        const state = yield select()

        console.log(action, 'action')
        console.log(state, 'state')
    }

}