<template>
  <el-dialog title="Media Manager" :visible.sync="modalOpenCreate" :close-on-click-modal="false">
    <el-form :model="form" class="formulario-creación" :label-position="labelPosition">
      <el-container>
        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item label="Part number" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off" autofocus="true"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="Código" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="Nombre" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="Categoría" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off" autofocus="true"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="Marca" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="please select your zone">
                <el-option label="Zone one" value="shanghai"></el-option>
                <el-option label="Zone two" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="Área" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="please select your zone">
                <el-option label="Zone one" value="shanghai"></el-option>
                <el-option label="Zone two" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="Imagen" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off" autofocus="true"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="Descripción" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="Activity zone" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="please select your zone">
                <el-option label="Zone one" value="shanghai"></el-option>
                <el-option label="Zone two" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-container>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="changeState">Cancel</el-button>
      <el-button type="primary" @click="changeState" icon="el-icon-check">Guardar</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
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
  methods: {
    changeState() {
      this.$store.dispatch("updateStateModal", !this.modalOpenCreate);
    }
  },
  computed: {
    modalOpenCreate() {
      return this.$store.state.modalOpenCreate;
    }
  }
};
</script>

<style>
</style>
