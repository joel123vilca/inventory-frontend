<template>
  <div>Mi perfil
    <el-button @click="cerrarSesión()">Cerrar sesión</el-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("auth", ["logout"]),
    cerrarSesión() {
      this.logout().then(() => {
        this.$router.push("/login");
      });
      //   this.$store.dispatch("auth/logout").then(() => {
      //     this.$router.push("/login");
      //   });
    }
  }
};
</script>

<style>
</style>
