<template>
  <el-dialog
    title="Editar área"
    :visible="modalOpenEdit"
    :close-on-click-modal="false"
    center
    :show-close="false"
  >
    <el-form :model="form" class="formulario-creación" :label-position="labelPosition">
      <el-container>
        <el-row>
          <el-col :span="24">
            <el-form-item label="Nombre" :label-width="formLabelWidth">
              <el-input v-model="area.name" autocomplete="off" autofocus></el-input>
            </el-form-item>
            <el-form-item label="Encargado" :label-width="formLabelWidth">
              <el-input v-model="area.person_in_charge" autocomplete="off" autofocus></el-input>
            </el-form-item>
            <el-form-item label="Codigo" :label-width="formLabelWidth">
              <el-input v-model="area.code" autocomplete="off" autofocus></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-container>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="updateStateModalEdit(!modalOpenEdit)">Cancel</el-button>
      <el-button type="primary" @click="updateArea(area)" icon="el-icon-check">Guardar</el-button>
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
      "updateArea",
      "updateStateModalEdit",
      "updateStateModalEdit"
    ])
  },
  computed: {
    ...mapState("areas", ["modalOpenEdit", "area"])
  }
};
</script>

<style>
</style>
