<template>
  <div id="post_list">
    <div class="wrapper">
      <h5 class="mb-4">My feed</h5>

      <div class="grid gap-8 grid-cols">
        <a
          class="card text-left text-decoration-none"
          v-for="news in allNews"
          :key="news.title"
          :href="news.url"
        >
          <h5 class="card-title">
            {{ news.title.substring(0, 70) + "..." }}
          </h5>
          <p class="posting-date">
            <small class="text-muted"
              >Publié le : {{ news.publishedAt.substring(0, 10) }}</small
            >
          </p>
          <div class="post-img-container">
            <img
              :src="news.urlToImage ?? 'https://picsum.photos/228/150'"
              class="card-img-top h-100 w-100 post-img"
              alt="Post image"
            />
          </div>
          <p class="source mb-0 mt-2">
            <small class="text-muted">Source : {{ news.source.name }}</small>
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import moment from "moment";

export default {
  name: "PostList",
  setup() {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const newsApiUrl =
      proxyUrl +
      import.meta.env.VITE_NEWS_API +
      import.meta.env.VITE_NEWS_API_KEY;
    const allNews = ref([]);

    axios
      .get(newsApiUrl)
      .then((response) => {
        allNews.value = response.data.articles;
        console.log(allNews.value);
      })
      .catch((error) => {
        console.log("There was an error : ", error.response);
      });

    return { allNews, moment };
  },
};
</script>

<style scoped>
.wrapper {
  padding: 40px 60px;
  max-width: 1376px;
  margin: 0 auto;
}

h5 {
  text-align: left;
  font-weight: 600;
}

.grid {
  display: grid;
}

.gap-8 {
  gap: 2rem;
}

.grid-cols {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.card {
  background: #292b31;
  border-radius: 15px;
  border: 1px solid rgba(168, 179, 207, 0.2);
  padding: 20px;
  min-width: 287px;
  max-width: 318px;
  height: 364px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  transition: box-shadow 0.1s ease-in-out;
  transition: 0.3s ease-in-out;
}

.card:hover {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: 1px solid rgba(168, 179, 207, 0.6);
  cursor: pointer;
}

.card-title {
  font-size: 1.1rem;
  color: #fff;
  height: 65px;
}

.posting-date {
  text-align: left;
}

.post-img-container {
  height: 170px;
  margin: 0 auto;
}

.post-img {
  border-radius: 15px;
  object-fit: cover;
}

/* Media queries */
@media screen and (max-width: 1570px) {
  .wrapper {
    max-width: 1050px;
  }
  .grid-cols {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media screen and (max-width: 1250px) {
  .wrapper {
    max-width: 720px;
  }
  .grid-cols {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media screen and (max-width: 968px) {
  .wrapper {
    max-width: 400px;
  }
  .grid-cols {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>