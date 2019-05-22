import { FETCH_RECEIVED_DATA } from "../actions/actions";

const IState = {
  value: ""
};

const main = (state = IState, { type, payload }) => {
  switch (type) {
    case FETCH_RECEIVED_DATA:
      return { ...state, value: payload };
    default:
      return state;
  }
};

export default main;
