<template>
  <el-dialog title="Editar producto" :visible.sync="modalOpenEdit" :close-on-click-modal="false">
    <el-form :model="form" class="formulario-creación" :label-position="labelPosition">
      <el-container>
        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item label="Part number" :label-width="formLabelWidth">
              <el-input v-model="product.part_number" autocomplete="off" autofocus="true"></el-input>
              <has-error :form="form" field="part_number" style="color:red"></has-error>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="Código" :label-width="formLabelWidth">
              <el-input v-model="product.code" autocomplete="off"></el-input>
              <has-error :form="form" field="code" style="color:red"></has-error>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="Nombre" :label-width="formLabelWidth">
              <el-input v-model="product.name" autocomplete="off"></el-input>
              <has-error :form="form" field="name" style="color:red"></has-error>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="Categoría" :label-width="formLabelWidth">
              <el-input v-model="product.category" autocomplete="off" autofocus="true"></el-input>
              <has-error :form="form" field="category" style="color:red"></has-error>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="Área" :label-width="formLabelWidth" clearable filterable>
              <el-select v-model="product.area" placeholder="Select">
                <el-option v-for="area in areas" :key="area.id" :label="area.name" :value="area.id"></el-option>
              </el-select>
              <has-error :form="form" field="area_id" style="color:red"></has-error>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="Marca" :label-width="formLabelWidth">
              <el-select v-model="product.brand" placeholder="Select" clearable filterable>
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
              <el-input v-model="product.description" autocomplete="off"></el-input>
              <has-error :form="form" field="description" style="color:red"></has-error>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="Precio" :label-width="formLabelWidth">
              <el-input v-model="product.price" autocomplete="off" autofocus="true"></el-input>
              <has-error :form="form" field="price" style="color:red"></has-error>
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
  computed: {
    ...mapState("products", ["product", "modalOpenEdit"]),
    ...mapState("brands", ["brands"]),
    ...mapState("areas", ["areas"])
  },
  methods: {
    ...mapActions("products", ["updateStateModalEdit", "updateProduct"]),
    enviar() {
      this.form.id = this.product.id;
      this.form.name = this.product.name;
      this.form.part_number = this.product.part_number;
      this.form.code = this.product.code;
      this.form.category = this.product.category;
      this.form.price = this.product.price;
      this.form.description = this.product.description;
      this.form.area_id = this.product.area.id;
      this.form.brand_id = this.product.brand.id;
      this.updateProduct(this.form);
    }
  }
};
</script>

<style>
</style>
