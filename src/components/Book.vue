<template>
  <div class="col-md-3 mt-4">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img
            v-if="book.image"
            :src="book.image"
            alt="Avatar"
            class="imageStyle"
          />
          <NoBookCover v-else :title="book.title" :author="book.author" />
        </div>
        <div class="flip-card-back">
          <h4 class="mt-4">{{ book.title }}</h4>
          <p>{{ book.author }}</p>
          <p>{{ book.isbn }}</p>
          <div class="mt-4">
            <button class="btn btn-sm btn-warning mr-2 modify-btn">
              Edit
            </button>
            <button class="btn btn-sm btn-danger modify-btn">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NoBookCover from "./NoBookCover";
export default {
  name: "Book",
  props: {
    book: {
      required: true
    }
  },
  components: {
    NoBookCover
  }
};
</script>

<style lang="scss" scoped>
.imageStyle {
  max-width: 250px;
  height: 320px;
}
.flip-card {
  background-color: transparent;
  height: 320px;
  border: 1px solid #fff;
  perspective: 1000px;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}
.flip-card-back {
  background-color: #2a3950;
  color: white;
  transform: rotateY(180deg);
}
.modify-btn {
  width: 5rem;
}
</style>
