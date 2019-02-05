<template>
  <div>
    Mi perfil
    <el-button @click="cerrarSesión()">
      Cerrar sesión
    </el-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
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
