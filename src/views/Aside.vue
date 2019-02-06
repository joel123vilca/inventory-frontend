<template>
  <el-aside width="230px">
    <div class="logo-container">
      <img
        src="http://idw.com.pe/image/logo.png"
        class="image"
      >
    </div>

    <el-menu
      default-active="5"
      class="el-menu-vertical-demo"
      :router="true"
    >
      <el-menu-item
        index="1"
        active
        :route="{name:'products'}"
      >
        <i class="el-icon-menu" />
        <span>Productos</span>
      </el-menu-item>

      <el-menu-item
        index="2"
        :route="{name:'brands'}"
      >
        <i class="el-icon-menu" />
        <span>Marcas</span>
      </el-menu-item>
      <el-menu-item
        index="3"
        :route="{name:'areas'}"
      >
        <i class="el-icon-menu" />
        <span>Areas</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-menu" />
          <span>Menu de Areas</span>
        </template>
        <div
          v-for="area in areas"
          :key="area.id"
          class="areas-list"
        >
          <el-menu-item
            index="`{area.id}`"
            :route="{ name: 'checks', params: { id: `${area.id}` } }"
          >
            {{ area.name }}
          </el-menu-item>
        </div>
      </el-submenu>
      <el-menu-item
        index="4"
        :route="{name:'movements'}"
      >
        <i class="el-icon-menu" />
        <span>Movimientos</span>
      </el-menu-item>

      <el-menu-item
        index="5"
        :route="{name:'perfil'}"
      >
        <i class="el-icon-setting" />
        <span>Perfil</span>
      </el-menu-item>

      <el-menu-item index="6">
        <i class="el-icon-document" />
        <span>Reportes</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('areas', ['areas'])
  },
  created () {
    this.getAreas()
  },
  methods: {
    ...mapActions('areas', ['getAreas'])
  }

}
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
