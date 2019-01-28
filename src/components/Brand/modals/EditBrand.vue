<template>
  <el-dialog title="Nueva marca 2" :visible="modalOpenEdit" :close-on-click-modal="false" center>
    <el-form :model="form" class="formulario-creación" :label-position="labelPosition">
      <el-container>
        <el-row>
          <el-col :span="24">
            <el-form-item label="Nombre" :label-width="formLabelWidth">
              <el-input v-model="brand.name" autocomplete="off" autofocus></el-input>
              <has-error :form="form" field="name" style="color:red"></has-error>
            </el-form-item>
          </el-col>
        </el-row>
      </el-container>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="updateStateModalEdit(!modalOpenEdit)">Cancel</el-button>
      <el-button type="primary" @click="enviar()" icon="el-icon-check">Guardar</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Form, HasError, AlertError } from "vform";
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
    ...mapActions("brands", ["updateBrand", "updateStateModalEdit"]),
    enviar() {
      this.form.id = this.brand.id;
      this.form.name = this.brand.name;
      this.updateBrand(this.form).then(() => {
        this.$swal.fire("", "La marca ha sido actualizado", "success");
      });
    }
  },
  computed: {
    ...mapState("brands", ["modalOpenEdit", "brand"])
  }
};
</script>

<style>
</style>
