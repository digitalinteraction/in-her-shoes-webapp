<template>
  <div class="home">
    <!--<img src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <div v-if="!isLoggedIn">
      <h2 class="is-size-2">Login</h2>
      <Login></Login>

      <h2 class="is-size-2">Register</h2>
      <Register></Register>
    </div>


  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Login from "@/components/auth/Login.vue";
import Register from "@/components/auth/Register.vue";

export default {
  name: "home",
  components: {
    // HelloWorld,
    Login,
    Register
  },
  computed: {
    isLoggedIn: function() {
      console.log(!!this.$store.getters.getToken);
      return !!this.$store.getters.getToken;
    }
  }
};
</script>
