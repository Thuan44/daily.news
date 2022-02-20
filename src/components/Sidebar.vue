<template>
  <div id="sidebar">
    <aside class="aside">
      <h5 class="text-left mb-4">Manage</h5>
      <div class="settings">
        <ul class="list-unstyled ms-1 setting-list">
          <li class="mb-4">
            <div>
              <div class="mb-2">
                <i class="fa-solid fa-list me-2"></i> Layout
              </div>
              <button class="btn btn-primary btn-settings">
                Toggle Layout
              </button>
            </div>
          </li>
          <li>
            <div>
              <div class="mb-2">
                <i class="fa-solid fa-arrows-left-right me-2"></i> Density
              </div>
              <button class="btn btn-primary btn-settings">
                Toggle Density
              </button>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.aside {
  display: block;
  margin: 0;
  padding: 0;
  width: 200px;
  border-right: 1px solid rgba(168, 179, 207, 0.2);
  height: 100vh;
  overflow: auto;
  padding: 40px 20px;
  text-align: left;
}

h5 {
  color: rgba(168, 179, 207, 0.6392156862745098);
  font-size: 1.2rem;
  font-weight: bold;
}

.setting-list {
  font-weight: 500;
}

.btn-settings {
  font-size: 0.8rem;
  height: 30px;
  background: #0d1217;
  border: 1px solid rgba(168, 179, 207, 0.2);
  transition: ease-in-out 0.2s;
}

.btn-settings:hover {
  background: #41b883;
  border-color: #41b883;
}
</style>