<template>
  <div id="app">
    <router-view />
    <Footer />
  </div>
</template>

<script>
import store from "./store";
import axios from "axios";
import router from "./router";
import Footer from "./components/Footer";
export default {
  created() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("auth_token");
    if (isLoggedIn) {
      store.commit("authenticateUserSuccess", user);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      router.push("/books");
    } else {
      router.push("/");
    }
  },
  components: {
    Footer
  }
};
</script>

<style lang="scss"></style>
