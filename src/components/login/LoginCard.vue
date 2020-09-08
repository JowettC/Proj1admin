<template>
  <div class="box container" id="login-card">
    <h1 class="title">
      Alpha Global Wellness Admin
    </h1>
    <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from "@/components/login/LoginForm.vue";
export default {
  name: "LoginCard",
  components: {
    LoginForm,
  },
};
</script>

<style lang="scss" scoped>
#login-card {
  width: 50%;

  h1 {
    color: #363636;
  }
  
  @media (max-width: 767px) {
    width: 100%;
  }
}
</style>
