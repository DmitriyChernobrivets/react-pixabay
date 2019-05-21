const FETCH_DATA = "FETCH_DATA";
const FETCH_RECEIVED_DATA = "FETCH_RECEIVED_DATA";

const fetchData = () => ({ type: FETCH_DATA });
const fetchReceivedData = data => ({ type: FETCH_RECEIVED_DATA, payload: data });

export { FETCH_DATA, FETCH_RECEIVED_DATA, fetchData, fetchReceivedData };
