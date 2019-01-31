<template>
  <el-dialog
    title="Nueva marca"
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
              <has-error :form="form" field="name" style="color:red"></has-error>
            </el-form-item>
          </el-col>
        </el-row>
      </el-container>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="closeModal()">Cancel</el-button>
      <el-button type="primary" @click="saveBrand()" icon="el-icon-check">Guardar</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapState, mapActions } from "vuex";

import { Form } from "vform";

export default {
  data() {
    return {
      labelPosition: "left",
      form: new Form({
        name: ""
      }),
      formLabelWidth: "120px"
    };
  },
  methods: {
    ...mapActions("brands", ["createBrand", "updateStateModal"]),
    closeModal() {
      this.updateStateModal(!this.modalOpenCreate).then(() => {
        this.form.reset();
        this.form.clear();
      });
    },
    saveBrand() {
      this.createBrand(this.form).then(() => {
        this.$swal.fire("", "La marca ha sido creada", "success");
      });
    }
  },
  computed: {
    ...mapState("brands", ["modalOpenCreate"])
  }
};
</script>

<style scoped>
.el-row {
  width: 100%;
}
.error-color {
  border-color: red;
}
</style>
