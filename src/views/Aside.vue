<template>
  <el-aside width="230px">
    <div class="logo-container">
      <img src="http://idw.com.pe/image/logo.png" class="image">
    </div>

    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :router="true"
    >
      <el-menu-item index="1" active :route="{name:'home'}">
        <i class="el-icon-menu"></i>
        <span>Productos</span>
      </el-menu-item>

      <el-menu-item index="2" :route="{name:'brands'}">
        <i class="el-icon-menu"></i>
        <span>Marcas</span>
      </el-menu-item>

      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span>Areas</span>
      </el-menu-item>

      <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span>Movimientos</span>
      </el-menu-item>

      <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span>Perfil</span>
      </el-menu-item>

      <el-menu-item index="6">
        <i class="el-icon-document"></i>
        <span>Reportes</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {};
</script>

<style scoped>
.el-aside {
  background: white;
  color: white;
  min-height: 90vh;
}
.image {
  width: 43%;
  display: block;
  margin: 0 auto;
}
</style>
