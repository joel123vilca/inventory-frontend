
<template>
<div id="app">
  My name is <input v-model="name">
  and I am <input type="checkbox" v-model="age"> years old.
  <p/>
  <button @click="persist">Save</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      name:'',
      age:true
    }
  },
  methods: {
    persist() {
      console.log(this.name,this.age);
    }
  }
}
</script>