<template>
  <div>
    <h5 class="text-white text-center mb-4">
      {{ isLoginForm ? "Login to Your Account" : "Create an Account" }}
    </h5>
    <form @submit.prevent="formSubmitHandler">
      <div class="form-group">
        <input
          type="text"
          placeholder="First Name"
          class="form-control"
          v-model="firstName"
          v-if="!isLoginForm"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          placeholder="Last Name"
          class="form-control"
          v-model="lastName"
          v-if="!isLoginForm"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="email"
          placeholder="Email"
          class="form-control"
          v-model="email"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          placeholder="Password"
          class="form-control"
          v-model="password"
          required
        />
      </div>
      <button type="submit" class="btn btn-secondary btn-block">
        <div
          class="spinner-border spinner-border-sm"
          role="status"
          v-if="isLoading"
        >
          <span class="sr-only">Loading...</span>
        </div>
        {{ isLoginForm ? "Sign In" : "Sign Up" }}
      </button>
      <div v-if="error" class="alert alert-danger mt-4" role="alert">
        {{ error }}
      </div>
      <div class="text-white no-account">
        <p class="text-center mt-4" v-if="isLoginForm">
          No Account?
          <span
            @click="navigateToRegistration"
            class="text-white ml-2 register"
          >
            REGISTER NOW!</span
          >
        </p>
        <p class="text-center mt-4" v-else>
          Already have an account?
          <span @click="navigateToLogin" class="text-white ml-2 register">
            SIGN IN!</span
          >
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "LoginForm",
  data() {
    return {
      isLoginForm: true,
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters(["isLoading", "error"])
  },
  methods: {
    ...mapActions(["createNewUser"]),
    navigateToRegistration() {
      this.isLoginForm = false;
    },
    navigateToLogin() {
      this.isLoginForm = true;
    },
    formSubmitHandler() {
      let user;
      if (this.isLoginForm) {
        user = {
          email: this.email,
          password: this.password
        };
      } else {
        user = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password
        };
      }
      const userInfo = {
        userData: user,
        isLoginForm: this.isLoginForm
      };
      this.createNewUser(userInfo);
    }
  }
};
</script>

<style lang="scss" scoped>
.register {
  cursor: pointer;
}
</style>
