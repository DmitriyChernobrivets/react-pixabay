import { combineReducers } from "redux";
import picturesReducer from "./pictures";

const reducer = combineReducers({
  pictures: picturesReducer
});

export default reducer;
