<template>
  <form class="form">
    <input
      class="form-control mr-sm-2"
      type="search"
      placeholder="Search book by title or author"
      aria-label="Search"
    />
  </form>
</template>

<script>
export default {
  name: "SearchForm"
};
</script>

<style lang="scss" scoped>
input {
  width: 20rem;
}
</style>
