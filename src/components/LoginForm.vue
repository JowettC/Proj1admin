<template>
  <div class ="login-container">
   <b-field label="Username">
            <b-input v-model="inputUsername"></b-input>
        </b-field>

        <b-field label="Password">
            <b-input v-model="inputPassword" type="password"></b-input>
        </b-field>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      inputUsername: null,
      userNameType: null,
      inputPassword: null,
      message: null,
      error: null,
    };
  },
//   methods: {
//     addErrorMsg(error) {
//       if (this.message) {
//         this.message[0].content = error;
//       } else {
//         this.message = [{ severity: "error", content: error }];
//       }
//     },
    // async submitForm() {
    //   // retrieve user
    //   const res = await this.$http
    //     .post("login", {
    //       json: {
    //         username: this.inputUsername,
    //         password: this.inputPassword,
    //       },
    //     })
    //     .json();
    //   if (res.message) {
    //     this.addErrorMsg(res.message);
    //   } else {
    //     this.$store.dispatch("setToken", res.token);
    //     this.$store.dispatch("setUser", this.inputUsername);
    //     this.$store.dispatch("setRole", res.roleName);
        
    //     this.$router.push({ name: "Dashboard" });
    //   }
    // },
//   },
};
</script>

<style scoped>
.login-container{
    max-width:500px;
    margin:auto;

}
</style>