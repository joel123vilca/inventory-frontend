<template>
  <el-dialog
    title="Nueva marca"
    :visible.sync="modalOpenCreate"
    :close-on-click-modal="false"
    center
  >
    <el-form :model="form" class="formulario-creación" :label-position="labelPosition">
      <el-container>
        <el-row style="width:100%">
          <el-col :span="24">
            <el-form-item label="Nombre" :label-width="formLabelWidth">
              <el-input
                v-model="form.name"
                :class="form.errors.has('name') ? 'error-color' : ''"
                autocomplete="off"
                autofocus
              ></el-input>
              {{form.name}}
              <has-error :form="form" field="name" style="color:red"></has-error>
            </el-form-item>
          </el-col>
        </el-row>
      </el-container>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="updateStateModal(!modalOpenCreate)">Cancel</el-button>
      <el-button type="primary" @click="createBrand(form)" icon="el-icon-check">Guardar</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapState, mapActions } from "vuex";

import { Form, HasError, AlertError } from "vform";

// Vue.component(HasError.name, HasError);
// Vue.component(AlertError.name, AlertError);

export default {
  data() {
    return {
      labelPosition: "left",

      //   form: {
      //     name: ""
      //   },
      form: new Form({
        name: ""
      }),
      formLabelWidth: "120px"
    };
  },
  methods: {
    ...mapActions("brands", ["createBrand", "updateStateModal"])
    // changeState() {
    //   this.updateStateModal(!this.modalOpenCreate);
    // }
    // saveBrand() {
    //   this.createBrand(this.form);
    //   this.$store.dispatch("createBrand", this.form);
    // }
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
