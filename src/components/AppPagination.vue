<template>
  <div class="col-md-6">
    <paginate
      :pageCount="itemCount"
      :pageRange="5"
      :pageClass="page - item"
      :pageLinkClass="page - link"
      v-model="activePage"
    >
    </paginate>
  </div>
</template>

<script>
export default {
  name: "AppPagination",
  data() {
    return {
      activePage: 1
    };
  },
  props: {
    itemCount: {
      required: true,
      type: Number
    },
    pages: {
      required: true,
      type: Array
    }
  }
};
</script>

<style></style>
