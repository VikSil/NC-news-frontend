import axios from "axios";

export const getAllArticles = () => {
  const URL = `https://nc-news-api-n397.onrender.com/api/articles`;
  return axios.get(URL)
    .then((response) => {return response.data})
    .catch((error) => {
      throw error;
    });
};
