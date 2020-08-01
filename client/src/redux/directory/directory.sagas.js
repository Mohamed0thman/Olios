import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  firestore,
  convertSlidersSnapshotToMap,
} from "../../firebase/firebase.utils";

import { fetchSlidersSuccess, fetchSlidersFailure } from "./directory.action";

import ShopActionTypes from "./directory.type";

export function* fetchSlidersAsync() {
  try {
    const collectionRef = firestore.collection("sliders");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertSlidersSnapshotToMap, snapshot);
    yield put(fetchSlidersSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchSlidersFailure(error.nessage));
  }
}

export function* fetchSlidersStart() {
  yield takeLatest(ShopActionTypes.FETCH_SLIDERS_START, fetchSlidersAsync);
}

export function* sliderSagas() {
  yield all([call(fetchSlidersStart)]);
}
