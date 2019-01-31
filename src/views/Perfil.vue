<template>
  <div>Mi perfil
    <el-button @click="cerrarSesión()">Cerrar sesión</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    cerrarSesión() {
      this.$store.dispatch("auth/logout").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style>
</style>
