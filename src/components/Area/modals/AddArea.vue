<template>
  <el-dialog
    title="Nueva Area"
    :visible.sync="modalOpenCreate"
    :close-on-click-modal="false"
    center
    :show-close="false"
  >
    <el-form :model="form" class="formulario-creación" :label-position="labelPosition">
      <el-container>
        <el-row style="width:100%">
          <el-col :span="24">
            <el-form-item label="Nombre" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off" autofocus></el-input>
            </el-form-item>
            <el-form-item label="Encargado" :label-width="formLabelWidth">
              <el-input v-model="form.person_in_charge" autocomplete="off" autofocus></el-input>
            </el-form-item>
            <el-form-item label="Codigo" :label-width="formLabelWidth">
              <el-input v-model="form.code" autocomplete="off" autofocus></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-container>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="updateStateModal(!modalOpenCreate)">Cancel</el-button>
      <el-button type="primary" @click="createArea(form)" icon="el-icon-check">Guardar</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      labelPosition: "left",
      form: {
        name: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    ...mapActions("areas", [
      "createArea",
      "updateStateModal",
      "updateStateModal"
    ])
  },
  computed: {
    ...mapState("areas", ["modalOpenCreate"])
  }
};
</script>

<style scoped>
.el-row {
  width: 100%;
}
</style>
