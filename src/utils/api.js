import axios from "axios";

export const getArticles = (article_id) => {
  let URL = "https://nc-news-api-n397.onrender.com/api/articles";

  if (article_id) {
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

export const getTopics = () => {
  let URL = "https://nc-news-api-n397.onrender.com/api/topics";

  return axios
    .get(URL)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getUsers = () => {
  let URL = "https://nc-news-api-n397.onrender.com/api/users";

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
  const URL = `https://nc-news-api-n397.onrender.com/api/articles/${article_id}/comments`;

  return axios
    .get(URL)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const patchArticleVotes = (vote_count = 1, article_id) => {
  const URL = `https://nc-news-api-n397.onrender.com/api/articles/${article_id}`;
  const data = { inc_votes: vote_count };

  return axios
    .patch(URL, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const postComment = (article_id, data) => {
  const URL = `https://nc-news-api-n397.onrender.com/api/articles/${article_id}/comments`;

  return axios
    .post(URL, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const deleteComment = (comment_id) => {
  const URL = `https://nc-news-api-n397.onrender.com/api/comments/${comment_id}`;

  return axios
    .delete(URL)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
