<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light dash-navbar">
    <router-link to="/books" class="navbar-brand"></router-link>
    <img
      src="../assets/logo.png"
      class="d-inline-block align-top"
      width="80"
      height="80"
      alt="logo"
    />
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarContent"
      aria-controls="navbarContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/books" class="nav-link brand-title">
            Books Management Solution
          </router-link>
        </li>
      </ul>
      <span class="navbar-text mr-4 logged-in-user">{{
        `${createdUser.firstName} ${createdUser.lastName}`
      }}</span>
      <button
        class="btn btn-outline-info my-2 my-sm-0"
        type="submit"
        @click="handleLogout"
      >
        Logout
      </button>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "NavBar",
  computed: {
    ...mapGetters(["createdUser"])
  },
  methods: {
    ...mapActions(["userLogout"]),
    handleLogout() {
      this.userLogout();
    }
  }
};
</script>

<style lang="scss" scoped>
.dash-navbar {
  background-color: #d9eef9;
  box-shadow: 5px 10px 10px #888888;
}
.logged-in-user {
  color: #1d3b6c !important;
}
</style>
