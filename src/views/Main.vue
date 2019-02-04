<template>
  <div id="app">
    <button @click="persist">
      Save
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      age: true
    }
  },
  methods: {
    persist () {
      console.log(this.name, this.age)
    }
  }
}
</script>
