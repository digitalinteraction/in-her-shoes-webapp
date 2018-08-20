<template>
    <div class="login">
        <div class="field">
            <label class="label">Username</label>
            <div class="control">
                <input class="input is-rounded" type="text" v-bind:placeholder="fakeUsername" v-model="username">
            </div>
        </div>

        <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input class="input is-rounded" type="password" placeholder="super-secret" v-model="password">
            </div>
        </div>

        <p class="has-text-right">
          Forgot password?
        </p>

        <div class="control">
            <button class="button is-primary is-medium is-fullwidth is-bold is-rounded" @click="submitForm" :disabled="isDisabled()">Submit</button>
        </div>
    </div>
</template>

<script>
import { authenticateUser } from "../../utils/api/auth";
import * as petname from "node-petname";

export default {
  name: "Login",
  data: function() {
    return {
      username: "",
      password: "",
      token: "",
      fakeUsername: petname(2, "-")
    };
  },
  methods: {
    submitForm: async function() {
      this.token = await authenticateUser(this.username, this.password);
    },
    isDisabled: function() {
      return !(this.username.length > 0 && this.password.length > 0);
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>
