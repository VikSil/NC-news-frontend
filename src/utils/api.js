import axios from "axios";


export const getArticles = (article_id) => {
  let URL = "https://nc-news-api-n397.onrender.com/api/articles";

  if (article_id){
    URL += `/${article_id}`;
  }

  return axios
    .get(URL)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getComments = (article_id) => {
  let URL = `https://nc-news-api-n397.onrender.com/api/articles/${article_id}/comments`;

  return axios
    .get(URL)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

;