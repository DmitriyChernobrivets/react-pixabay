import { RECEIVED_PICTURE, FETCH_ERROR, MORE_RECEIVED_PICTURE, SET_LOADING } from "../../constants/ActionTypes";

const IState = {
  items: null,
  page: 1,
  error: null,
  loading: false
};

const picturesReducer = (state = IState, { type, payload }) => {
  switch (type) {
    case RECEIVED_PICTURE:
      return { items: payload, error: null };
    case SET_LOADING:
      return { ...state, loading: payload };
    case MORE_RECEIVED_PICTURE:
      return { items: state.items.concat(payload), error: null };
    case FETCH_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default picturesReducer;
