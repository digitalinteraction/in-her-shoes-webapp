<template>
  <div class="home">

    <div v-if="!isLoggedIn">
      <h2 class="is-size-2">Login</h2>
      <Login></Login>

      <h2 class="is-size-2">Register</h2>
      <Register></Register>
    </div>

    <Title></Title>

  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/auth/Login.vue";
import Register from "@/components/auth/Register.vue";

import Title from "@/components/Title.vue";

export default {
  name: "home",
  components: {
    Login,
    Register,
    Title
  },
  computed: {
    isLoggedIn: function() {
      console.log(!!this.$store.getters.getToken);
      return !!this.$store.getters.getToken;
    }
  }
};
</script>
