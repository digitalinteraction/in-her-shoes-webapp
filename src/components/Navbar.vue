<template lang="pug">
    nav.navbar.is-dark
        div.navbar-brand
            a.navbar-item(
            href="/"
            ) In Her Shoes

            div.navbar-burger.burger(
                data-target="navMenu",
                aria-label="menu",
                aria-expanded="false"
            )
                span(
                    aria-hidden="true"
                )
                span(
                    aria-hidden="true"
                )
                span(
                    aria-hidden="true"
                )
                span(
                    aria-hidden="true"
                )

        div#navMenu.navbar-menu
            div.navbar-start
                router-link.navbar-item(
                to="/stories"
                ) Stories
                router-link.navbar-item(
                to="/about"
                ) About
                router-link.navbar-item(
                to="/user/stories"
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
    }
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", () => {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
      );

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
          el.addEventListener("click", () => {
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle("is-active");
            $target.classList.toggle("is-active");
          });
        });
      }
    });
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
