<template>
  <div id="app">
    <el-container>
        <Menu v-if="status.loggedIn" />
    <Aside v-if="status.loggedIn" />
      <el-container>
        <el-main class="contenedor-principal">
          <div
            v-if="message"
            :class="`alert ${type}`"
          >
            {{ message }}
          </div>

          <router-view>
            <Main />
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from '@/views/Aside'
import Header from '@/views/Header'
import Main from '@/views/Main'
import Menu from '@/views/Menu'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  components: {
    Aside,
    Header,
    Main,
    Menu
  },
  data () {
    return {
      aldo: false
    }
  },
  computed: {
    ...mapState('alerts', ['message', 'type']),
    ...mapState('auth', ['status'])
  },

  watch: {
    $route () {
      // clear alert on location change
      this.$store.dispatch('alerts/clear')
    }
  },
  created () {
    axios.interceptors.response.use(undefined, function (err) {
      console.log('afas')
      return new Promise(function () {
        console.log(err.response.status)
        if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
          // if you ever get an unauthorized, logout the user
          console.log('sadasdassadasdasdsd')
          console.log('axxxxxxxxx')
          console.log(this.$store)
          // $store.dispatch('auth/logout', { root: true })
          console.log('1234')
          this.$router.push('/brands')
          // you can also redirect to /login if needed !
        }
        throw err
      })
    })
  },
  methods: {}
}
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
body{
  padding-top: 70px;
}

.el-main {
  /* background: #eef1f4; */
  background-color: white;
  padding: 0 !important;
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
