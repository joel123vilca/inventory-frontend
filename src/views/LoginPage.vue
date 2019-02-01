<template>
  <div>
    <div class="alert alert-info">
      <!-- Username: test
      <br>Password: test-->
    </div>
    <h2>Login</h2>

    <form
      ref="loginForm"
      status-icon
      :rules="rules"
      @submit.prevent="handleSubmit"
    >
      <div class="form-group">
        <label for="username">
          Username
        </label>
        <input
          v-model="username"
          type="text"
          name="username"
          class="form-control"
          :class="{ 'is-invalid': submitted && !username }"
        >
        <div
          v-show="submitted && !username"
          class="invalid-feedback"
        >
          Username is required
        </div>
      </div>
      <div class="form-group">
        <label for="password">
          Password
        </label>
        <input
          v-model="password"
          type="password"
          name="password"
          class="form-control"
          :class="{ 'is-invalid': submitted && !password }"
        >
        <div
          v-show="submitted && !password"
          class="invalid-feedback"
        >
          Password is required
        </div>
      </div>
      <div class="form-group">
        <button
          class="btn btn-primary"
          :disabled="loggingIn"
        >
          Login
        </button>
        <img
          v-show="loggingIn"
          src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
        >
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: '',
      submitted: false,

      rules: []
    }
  },

  computed: {
    loggingIn () {
      return this.$store.state.auth.status.loggingIn
    },
    ...mapState('auth', ['status'])
  },

  created () {
    if (this.status.loggedIn) {
      this.$router.push('/')
    } else {
      this.$store.dispatch('auth/logout')
    }
  },

  methods: {
    handleSubmit () {
      this.submitted = true

      const { username, password } = this
      const { dispatch } = this.$store
      const payload = {
        username,
        password
      }

      if (username && password) {
        dispatch('auth/login', payload).then(() => {
          this.$router.push('/')
        })
      }
    }
  }
}
</script>
