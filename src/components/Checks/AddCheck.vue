<template>
<div>
    <el-table 
        v-loading="false"
      :data="products.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Product"
      width="120">
    </el-table-column>
    <el-table-column
      prop="code"
      label="code"
      width="120">
    </el-table-column>
  </el-table>
   
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapActions } from 'vuex';
  export default {
    methods:{
        ...mapActions('checks',["getProducts",'getChecks'])
    },
    computed:{
        ...mapState("checks",["products",'checks'])
    },
     created(){
    this.getProducts(this.$route.params.id);
  }
  };
</script>


