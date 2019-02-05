<template>
  <el-row>
    <el-col
      :span="16"
      class="hidden-md-and-down"
    >
      <img
        src="@/assets/inventario.jpg"
        width="100%"
      >
    </el-col>
    <el-col
      :span="8"
      :xs="24"
    >
      <el-row class="testing1">
        <el-col :span="24">
          <img
            src="@/assets/logo.png"
            width="10%"
            style="display: block;
    margin: 0 auto;"
          >
        </el-col>
        <el-col :span="24">
          <p style="text-align:center">
            Sistema de inventario
          </p>
        </el-col>

        <el-col
          :span="20"
          :offset="2"
          justify="center"
          class="testing"
        >
          <el-form
            ref="loginForm"
            :model="loginForm"
            status-icon
            :rules="rules"
            label-width="100px"
            :label-position="labelPosition"
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
                class="loginButton"
                @click="submitForm('loginForm')"
              >
                Login
              </el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col offset="2" />
      </el-row>
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

      submitErrors: {},
      labelPosition: 'left'
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
  }
}
</script>
<style scoped>
.el-main.contenedor-principal {
  background: white;
  padding: 0;
}
.loginButton {
  width: 100%;
}
.testing {
  margin-top: 10%;
}
.testing1 {
  margin-top: 25%;
}
@media only screen and (max-width: 600px) {
  .testing {
    margin-top: 45px;
  }
  .testing1 {
    margin-top: 25px;
  }
}
/* .el-input {
  width: 50%;
} */
</style>
