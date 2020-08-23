<template>
  <nav>
    <div id="nav" v-if="!mobileView">
      <div id="navbar-links">
        <router-link to="/">Home</router-link>
        <router-link to="/workshop">Workshops</router-link>
        <router-link to="/download">Download</router-link>
      </div>
        <span class="log-out-web">Log out</span>
    </div>

    <div id="mobile-nav" v-else>
      <div id="toggle-btn" @click="toggleSideBar()">
        <div class="btn-burger"></div>
      </div>
    </div>
    <div id="sidebar" v-if="mobileView">
      <ul>
        <router-link tag="li" to="/">Home</router-link>
        <router-link tag="li" to="/workshop">Workshops</router-link>
        <router-link tag="li" to="/download">Download</router-link>
      </ul>
      <p class="log-out-mobile">Log out</p>
    </div>
  </nav>
  <!-- <nav-bar-mobile v-if="mobileView" /> -->
</template>
<script>
// import NavBarMobile from "./NavBarMobile";
export default {
  name: "nav-bar",
  components: {
    // "nav-bar-mobile": NavBarMobile
  },
  data: () => {
    return {
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    toggleSideBar() {
      if (this.mobileView) {
        document.getElementById("sidebar").classList.toggle("active");
        document.getElementById("toggle-btn").classList.toggle("active");
      }
    },
  },
  computed: {
    mobileView() {
      return this.windowWidth <= 1024;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>
<style lang="scss" scoped>
#nav {
  height: 100px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 2;
  img {
    padding: 1rem;
  }
  #navbar-links {
    padding-right: 1rem;
    a {
      font-weight: bold;
      color: #3d3d3d;
      text-decoration: none;
      margin: 3em;
      padding-bottom: 3px;
      &.router-link-exact-active {
        color: #ffffff !important;
        border-bottom: 1px solid white;
      }
      &:hover {
        color: #ffffff;
        border-bottom: 1px solid white;
        transition: 200ms ease-in-out;
      }
    }
  }
  .log-out-web{
    margin-left:auto;
    padding-right:3em;
  }
}

#mobile-nav {
  min-height: 50px;
  height: 10vh;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 2;
  justify-content: space-between;

  img {
    height: 7vh;
    width: 7vh;
    min-height: 30px;
    min-width: 30px;
    padding: 2vh 4vw;
  }
  a {
    color: white;
  }
}

#sidebar {
  right: -1024px;
  top: 10vh;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 999;
  cursor: pointer;
  transition: all 300ms linear;
  &.active {
    right: 0px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin-bottom:30px;
    li {
      padding: 15px 10px;
      width: 50%;
      margin: auto;
      color: white;
      text-decoration: none;
      &.router-link-exact-active {
        color: #ffffff !important;
        border-bottom: 1px solid white;
        padding-bottom: 0.5rem;
      }
    }
  }
}

#toggle-btn {
  margin-left:auto;
  margin-right:20px;
  height: 25px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.active {
    .btn-burger {
      transform: rotate(135deg);
    }
    .btn-burger::before,
    .btn-burger::after {
      top: 0;
      transform: rotate(90deg);
    }
  }
}

.btn-burger {
  position: relative;
  max-width: 30px;
  max-height: 5px;
  min-width: 25px;
  min-height: 3px;
  width: 7vh;
  height: 2vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  transition: all 0.7s ease;
  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    top: -10px;
    max-width: inherit;
    max-height: inherit;
    min-width: inherit;
    min-height: inherit;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background: inherit;
  }
  &::after {
    top: 10px;
  }
}
</style>