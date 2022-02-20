<template>
  <div id="navbar">
    <nav
      class="
        nav
        d-flex
        justify-content-between
        align-items-center align-content-center
      "
    >
      <div class="logo-container">
        <img src="@/assets/logo_small.png" alt="Logo" class="logo" />
      </div>
      <div
        class="
          night-mode-container
          d-flex
          align-items-center align-content-center
        "
      >
        <i class="fa-solid fa-sun me-1"></i
        ><i class="fa-solid fa-toggle-off"></i>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav {
  padding: 12px 16px;
  border-bottom: 1px solid rgba(168, 179, 207, 0.2);
}

.logo-container {
  width: 120px;
}

.logo {
  width: 100%;
}

.fa-sun {
  font-size: 1.2rem;
}

.fa-toggle-off {
  font-size: 1.5rem;
}
</style>