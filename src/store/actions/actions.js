import { FETCH_DATA, FETCH_RECEIVED_DATA, FETCH_ERROR } from "../../constants/ActionTypes";

const fetchData = () => ({ type: FETCH_DATA });
const fetchReceivedData = ({ data }) => ({ type: FETCH_RECEIVED_DATA, payload: data });

const fetchError = err => ({ type: FETCH_ERROR, payload: err });

export { fetchData, fetchReceivedData, fetchError };
