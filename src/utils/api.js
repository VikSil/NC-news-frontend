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

export const patchArticleVotes = (article_id)=>{
    const URL = `https://nc-news-api-n397.onrender.com/api/articles/${article_id}`;
    const data = {inc_votes: 1};

    return axios
      .patch(URL, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });

}




// "PATCH /api/articles/:article_id": {
// "description": "amend the number of votes on an article",
// "queries": [],
// "requestBody": {
// "inc_votes": 15
// },
// "exampleResponse": {
// "article": [
// {
// "article_id": 3,
// "title": "Eight pug gifs that remind me of mitch",
// "topic": "mitch",
// "author": "icellusedkars",
// "body": "some gifs",
// "created_at": "2020-11-03T09:12:00.000Z",
// "votes": 15,
// "article_img_url": "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700"
// }
// ]
// }
// },