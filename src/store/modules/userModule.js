import axios from "axios";

const baseUrl = "https://relworxbooks.herokuapp.com/api/v1/users";
const userModule = {
  state: () => ({
    user: {},
    isLoading: false,
    isLoggedIn: false,
    error: null
  }),
  mutations: {
    authenticateUserPending(state, isLoading) {
      state.isLoading = isLoading;
    },
    authenticateUserSuccess(state, user) {
      state.user = user;
      state.isLoggedIn = true;
    },
    authenticateUserFailure(state, error) {
      state.error = error;
    },
    logoutUser(state) {
      state.isLoggedIn = false;
    }
  },
  getters: {
    isLoading: state => {
      return state.isLoading;
    },
    createdUser: state => {
      return state.user;
    },
    error: state => {
      return state.error;
    }
  },
  actions: {
    async createNewUser({ commit }, userDetails) {
      const { userData, isLoginForm } = userDetails;
      commit("authenticateUserPending", true);
      try {
        let response;
        if (isLoginForm) {
          response = await axios.post(`${baseUrl}/login`, userData);
        } else {
          response = await axios.post(baseUrl, userData);
        }
        const {
          data: { user, token }
        } = response.data;
        console.log(user);
        commit("authenticateUserSuccess", { user, token });
        commit("authenticateUserPending", false);
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("auth_token", token);
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/books";
      } catch (error) {
        if (error.response) {
          commit("authenticateUserFailure", error.response.data.message);
          commit("authenticateUserPending", false);
        }
      }
    },
    userLogout({ commit }) {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user");
      commit("logoutUser");
      window.location.href = "/";
    }
  }
};

export default userModule;
