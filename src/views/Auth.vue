<template lang="html">
  <div class="auth">
    <div class="container login-box">
      <h1 class="title has-text-centered" v-if="isLoggingIn">Login</h1>
      <h1 class="title has-text-centered" v-else>Register</h1>
      <div class="container is-fluid">
        <div class="login-form" v-if="isLoggingIn">
          <Login></Login>
          <div class="has-text-centered">
            <p>
              Don't have an account?
            </p>
            <button class="button is-primary is-outlined" @click="toggleForm">Sign Up</button>
          </div>
        </div>

        <div class="register-form" v-else>
          <Register></Register>
          <div class="has-text-centered">
            <p>
              Have an account?
            </p>
            <button class="button is-primary is-outlined" @click="toggleForm">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
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
