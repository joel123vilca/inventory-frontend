<template>
  <div>
    <p>You're logged in with Vue + Vuex & JWT!!</p>
    <h3>Users from secure api end point:</h3>

    <p>
      <router-link to="/login">Logout</router-link>
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    // ...mapState("auth", ["user"])
  },
  created() {}
};
</script>

<style>
</style>
