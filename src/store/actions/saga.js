import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../services/api";
import { fetchReceivedData, fetchError } from "./actions";
import { FETCH_DATA } from "../../constants/ActionTypes";

function* fetchImages() {
  try {
    const products = yield call(api.fetchByCategory);
    yield put(fetchReceivedData(products));
  } catch (e) {
    yield put(fetchError(e));
  }
}

function* mySaga() {
  yield takeLatest(FETCH_DATA, fetchImages);
}

export default mySaga;
