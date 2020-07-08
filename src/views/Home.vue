<template>
  <div>
    <div class="row logo-title">
      <Header />
    </div>
    <div class="row justify-content-center form-modal">
      <div class="col-md-10 form-container">
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
export default {
  name: "Home",
  components: {
    Header,
    LoginForm
  }
};
</script>

<style lang="scss" scoped>
.logo-title {
  margin-bottom: 2rem;
}
.form-modal {
  background-color: #18ae8c;
  width: 40%;
  margin: 0 auto;
  min-height: 50vh;
  box-shadow: 5px 10px 18px #888888;
}
.form-container {
  padding-top: 3rem;
}
@media screen and (max-width: 800px) {
  .form-modal {
    width: 90%;
    margin-bottom: 2rem;
    border-radius: 0;
  }
}
</style>
