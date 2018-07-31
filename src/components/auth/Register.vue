<template>
    <div class="register">
        <div class="container">
            <div class="field">
                <label class="label">Username</label>
                <div class="control">
                    <input class="input" type="text" placeholder="e.g Alex Smith" v-model="username">
                </div>
            </div>

            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input class="input" type="password" placeholder="e.g. alexsmith@gmail.com" v-model="password">
                </div>
            </div>

            <div class="field">
                <label class="label">Confirm Password</label>
                <div class="control">
                    <input class="input" type="password" placeholder="e.g. alexsmith@gmail.com" v-model="confirmPassword">
                </div>
            </div>

            <div class="control">
                <button class="button is-primary" @click="submitRegistration">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
import { registerUser } from "../../utils/api/auth";

export default {
  name: "Register",
  data: function() {
    return {
      username: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    submitRegistration: async function() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords must match");
        return;
      }
      try {
        await registerUser(this.username, this.password);
      } catch (e) {
        console.error(e);
        alert("Registration failed");
      }
    }
  }
};
</script>

<style scoped>
</style>
