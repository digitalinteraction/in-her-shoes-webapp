<template>
    <div class="login">
        <div class="field">
            <label class="label">Username</label>
            <div class="control">
                <input class="input" type="text" placeholder="Username" v-model="username">
            </div>
        </div>

        <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input class="input" type="password" placeholder="secret" v-model="password">
            </div>
        </div>

        <p class="has-text-right">
          Forgot password?
        </p>

        <div class="control">
            <button class="button is-primary is-medium is-fullwidth is-bold" @click="submitForm">Submit</button>
        </div>
    </div>
</template>

<script>
import { authenticateUser } from "../../utils/api/auth";

export default {
  name: "Login",
  data: function() {
    return {
      username: "",
      password: "",
      token: ""
    };
  },
  methods: {
    submitForm: async function() {
      this.token = await authenticateUser(this.username, this.password);
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
