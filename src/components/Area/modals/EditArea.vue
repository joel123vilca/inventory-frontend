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
              <has-error :form="form" field="name" style="color:red"></has-error>
            </el-form-item>
            <el-form-item label="Encargado" :label-width="formLabelWidth">
              <el-input v-model="area.person_in_charge" autocomplete="off" autofocus></el-input>
              <has-error :form="form" field="person_in_charge" style="color:red"></has-error>
            </el-form-item>
            <el-form-item label="Codigo" :label-width="formLabelWidth">
              <el-input v-model="area.code" autocomplete="off" autofocus></el-input>
              <has-error :form="form" field="code" style="color:red"></has-error>
            </el-form-item>
          </el-col>
        </el-row>
      </el-container>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="modalClose()">Cancel</el-button>
      <el-button type="primary" @click="enviar()" icon="el-icon-check">Guardar</el-button>
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
        id: "",
        name: "",
        person_in_charge: "",
        code: ""
      }),
      formLabelWidth: "120px"
    };
  },
  methods: {
    ...mapActions("areas", ["updateArea", "updateStateModalEdit"]),
    modalClose() {
      this.updateStateModalEdit(!this.modalOpenEdit).then(() => {
        this.form.reset();
        this.form.clear();
      });
    },
    enviar() {
      this.form.id = this.area.id;
      this.form.name = this.area.name;
      this.form.person_in_charge = this.area.person_in_charge;
      this.form.code = this.area.code;
      this.updateArea(this.form).then(() => {
        this.$swal.fire("", "El área ha sido actualizada", "success");
      });
    }
  },
  computed: {
    ...mapState("areas", ["modalOpenEdit", "area"])
  }
};
</script>

<style>
</style>
