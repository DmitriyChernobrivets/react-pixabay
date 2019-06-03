import { combineReducers } from "redux";
import pictures from "./pictures";

const reducer = combineReducers({
  pictures: pictures
});

export default reducer;
