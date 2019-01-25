<template>
  <div>
    <el-container class="nombre-container">
      <el-row type="flex" class="row-bg" justify="space-around" :gutter="20">
        <el-col :span="4">
          <div class="grid-content">
            <h2 class="texto-principal">Marcas</h2>
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
      v-loading="false"
      :data="brands.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="Name" prop="name"></el-table-column>

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

    <AddBrand/>
    <EditBrand/>
  </div>
</template>

<script>
import AddBrand from "@/components/Brand/modals/AddBrand";
import EditBrand from "@/components/Brand/modals/EditBrand";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    AddBrand,
    EditBrand
  },
  data() {
    return {
      search: "",
      loading: "false"
    };
  },
  created() {
    this.getBrands();
  },
  methods: {
    ...mapActions(["getBrands", "getDetailBrand", "deleteBrand"]),
    handleEdit(index, row) {
      this.getDetailBrand(row.id);
      this.modalEdit = !this.modalEdit;
    },
    handleDelete(index, row) {
      this.deleteBrand(row.id);
    }
  },
  computed: {
    ...mapState(["brands"]),
    modalCreate: {
      get() {
        return this.$store.getters.getModalCreate;
      },
      set(value) {
        this.$store.dispatch("updateStateModal", value);
      }
    },
    modalEdit: {
      get() {
        return this.$store.getters.getModalEdit;
      },
      set(value) {
        this.$store.dispatch("updateStateModalEdit", value);
      }
    }
  }
};
</script>

<style>
</style>
