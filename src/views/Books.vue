<template>
  <div>
    <NavBar />
    <div class="container main-container">
      <div class="row">
        <div class="col-md-6">
          <SearchForm />
        </div>
        <div class="col-md-6">
          <button
            class="btn float-right btn-success"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            Add New Book
          </button>
        </div>
      </div>
    </div>
    <div class="container mt-4 books-container">
      <div
        v-if="booksLoading"
        class="container mt-4 books-container d-flex justify-content-center align-items-center"
      >
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div class="row mb-2">
        <Book v-for="book in books" :key="book.isbn" :book="book" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import NavBar from "../components/NavBar";
import SearchForm from "../components/SearchForm";
import Book from "../components/Book";
export default {
  name: "Books",
  components: {
    NavBar,
    SearchForm,
    Book
  },
  methods: {
    ...mapActions(["fetchBooks"])
  },
  computed: {
    ...mapGetters(["books", "booksLoading", "booksError"])
  },
  created() {
    this.fetchBooks();
  }
};
</script>

<style lang="scss" scoped>
.main-container {
  margin-top: 8rem;
}
.books-container {
  min-height: 45vh;
}
</style>
