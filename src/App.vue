<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue"
export default {
  name:'App',
  components:{
    NavBar,
    },
    
  watch: {
    $route() {
      const navEl = document.getElementById("sidebar");
      const toggleBtnEl = document.getElementById("toggle-btn");
      if (navEl && toggleBtnEl) {
        if (navEl.classList.contains("active"))
          navEl.classList.remove("active");
        if (toggleBtnEl.classList.contains("active"))
          toggleBtnEl.classList.remove("active");
      }
    },
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
