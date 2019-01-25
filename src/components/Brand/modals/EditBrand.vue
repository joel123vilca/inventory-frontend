<template>
  <el-dialog title="Nueva marca 2" :visible="modalOpenEdit" :close-on-click-modal="false" center>
    <el-form :model="form" class="formulario-creación" :label-position="labelPosition">
      <el-container>
        <el-row>
          <el-col :span="24">
            <el-form-item label="Nombre" :label-width="formLabelWidth">
              <el-input v-model="brand.name" autocomplete="off" autofocus></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-container>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="updateStateModalEdit(!modalOpenEdit)">Cancel</el-button>
      <el-button type="primary" @click="updateBrand(brand)" icon="el-icon-check">Guardar</el-button>
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
    ...mapActions([
      "updateBrand",
      "updateStateModalEdit",
      "updateStateModalEdit"
    ])
    // changeState() {
    //   //   this.$store.dispatch("updateStateModalEdit", !this.modalOpenEdit);
    //   this.updateStateModalEdit(!this.modalOpenEdit);
    // }
    // updateBrand2() {
    //   this.$store.dispatch("updateBrand", this.brand);
    //   this.updateBrand(this.brand);
    // }
  },
  computed: {
    ...mapState(["modalOpenEdit", "brand"])
  }
};
</script>

<style>
</style>
