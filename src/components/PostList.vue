<template>
  <div id="post_list">
    <div class="wrapper">
      <h5 class="mb-4">My feed</h5>

      <div class="row justify-content-between align-items-center">
        <div class="card text-left">
          <h5 class="card-title">
            Regex library - A curated list of most commonly used regular
            expressions
          </h5>
          <small class="text-muted posting-date">Last updated 3 mins ago</small>
          <div class="post-img-container">
            <img
              src="@/assets/img.png"
              class="card-img-top w-100 post-img"
              alt="Post image"
            />
          </div>
        </div>
        <div class="card text-left">
          <h5 class="card-title">
            Regex library - A curated list of most commonly used regular
            expressions
          </h5>
          <small class="text-muted posting-date">Last updated 3 mins ago</small>
          <div class="post-img-container">
            <img
              src="@/assets/img.png"
              class="card-img-top w-100 post-img"
              alt="Post image"
            />
          </div>
        </div>
        <div class="card text-left">
          <h5 class="card-title">
            Regex library - A curated list of most commonly used regular
            expressions
          </h5>
          <small class="text-muted posting-date">Last updated 3 mins ago</small>
          <div class="post-img-container">
            <img
              src="@/assets/img.png"
              class="card-img-top w-100 post-img"
              alt="Post image"
            />
          </div>
        </div>
        <div class="card text-left">
          <h5 class="card-title">
            Regex library - A curated list of most commonly used regular
            expressions
          </h5>
          <small class="text-muted posting-date">Last updated 3 mins ago</small>
          <div class="post-img-container">
            <img
              src="@/assets/img.png"
              class="card-img-top w-100 post-img"
              alt="Post image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  padding: 40px 0;
  /* max-width: 1376px; */
  margin: 0 auto;
}

h5 {
  text-align: left;
  font-weight: 600;
}

.row {
  gap: 30px;
}

.card {
  background: #292b31;
  border-radius: 15px;
  border: 1px solid rgba(168, 179, 207, 0.2);
  padding: 30px 30px;
  min-width: 287px;
  max-width: 318px;
  height: 364px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  transition: box-shadow 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}

.card:hover {
  box-shadow: rgba(9, 30, 66, 0.8) 0px 4px 12px -2px,
    rgba(9, 30, 66, 0.18) 0px 0px 0px 5px;
  border: 1px solid rgba(168, 179, 207, 0.4);
  cursor: pointer;
}

.posting-date {
  text-align: left;
}

.post-img-container {
  width: 100%;
  margin: 0 auto;
}

.post-img {
  border-radius: 15px;
}

/* Media queries */
@media only screen and (min-width: 1668px) {
  .wrapper {
    max-width: 1376px;
  }
}

@media only screen and (max-width: 1668px) {
  .wrapper {
    width: 80%;
  }
}

@media only screen and (max-width: 1440px) {
  .wrapper {
    width: 90%;
  }
}

@media only screen and (max-width: 1360px) {
  .wrapper {
    width: 60%;
  }
}

@media only screen and (max-width: 1270px) {
  .wrapper {
    width: 70%;
  }
}

@media only screen and (max-width: 1020px) {
  .wrapper {
    width: 80%;
  }

  .card {
    margin: 0 auto;
  }
}
</style>