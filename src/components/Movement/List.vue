<template>
  <div>
    <el-container class="nombre-container">
      <el-row type="flex" class="row-bg" justify="space-around" :gutter="20">
        <el-col :span="4">
          <div class="grid-content">
            <h2 class="texto-principal">Movements</h2>
          </div>
        </el-col>
        <el-col :span="14">
          <el-button type="warning" round icon="el-icon-plus" @click="cambiarRuta()">Añadir</el-button>
          <router-link to="/movements/test">Go to Foo</router-link>
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
      :data="movements.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()) || data.category.toLowerCase().includes(search.toLowerCase()) )"
      style="width: 100%"
    >
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="Name" prop="product.id"></el-table-column>
      <el-table-column label="Nombre producto" prop="product.name"></el-table-column>
      <el-table-column label="Area anterior" prop="area_anterior.name"></el-table-column>
      <el-table-column label="Area actual" prop="area_actual.name"></el-table-column>
      <!-- <el-table-column label="Acciones">
        <template slot-scope="scope">
          <el-button size="small" type="primary" @click="handleEdit(scope.$index, scope.row)">
            <i class="el-icon-view"></i>
          </el-button>

          <el-button size="small" type="warning" @click="handleEdit(scope.$index, scope.row)">
            <i class="el-icon-edit"></i>
          </el-button>

          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
            <i class="el-icon-delete"></i>
          </el-button>
        </template>
      </el-table-column>-->
    </el-table>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  methods: {
    ...mapActions("movements", ["getMovements"]),
    cambiarRuta() {
      this.$router.push("/movements/new");
    }
  },
  computed: {
    ...mapState("movements", ["movements"])
  },
  created() {
    this.getMovements();
  }
};
</script>

<style>
</style>
