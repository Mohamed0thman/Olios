import SliderActionType from "./directory.type";

import {
  firestore,
  convertSlidersSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchSlidersStart = () => ({
  type: SliderActionType.FETCH_SLIDERS_START,
});

export const fetchSlidersSuccess = (slidersMap) => ({
  type: SliderActionType.FETCH_SLIDERS_SSUCCESS,
  payload: slidersMap,
});

export const fetchSlidersFailure = (errorMessage) => ({
  type: SliderActionType.FETCH_SLIDERS_FAILURE,
  payload: errorMessage,
});

export const fetchSlidersStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("sliders");

    dispatch(fetchSlidersStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertSlidersSnapshotToMap(snapshot);
        dispatch(fetchSlidersSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchSlidersFailure(error.message)));
  };
};
