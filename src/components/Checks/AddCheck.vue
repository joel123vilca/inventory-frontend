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
      <tr v-for="(product, index) in products" :key="product.id" class="status">
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
    methods:{
        ...mapActions('checks',["getProducts",'getChecks', 'saveCheck']),
        sendCheck(index){
          var detail = {
            check_id: this.checkId,
            state: this.state,
            observation: this.observation,
            product_id: this.products[index].id
          };
          if(this.state ==  false){
            return '<style> .status{background-color: green;}</style>';
          } else if (this.state == true){
            return '<style> .status{background-color: yellow;}</style>';
          }
          this.saveCheck(detail);
        },
    },
    computed:{
        ...mapState("checks",["products",'checks','checkId'])
    },
     created(){
        this.getProducts(this.$route.params.id);
        this.getChecks(this.$route.params.id);
    }
  };
</script>

<style>
  .check{
    margin-left: 50%;
  }
  @import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css');

</style>


