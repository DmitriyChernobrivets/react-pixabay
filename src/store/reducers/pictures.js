import { RECEIVED_PICTURE, FETCH_ERROR } from "../../constants/ActionTypes";

const IState = {
  items: null,
  error: null
};

const main = (state = IState, { type, payload }) => {
  switch (type) {
    case RECEIVED_PICTURE:
      return { items: payload, error: null };
    case FETCH_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default main;
