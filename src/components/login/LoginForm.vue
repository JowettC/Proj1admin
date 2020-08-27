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
      const res = await this.$http
        .post("login", {
          json: { username: this.username, password: this.password },
        })
        .json();
      if (res.error) {
        console.log(res.message);
      } else {
        this.$store.dispatch("login", res.data);
        console.log(res.data)
        console.log (this.$store.state.token)
        this.$router.push("/workshop");
        console.log("logged in");
      }
    },
  },
};
</script>
