<template>
  <div>
    <p>Bienvenido a Inventario IDW {{ user.email }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('auth', ['user'])
  }
}
</script>

<style>
</style>
