<template>
  <div>
    <el-container class="nombre-container">
      <el-row type="flex" class="row-bg" justify="space-around" :gutter="20">
        <el-col :span="4">
          <div class="grid-content">
            <h2 class="texto-principal">Productos</h2>
          </div>
        </el-col>
        <el-col :span="14">
          <!-- <el-button
            type="warning"
            round
            icon="el-icon-plus"
            @click="modalCreate=!modalCreate"
          >Añadir</el-button>-->
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-input placeholder="Type something" prefix-icon="el-icon-search" v-model="search"></el-input>
          </div>
        </el-col>
      </el-row>
    </el-container>
    <el-table
      v-loading="loadingTable"
      element-loading-text="Cargando ..."
      :data="products.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()) || data.category.toLowerCase().includes(search.toLowerCase()) )"
      style="width: 100%"
    >
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="Name" prop="name"></el-table-column>
      <el-table-column label="Categoria" prop="category"></el-table-column>
      <el-table-column label="Area" prop="area.name"></el-table-column>
      <el-table-column label="Transferir">
        <template slot-scope="scope">
          <el-button size="small" type="primary" @click="handleEdit(scope.$index, scope.row)">
            <i class="el-icon-news"></i>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <Transfer/>
  </div>
</template>

<script>
import Transfer from "@/components/Movement/modals/Transfer.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    Transfer
  },
  methods: {
    ...mapActions("products", ["getProducts", "getDetailProduct"]),
    ...mapActions("movements", ["updateStateModalTransfer"]),
    handleEdit(index, row) {
      this.getDetailProduct(row.id);
      this.updateStateModalTransfer(!this.modalOpenTransfer);
    }
  },
  computed: {
    ...mapState("products", ["products"]),
    ...mapState("movements", ["modalOpenTransfer"])
  },
  created() {
    this.getProducts();
  }
};
</script>

<style>
</style>
