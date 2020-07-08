<template>
  <div class="flip-card cover">
    <h4 class="text-white pt-4 mb-4">{{ title }}</h4>
    <div class="mt-4">
      <h6 class="text-white mb-4">No Book Image</h6>
      <p class="text-white">{{ author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoBookCover",
  props: {
    title: {
      required: true,
      type: String
    },
    author: {
      required: true,
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.cover {
  background-color: #5d7b95;
}
.flip-card {
  background-color: transparent;
  height: 320px;
  border: 1px solid #fff;
  perspective: 1000px;
}
</style>
