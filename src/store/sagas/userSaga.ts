import { call, put, take, fork, cancel, cancelled } from '@redux-saga/core/effects';
import * as actions from "../actionTypes/userType";
import * as actionCreators from "../actionCreators/userActionCreators";
import { login, storeItem, clearItem } from "../../service/user";
import { ForkEffect, SagaReturnType } from 'redux-saga/effects';

function* authorize(name: string, password: string) {
    try {
        const { name: newName, password: newPassword } = yield call(login, name, password)
        yield put(actionCreators.loginSuccess(newName, newPassword))
        yield call(storeItem, newName, newPassword)

    } catch (error) {
        yield put(actionCreators.loginError())
    } finally {
        // 如果有loadin的存在，当logout杀死了这个进程，那么loading会一直是是true
        // @ts-ignore
        if (yield cancelled()) {

        }
    }
}

export default function* loginFlow() {
    while (true) {
        const { payload: { name, password } }: actions.LoginRequestAction = yield take(actions.LOGINREQUEST)
        const task: ForkEffect<SagaReturnType<typeof authorize>> = yield fork(authorize, name, password)
        const action: actions.LogoutAction | actions.LoginFailAction = yield take([actions.LOGOUT, actions.LOGINERROR])
        if (action.type === actions.LOGOUT) {
            // @ts-ignore
            cancel(task)
            yield call(clearItem)
        }

    }
}