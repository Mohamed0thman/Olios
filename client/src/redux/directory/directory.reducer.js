import SliderActionType from "./directory.type";

const INTIAL_STATE = {
  slider: null,
  isFetching: false,
  errorMessage: undefined,
};

const slidersReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SliderActionType.FETCH_SLIDERS_START:
      return {
        ...state,
        isFetching: true,
      };
    case SliderActionType.FETCH_SLIDERS_SSUCCESS:
      return {
        ...state,
        isFetching: false,
        slider: action.payload,
      };
    case SliderActionType.FETCH_SLIDERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
export default slidersReducer;
