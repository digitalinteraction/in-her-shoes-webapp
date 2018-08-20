<template>
    <nav class="navbar is-transparent">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Her Story Told" width="112" height="28">
            </a>
            <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
                <router-link to="/" class="navbar-item">Home</router-link>
                <router-link to="/about" class="navbar-item">About</router-link>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="field is-grouped">
                        <p class="control">
                            <a class="button" v-if="!isLoggedIn">
                                <span>
                                Login
                              </span>
                            </a>
                            <a class="button" v-else @click="logout">
                                <span>
                                Logout
                              </span>
                            </a>
                        </p>
                        <p class="control">
                            <a class="button is-primary">
                                <span>Share Story</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </nav>
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
