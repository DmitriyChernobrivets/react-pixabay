import api from "../../services/api";
import {
  RECEIVED_PICTURE,
  FETCH_ERROR,
  MORE_RECEIVED_PICTURE,
  SET_LOADING
} from "../../constants/ActionTypes";

const putReceivedPictures = payload => ({ type: RECEIVED_PICTURE, payload });
const putMorePictures = payload => ({ type: MORE_RECEIVED_PICTURE, payload });
const receivedError = payload => ({ type: FETCH_ERROR, payload });
const setLoading = payload => ({ type: SET_LOADING, payload });

const fetchPictures = payload => {
  return async dispatch => {
    dispatch(setLoading(true));
    try {
      const response = await api.fetchByCategory(payload);
      const data = response.data.hits;
      dispatch(setLoading(false));
      if (payload > 1) {
        dispatch(putMorePictures(data));
      } else {
        dispatch(putReceivedPictures(data));
      }
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
      dispatch(receivedError(error.message));
    }
  };
};

export { fetchPictures };
