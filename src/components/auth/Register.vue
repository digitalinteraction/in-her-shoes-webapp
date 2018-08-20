<template lang="pug">
  div.register
    div.field
      label.label Username
      div.control
        input.input.is-rounded(
          type="text",
          placeholder="e.g Alex Smith",
          v-model="username",
          readonly
        )

    p.has-text-right(
      @click="updateName"
    ) Change

    div.field
      label.label Password
      div.control
        input.input.is-rounded(
          type="password",
          placeholder="super-secret",
          v-model="password"
        )

    div.field
      label.label Confirm Password
      div.control
        input.input.is-rounded(
          type="password",
          placeholder="super-secret",
          v-model="confirmPassword"
      )

    div.control
      button.button.is-primary.is-fullwidth.is-medium.is-rounded(
        @click="submitRegistration",
        :disabled="isDisabled()"
      ) Submit
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
    },
    isDisabled: function() {
      return !(
        this.username.length > 0 &&
        this.password.length > 0 &&
        this.confirmPassword.length > 0
      );
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
