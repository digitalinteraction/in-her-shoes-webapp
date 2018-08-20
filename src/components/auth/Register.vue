<template>
    <div class="register">
        <div class="field">
            <label class="label">Username</label>
            <div class="control">
                <input class="input is-rounded" type="text" placeholder="e.g Alex Smith" v-model="username" readonly>
            </div>
        </div>

        <p class="has-text-right" @click="updateName">
          Change
        </p>

        <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input class="input is-rounded" type="password" placeholder="super-secret" v-model="password">
            </div>
        </div>

        <div class="field">
            <label class="label">Confirm Password</label>
            <div class="control">
                <input class="input is-rounded" type="password" placeholder="super-secret" v-model="confirmPassword">
            </div>
        </div>

        <div class="control">
            <button class="button is-primary is-fullwidth is-medium is-rounded" @click="submitRegistration">Submit</button>
        </div>
    </div>
</template>

<script>
import { registerUser } from "../../utils/api/auth";
import * as petname from "node-petname";

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
    },
    updateName: function() {
      this.username = petname(2, "-");
    }
  }
};
</script>

<style scoped>
.button {
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>
