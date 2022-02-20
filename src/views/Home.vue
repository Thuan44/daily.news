<template>
  <div id="home">
    <Navbar />

    <div class="sidebar-main-content d-flex">
      <Sidebar />
      <div class="main-content w-100">
        <PostList />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import PostList from "@/components/PostList.vue";
export default {
  setup() {
    return {};
  },
  components: { Navbar, Sidebar, PostList },
};
</script>

<style scoped>
#home {
  height: 100vh;
}
</style>