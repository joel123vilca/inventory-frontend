<template>
  <el-row>
    <el-col :span="12">
      <img
        src="@/assets/logo.png"
        width="100%"
      >
    </el-col>
    <el-col :span="12">
      <el-form
        ref="loginForm"
        :model="loginForm"
        status-icon
        :rules="rules"
        label-width="120px"
      >
        <el-form-item
          label="User"
          prop="username"
          :show-message="submitErrorsLogin.username "
          :error="submitErrorsLogin.username ? submitErrorsLogin.username[0] : ''"
        >
          <el-input
            v-model="loginForm.username"
            @keyup.native="clearError('username')"
          />
        </el-form-item>

        <el-form-item
          label="Password"
          prop="password"
          :show-message="submitErrors.password"
          :error="submitErrors.password ? submitErrors.password[0] : ''"
        >
          <el-input
            v-model="loginForm.password"
            type="password"
            autocomplete="off"
            @keyup.native="clearError('password')"
          />
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('loginForm')"
          >
            Login
          </el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
// import { userService } from '@/api/user.js'
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      loginForm: {
        username: 'admin@gmail.com',
        password: 'idw123#1'
      },

      rules: {
        username: [
          {
            required: true,
            message: 'Username is required',
            trigger: 'change'
          },
          {
            type: 'email',
            message: 'Username must be email',
            trigger: 'change'
          }
        ],
        password: [
          {
            required: true,
            message: 'Password is required',
            trigger: 'change'
          },
          {
            min: 5,
            max: 15,
            message: 'Length should be 5 to 15',
            trigger: 'change'
          }
        ]
      },

      submitErrors: {}
    }
  },
  created () {
    if (this.status.loggedIn) {
      this.$router.push('/')
    } else {
      this.$store.dispatch('auth/logout')
    }
  },
  computed: {
    ...mapState('auth', ['status']),
    ...mapState('users', ['submitErrorsLogin'])
  },
  methods: {
    ...mapActions('auth', ['login']),
    ...mapActions('users', ['clearError']),
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (!valid) return false
        this.login({
          data: {
            username: this.loginForm.username,
            password: this.loginForm.password
          }
        }).then(() => {
          this.$router.push('/')
          this.$notify({
            title: 'Success',
            message: 'Login succesfull',
            type: 'success'
          })
        })
          .catch(() => {
            this.$notify.error({
              title: 'Error',
              message: 'This is an error message'
            })
          })
      })
    }

    // clearError (nameError = null) {
    //   if (nameError) {
    //     this.submitErrors[nameError] = undefined
    //     delete this.submitErrors[nameError]

    //     return false
    //   }

    //   this.submitErrors = undefined
    //   this.submitErrors = {}
    // }
  }
}
</script>
