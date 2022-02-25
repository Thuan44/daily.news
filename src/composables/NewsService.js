// import axios from "axios";

// export default {
//   getNews() {
//     const newsApiUrl =
//       process.env.VUE_APP_NEWS_API + process.env.VUE_APP_NEWS_API_KEY;
//     const allNews = ref([]);

//     axios
//       .get(newsApiUrl)
//       .then((response) => {
//         allNews.value = response.data.articles;
//         console.log(allNews.value);
//       })
//       .catch((error) => {
//         console.log("There was an error : ", error.response);
//       });
//   },
// };
