<template>
  <el-dialog title="Añadir producto" :visible.sync="modalOpenCreate" :close-on-click-modal="false">
    <el-form :model="form" class="formulario-creación" :label-position="labelPosition">
      <el-container>
        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item label="Part number" :label-width="formLabelWidth">
              <el-input v-model="form.part_number" autocomplete="off" autofocus="true"></el-input>
              <has-error :form="form" field="part_number" style="color:red"></has-error>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="Código" :label-width="formLabelWidth">
              <el-input v-model="form.code" autocomplete="off"></el-input>
              <has-error :form="form" field="code" style="color:red"></has-error>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="Nombre" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
              <has-error :form="form" field="name" style="color:red"></has-error>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="Categoría" :label-width="formLabelWidth">
              <el-input v-model="form.category" autocomplete="off" autofocus="true"></el-input>
              <has-error :form="form" field="category" style="color:red"></has-error>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="Área" :label-width="formLabelWidth">
              <el-select v-model="form.area_id" placeholder="Select" clearable filterable>
                <el-option v-for="area in areas" :key="area.id" :label="area.name" :value="area.id"></el-option>
              </el-select>
              <has-error :form="form" field="area_id" style="color:red"></has-error>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="Marca" :label-width="formLabelWidth">
              <el-select v-model="form.brand_id" placeholder="Select" clearable filterable>
                <el-option
                  v-for="brand in brands"
                  :key="brand.id"
                  :label="brand.name"
                  :value="brand.id"
                ></el-option>
              </el-select>
              <has-error :form="form" field="brand_id" style="color:red"></has-error>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="Descripción" :label-width="formLabelWidth">
              <el-input v-model="form.description" autocomplete="off"></el-input>
              <has-error :form="form" field="description" style="color:red"></has-error>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="Precio" :label-width="formLabelWidth">
              <el-input v-model="form.price" autocomplete="off" autofocus="true"></el-input>
              <has-error :form="form" field="price" style="color:red"></has-error>
            </el-form-item>
          </el-col>
        </el-row>
      </el-container>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="updateStateModal(!modalOpenCreate)">Cancel</el-button>
      <el-button type="primary" @click="createProduct(form)" icon="el-icon-check">Guardar</el-button>
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
      form: new Form({
        part_number: "",
        code: "",
        name: "",
        category: "",
        price: "",
        description: "",
        area_id: "",
        brand_id: ""
      }),
      formLabelWidth: "120px"
    };
  },
  methods: {
    ...mapActions("products", ["createProduct", "updateStateModal"])

    // saveBrand() {
    //   this.createBrand(this.form);
    //   this.$store.dispatch("createBrand", this.form);
    // }
  },
  computed: {
    ...mapState("products", ["modalOpenCreate"]),
    ...mapState("brands", ["brands"]),
    ...mapState("areas", ["areas"])
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
