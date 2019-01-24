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
            <el-input placeholder="Type something" prefix-icon="el-icon-search" v-model="input21"></el-input>
          </div>
        </el-col>
      </el-row>
    </el-container>

    <el-table v-loading="false" :data="brands" style="width: 100%">
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

export default {
  components: {
    AddBrand,
    EditBrand
  },
  data() {
    return {
      labelPosition: "left",
      variable: 0,
      search: "",
      loading: "false",
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },
  created() {
    this.$store.dispatch("getBrands");
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row.id);
      this.$store.dispatch("getDetailBrand", row.id);
      this.modalEdit = !this.modalEdit;
    },
    handleDelete(index, row) {
      //   console.log("aholaaaaaaaaa");
      this.$store.dispatch("deleteBrand", row.id);
    }
  },
  computed: {
    brands() {
      return this.$store.state.brands;
    },
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
