<template lang="pug">
  nav.navbar.is-transparent
    div.navbar-brand
      a.navbar-item(
        href="/"
      )
        img(
          src="https://bulma.io/images/bulma-logo.png",
          alt="In Her Shoes",
          width="112",
          height="28"
        )
      div.navbar-burger.burger(
        data-target="navbarExampleTransparentExample"
      )
        span
        span
        span
        span

    div#navbarExampleTransparentExample.navbar-menu
      div.navbar-start
        router-link.navbar-item(
          to="/"
        ) Home
        router-link.navbar-item(
          to="/about"
        ) About

      div.navbar-end
        div.navbar-item
          div.field.is-grouped
            p.control
              a.button(
                v-if="!isLoggedIn"
              )
                router-link.navbar-item(
                  to="/auth"
                ) Login

              a.button(
                v-else,
                @click="logout"
              )
                span Logout

            p.control
              a.button.is-primary
                span Share Story
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout: function() {
      localStorage.removeItem("token");
    }
  },
  computed: {
    isLoggedIn: function() {
      return !!this.$store.getters.getToken;
    }
  }
};
</script>

<style scoped>
</style>
