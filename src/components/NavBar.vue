<template>
  <b-navbar :spaced="true">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <picture>
          <source
            srcset="@/assets/AlphaLogoWhite-small.webp"
            type="image/webp"
          />
          <source srcset="@/assets/AlphaLogoWhite-small.png" type="image/png" />
          <img src="@/assets/AlphaLogoWhite-small.png" alt="Alpha Logo" />
        </picture>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="/workshop">
        Workshops
      </b-navbar-item>
      <b-navbar-item href="#">
        Downloads
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item>
        <b-button>Log out</b-button>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
export default {
  name: "nav-bar",
};
</script>
<style lang="scss" scoped>
.navbar-item img {
  max-height: 2.75rem !important;
}
@media only screen and (min-width: 1023px) {
  .navbar-item img {
    max-height: 3.75rem !important;
  }
}
</style>
