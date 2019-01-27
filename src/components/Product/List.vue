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
          <el-button
            type="warning"
            round
            icon="el-icon-plus"
            @click="modalCreate=!modalCreate"
          >Añadir</el-button>
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
      <el-table-column label="Marca" prop="brand.name"></el-table-column>
      <el-table-column label="Area" prop="area.name"></el-table-column>
      <el-table-column label="Acciones">
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
      </el-table-column>
    </el-table>

    <AddProduct/>
    <EditProduct/>
  </div>
</template>

<script>
import AddProduct from "@/components/Product/modals/AddProduct";
import EditProduct from "@/components/Product/modals/EditProduct";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    AddProduct,
    EditProduct
  },
  data() {
    return {
      search: ""
      // loading: "false"
    };
  },
  created() {
    this.getProducts();
    this.getBrands();
    this.getAreas();
  },
  methods: {
    ...mapActions("products", [
      "getProducts",
      "getDetailProduct",
      "deleteProduct"
    ]),
    ...mapActions("brands", ["getBrands"]),
    ...mapActions("areas", ["getAreas"]),
    handleEdit(index, row) {
      this.getDetailProduct(row.id);
      this.modalEdit = !this.modalEdit;
    },
    handleDelete(index, row) {
      this.$confirm(
        "This will permanently delete the file. Continue?",
        "Warning",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      )
        .then(() => {
          this.deleteProduct(row.id).then(() => {
            this.$message({
              type: "success",
              message: "Delete completed"
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Delete canceled"
          });
        });

      // console.log(row.id);
      // this.deleteProduct(row.id);
    }
  },
  computed: {
    ...mapState("products", ["products", "loadingTable"]),
    ...mapState("brands", ["brands"]),
    modalCreate: {
      get() {
        return this.$store.getters.getModalCreate;
      },
      set(value) {
        this.$store.dispatch("products/updateStateModal", value);
      }
    },
    modalEdit: {
      get() {
        return this.$store.getters.getModalEdit;
      },
      set(value) {
        this.$store.dispatch("products/updateStateModalEdit", value);
      }
    }
  }
};
</script>

<style>
</style>
