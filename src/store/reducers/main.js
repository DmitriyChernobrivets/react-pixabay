import { FETCH_RECEIVED_DATA, FETCH_ERROR } from "../../constants/ActionTypes";

const IState = {
  items: "",
  error: null
};

const main = (state = IState, { type, payload }) => {
  switch (type) {
    case FETCH_RECEIVED_DATA:
      return { items: payload, error: null };
    case FETCH_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default main;
