import axios from "axios";
import config from "./apiConfig";

const { API_KEY, URL } = config;

const api = {
  fetchByCategory: (page = 1, category = "nature", type = "photo") =>
    axios.get(
      `${URL}?key=${API_KEY}&category=${category}&image_type=${type}&per_page=20&page=${page}`
    )
};

// const api = async () => {
//   try {
//     const data = await fetch(
//       "https://pixabay.com/api/?key=10233175-245f6a83d674225210904c392&category=fashion&image_type=photo&per_page=30"
//     );
//     return data.json();
//   } catch (e) {
//     console.log(e);
//   }
// };

export default api;
