<template>
  <div>
    <nav class="navbar" >
  <a class="navbar-brand">Areas</a>
  <button class="btn btn-primary" type="submit" @click="modalCreate=!modalCreate">+ Añadir</button>
  <div class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" v-model="search" aria-label="Search">
  </div>
  </nav>

    <el-table
      v-loading="false"
      :data="areas.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column label="Name" prop="name"></el-table-column>
      <el-table-column label="Encargado" prop="person_in_charge"></el-table-column>
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

    <AddArea/>
    <EditArea/>
  </div>
</template>

<script>
import AddArea from "@/components/Area/modals/AddArea";
import EditArea from "@/components/Area/modals/EditArea";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    AddArea,
    EditArea
  },
  data() {
    return {
      search: "",
      loading: "false"
    };
  },
  created() {
    this.getAreas();
  },
  methods: {
    ...mapActions("areas", ["getAreas", "getDetailArea", "deleteArea"]),
    handleEdit(index, row) {
      this.getDetailArea(row.id);
      this.modalEdit = !this.modalEdit;
    },
    handleDelete(index, row) {
      this.deleteArea(row.id);
    }
  },
  computed: {
    ...mapState("areas", ["areas"]),
    modalCreate: {
      get() {
        return this.$store.getters.getModalCreate;
      },
      set(value) {
        this.$store.dispatch("areas/updateStateModal", value);
      }
    },
    modalEdit: {
      get() {
        return this.$store.getters.getModalEdit;
      },
      set(value) {
        this.$store.dispatch("areas/updateStateModalEdit", value);
      }
    }
  }
};
</script>

<style>
.navbar{
  background-color: #FFA940;
}
</style>
