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
      <el-menu-item index="1" active :route="{name:'products'}">
        <i class="el-icon-menu"></i>
        <span>Productos</span>
      </el-menu-item>

      <el-menu-item index="2" :route="{name:'brands'}">
        <i class="el-icon-menu"></i>
        <span>Marcas</span>
      </el-menu-item>
      <el-menu-item index="3" :route="{name:'areas'}">
        <i class="el-icon-menu"></i>
        <span>Areas</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>Menu de Areas</span>
        </template>
        <div class="areas-list" v-for="area in areas" :key="area.id">
          <router-link :to="`/areas/${area.id}`" class="dropdown-item">{{area.name}}</router-link>
        </div>
      </el-submenu>
      <el-menu-item index="4" :route="{name:'movements'}">
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
import { mapState, mapActions } from "vuex";
export default {
  created() {
    this.getAreas();
  },
  methods: {
    ...mapActions("areas", ["getAreas"])
  },
  computed: {
    ...mapState("areas", ["areas"])
  }
};
</script>

<style scoped>
.el-aside {
  background: white;
  color: white;
  min-height: 90vh;
}
.image {
  width: 38%;
  display: block;
  margin: 0 auto;
}
.logo-container {
  background-color: gray;
}
</style>
