<template>
  <div id="home">
    <Navbar />
    <img alt="Vue logo" src="@/assets/logo.png" />
    <h1>Welcome to Daily News</h1>
    <p>Your daily dose of news</p>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  setup() {
    return {};
  },
  components: { Navbar },
};
</script>

<style>
#home {
  height: 100vh;
}
</style>