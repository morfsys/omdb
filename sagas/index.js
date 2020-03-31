/* global fetch */
import es6promise from "es6-promise";
import "isomorphic-unfetch";
import { put, takeLatest, all } from "redux-saga/effects";
import { actionTypes } from "../actions";

es6promise.polyfill();

function* fetchMovie({ payload }) {
    let json = null;

    if (payload) {
        json = yield fetch(
            `http://www.omdbapi.com/?apikey=98aa7ccf&t=${payload}`
        )
            .then(response => response.json())
            .catch(e => e);
    }
    yield put({ type: actionTypes.DATA_RECEIVED, payload: json });
}
function* actionWatcher() {
    yield takeLatest(actionTypes.SEARCH_MOVIE, fetchMovie);
}
export default function* rootSaga() {
    yield all([actionWatcher()]);
}
