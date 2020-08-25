<template>
  <form @submit.prevent="onSubmit">
    <b-field label="Username">
      <b-input v-model="username" type="text" required></b-input>
    </b-field>
    <b-field label="Password">
      <b-input v-model="password" type="password" required></b-input>
    </b-field>
    <b-button type="is-success is-fullwidth" native-type="submit">
      Login
    </b-button>
  </form>
</template>
<script>
export default {
  name: "LoginForm",
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    async onSubmit() {
      console.log("sending to server");
    },
  },
};
</script>

<style lang="scss" scoped></style>
