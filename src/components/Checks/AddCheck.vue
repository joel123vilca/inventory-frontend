<template>

  <div>
    <table class="table table-hover">
    <thead>
      <tr>
        <th>Codigo</th>
        <th>Producto</th>
        <th>observacion</th>
        <th>estado</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(product, index) in products" :key="product.id">
        <td>{{product.code}}</td>
        <td>{{product.name}}</td>
        <td><input v-model="observation"  class="form-control" ></td>
        <td><input type="checkbox"  v-model="state" class="check"></td>
        <td><button @click="sendCheck(index)" class="btn btn-success">Save</button></td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

  export default {
    data:{ 
      observation: "",
      state:false
  },
    methods:{
        ...mapActions('checks',["getProducts",'getChecks', 'postCheck']),
        sendCheck(index){
          var data = {
            state: this.state,
            observation: this.observation,
            check_id: 3,
            product_id: this.products[index].id
          }
          console.log(this.products[index].id,this.observation,this.state);
          this.saveCheck(data);
        }
    },
    computed:{
        ...mapState("checks",["products",'checks'])
    },
     created(){
        this.getProducts(this.$route.params.id);
    }
  };
</script>

<style>
  .check{
    margin-left: 50%;
  }
  @import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css');
</style>


