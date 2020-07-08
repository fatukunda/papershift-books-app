import axios from "axios";

const baseUrl = "https://relworxbooks.herokuapp.com/api/v1/books";
const booksModule = {
  state: () => ({
    book: {},
    books: [],
    booksLoading: false,
    booksError: null
  }),
  mutations: {
    fetchBooksPending(state, Loading) {
      state.booksLoading = Loading;
    },
    fetchBooksSuccess(state, books) {
      state.books = books;
    },
    fetchBooksFailure(state, error) {
      state.booksError = error;
    }
  },
  getters: {
    booksLoading: state => {
      return state.booksLoading;
    },
    books: state => {
      return state.books;
    },
    booksError: state => {
      return state.booksError;
    }
  },
  actions: {
    async fetchBooks({ commit }) {
      commit("fetchBooksPending", true);
      try {
        const response = await axios.get(baseUrl);
        const {
          data: { books }
        } = response.data;
        commit("fetchBooksSuccess", books);
        commit("fetchBooksPending", false);
      } catch (error) {
        if (error.response.status === 401) {
          commit("fetchBooksFailure", error.response.data);
          localStorage.clear();
          window.location.href = "/";
        }
        commit("fetchBooksFailure", error.response.data);
        commit("fetchBooksPending", false);
      }
    }
  }
};

export default booksModule;
