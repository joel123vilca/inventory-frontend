<template>
  <div id="app">
    <el-container>
      <Aside/>
      <el-container>
        <el-header>
          <Header/>
        </el-header>
        <el-main class="contenedor-principal">
          <div v-if="message" :class="`alert ${type}`">{{message}}</div>
          <router-view>
            <Main/>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import Aside from "@/views/Aside";
import Header from "@/views/Header";
import Main from "@/views/Main";
import { mapState } from "vuex";
export default {
  components: {
    Aside,
    Header,
    Main
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("alerts", ["message", "type"])
  },
  watch: {
    $route(to, from) {
      // clear alert on location change
      this.$store.dispatch("alerts/clear");
    }
  },
  methods: {}
  // mounted() {
  //   this.handleLoading();
  // }
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.image {
  width: 43%;
  display: block;
  margin: 0 auto;
}
.container {
  max-width: 1200px;
  margin: auto;
}
.el-aside {
  background: white;
  color: white;
  min-height: 90vh;
}
.logo-container {
  padding: 12px;
  background: white;
}
.el-menu {
  border-right: 0 !important;
}
.el-main {
  background: #eef1f4;
}
.breadcrumb-container {
  margin-top: 20px;
  margin-bottom: 40px;
}
.button-container {
  margin-top: 20px;
}
.nombre-container {
  height: 70px;
  background: white;
  padding: 10px;
  width: 100%;
}
.bg-purple {
  background: #d3dce6;
}
.row-bg {
  width: 100%;
}

.texto-principal {
  margin: 5px;
}
.contenedor-principal {
  padding: 10px;
}

.formulario-creación {
  margin-bottom: 20px;
}

.invalid-feedback {
  display: block;
}
</style>