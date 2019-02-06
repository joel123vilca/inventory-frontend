<template>
  <div>
    <el-form
      ref="form"
      :model="form"
      class="formulario-creación"
      :label-position="labelPosition"
      status-icon
      disabled="true"
    >
      <el-container>
        <el-row
          style="width:100%"
          :gutter="20"
        >
          <el-col
            :span="12"
            :xs="24"
          >
            <el-form-item
              label="Name"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="user.name"
                autocomplete="off"
                autofocus
              />
              <has-error
                :form="form"
                field="name"
                style="color:red"
              />
            </el-form-item>
          </el-col>
          <el-col
            span="12"
            :xs="24"
          >
            <el-form-item
              label="Email"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="user.email"
                autocomplete="off"
                autofocus
              />
              <has-error
                :form="form"
                field="person_in_charge"
                style="color:red"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-container>
    </el-form>
    <el-button @click="cerrarSesión()">
      Cerrar sesión
    </el-button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      formLabelWidth: '120px',
      labelPosition: 'left',
      form: ''
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    ...mapActions('auth', ['logout']),
    cerrarSesión () {
      this.logout().then(() => {
        this.$router.push('/login')
        this.$notify({
          title: 'Success',
          message: 'Logout succesfull',
          type: 'success'
        })
      })
        .catch(() => {
          this.$notify.error({
            title: 'Error',
            message: 'An error ocurrss while logout process'
          })
        })
    }
  }
}
</script>

<style>
</style>
