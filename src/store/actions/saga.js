import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../services/api";
import { FETCH_DATA, fetchReceivedData } from "./actions";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions

function* fetchProducts() {
  try {
    const products = yield call(api);
    yield put(fetchReceivedData(products));
  } catch (e) {
    console.log(e);
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeLatest(FETCH_DATA, fetchProducts);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/

export default mySaga;
