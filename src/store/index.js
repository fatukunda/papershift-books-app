import Vue from "vue";
import Vuex from "vuex";
import userModule from "./modules/userModule";
import booksModule from "./modules/booksModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userModule,
    booksModule
  }
});
