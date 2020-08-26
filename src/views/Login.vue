<template>
  <section class="hero is-fullheight is-info" id="login-container">
    <div class="hero-body">
      <div class="container">
        <login-card />
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import LoginCard from "@/components/login/LoginCard.vue";

export default {
  name: "Login",
  components: {
    LoginCard,
  },
};
</script>

<style lang="scss" scoped></style>
