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

        <div class="control">
            <button class="button is-primary" @click="submitForm">Submit</button>
        </div>

        <p>{{token}}</p>
    </div>
</template>

<script>
import { authenticateUser } from "../utils/api/auth";

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

<style scoped>
</style>
