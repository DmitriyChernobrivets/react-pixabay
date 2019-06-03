import api from "../../services/api";
import { RECEIVED_PICTURE, FETCH_ERROR } from "../../constants/ActionTypes";

const putReceivedPictures = payload => ({ type: RECEIVED_PICTURE, payload });
const receivedError = payload => ({ type: FETCH_ERROR, payload });

const fetchPictures = payload => {
  return async dispatch => {
    try {
      const response = await api.fetchByCategory();
      const data = response.data.hits;

      dispatch(putReceivedPictures(data));
    } catch (error) {
      console.log(error);
      dispatch(receivedError(error.message));
    }
  };
};

export { fetchPictures };
