<template>
  <el-row>
    <el-col
      :span="8"
      :offset="8"
    >
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
          :show-message="!!submitErrors.username"
          :error="submitErrors.username ? submitErrors.username[0] : ''"
        >
          <el-input
            v-model="loginForm.username"
            @keyup.native="clearError('username')"
          />
        </el-form-item>

        <el-form-item
          label="Password"
          prop="password"
          :show-message="!!submitErrors.password"
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
          <el-button @click="resetForm('loginForm')">
            Reset
          </el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import { userService } from '@/_services/user.service.js'

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

  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (!valid) return false

        userService
          .login({
            data: {
              username: this.loginForm.username,
              password: this.loginForm.password
            }
          })
          .then(response => {
            this.$store.commit('loginSuccess', response)
            this.$router.push({ name: 'home' })
          })
          .catch(error => {
            this.submitErrors = error.response.data.errors || {}
          })
      })
    },

    clearError (nameError = null) {
      if (nameError) {
        this.submitErrors[nameError] = undefined
        delete this.submitErrors[nameError]

        return false
      }

      this.submitErrors = undefined
      this.submitErrors = {}
    },

    resetForm (formName) {
      this.$refs[formName].resetFields()
      this.clearError()
    }
  }
}
</script>
