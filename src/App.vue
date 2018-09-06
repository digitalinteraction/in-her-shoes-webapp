<template lang="pug">
  div#app
    Navbar
    router-view
    FooterBar
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  name: "App",
  components: {
    Navbar,
    FooterBar
  },
  onIdle() {
    alert("You have been logged out after 10 minutes of inactivity");
    this.$store.commit("removeToken");
  }
};
</script>

<style lang="scss">
html {
  height: 100%;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
