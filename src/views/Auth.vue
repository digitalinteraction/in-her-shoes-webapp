<template lang="pug">
  div.auth
    div.container.login-box
      h1.title.has-text-centered(
        v-if="isLoggingIn"
        ) Login
      h1.title.has-text-centered(
        v-else
        ) Register

      div.container.is-fluid
        div.login-form(
          v-if="isLoggingIn"
          )
          Login
          div.has-text-centered
            p Don't have an account?
            button.button.is-primary.is-outlined(
              @click="toggleForm"
              ) Sign Up

        div.register-form(
          v-else
          )
          Register
          div.has-text-centered
            p Have an account?
            button.button.is-primary.is-outlined(
              @click="toggleForm"
              ) Login
</template>

<script>
import Login from "@/components/auth/Login.vue";
import Register from "@/components/auth/Register.vue";

export default {
  name: "Auth",
  components: {
    Login,
    Register
  },
  data: function() {
    return {
      isLoggingIn: true
    };
  },
  methods: {
    toggleForm: function() {
      this.isLoggingIn = !this.isLoggingIn;
    }
  }
};
</script>

<style lang="scss" scoped>
.login-box {
  background-color: #ffffff;
  margin-top: 5%;
  border: 1px solid #ccc;
  padding-bottom: 5%;
  padding-top: 5%;
  border-radius: 25px;
}

.button {
  margin-top: 1%;
}
</style>
