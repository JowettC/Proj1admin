<template>
<section class ="login-section">
  <div class ="login-container">
  <div class ="login-fields"> 
    <h1 class="title">Alpha Global Wellness Admin</h1>
   <b-field label="Username">
            <b-input v-model="inputUsername"></b-input>
        </b-field>

        <b-field label="Password">
            <b-input v-model="inputPassword" type="password"></b-input>
        </b-field>
  </div>
  </div>
  </section>
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
.login-section{
  position:relative;
  width:100vw;
  height:100vh;
}
.login-fields{
  padding:20px;

}
.login-container{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow:0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;
  border-radius: 15px;
    max-width:300px;
    margin:auto;
}
@media only screen and (max-width: 550px){
  .login-container{
    max-width:80vw;
  }
}
</style>