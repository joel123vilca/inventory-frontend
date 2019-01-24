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
      <el-button @click="changeState">Cancel</el-button>
      <el-button type="primary" @click="updateBrand" icon="el-icon-check">Guardar</el-button>
    </span>
  </el-dialog>
</template>

<script>
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
    changeState() {
      this.$store.dispatch("updateStateModalEdit", !this.modalOpenEdit);
    },
    updateBrand() {
      console.log("updateeee");
      //   console.log(this.brand.name);
      this.$store.dispatch("updateBrand", this.brand);
    }
  },
  computed: {
    modalOpenEdit() {
      return this.$store.state.modalOpenEdit;
    },
    brand() {
      return this.$store.state.brand;
    }
  }
};
</script>

<style>
</style>
