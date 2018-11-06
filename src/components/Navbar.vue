<template lang="pug">
    nav.navbar.is-dark
        div.navbar-brand
            a.navbar-item(
            href="/"
            ) In Her Shoes

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
                ) Stories
                router-link.navbar-item(
                to="/about"
                ) About
                router-link.navbar-item(
                to="/stories"
                ) Your Story
                router-link.navbar-item(
                to="/contact"
                ) Contact
                router-link.navbar-item(
                to="/support"
                ) Support
                router-link.navbar-item(
                to="/admin"
                ) Admin

            div.navbar-end
                div.navbar-item
                    span.icon.is-small
                        i.fab.fa-facebook-f
                div.navbar-item
                    span.icon.is-small
                        i.fab.fa-instagram
                div.navbar-item
                    span.icon.is-small
                        i.fab.fa-twitter
                div.navbar-item
                    span(
                        v-if="!isLoggedIn",
                        @click="redirectAuth"
                    ) Login
                    span(
                        v-else,
                        @click="logout"
                    ) Logout
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout: function() {
      localStorage.removeItem("token");
      this.$store.commit("removeToken");
    },
    redirectAuth: function() {
      this.$router.push("auth");
    }
  },
  computed: {
    isLoggedIn: function() {
      return !!this.$store.getters.getToken;
      // return !!localStorage.getItem('token');
    }
  }
};
</script>

<style lang="scss" scoped>
a.button.is-primary.navbar-item {
  color: #cccccc;
}
nav {
  background-color: #2c2c2c;
  color: white;
}

.navbar-item {
  cursor: pointer;
}
</style>
