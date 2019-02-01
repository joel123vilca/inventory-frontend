<template>
  <el-dialog
    title="Añadir producto"
    :visible.sync="modalOpenCreate"
    :close-on-click-modal="false"
    width="70%"
    center
    top="5vh"
    :show-close="false"
  >
    <el-form
      :model="form"
      class="formulario-creación"
      :label-position="labelPosition"
    >
      <el-container>
        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item
              label="Part number"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="form.part_number"
                autocomplete="off"
                autofocus="true"
              />
              <has-error
                :form="form"
                field="part_number"
                style="color:red"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item
              label="Código"
              :label-width="formLabelWidth"
            >
              <el-input
                ref="text"
                v-model="form.code"
                autocomplete="off"
              />
              <has-error
                :form="form"
                field="code"
                style="color:red"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item
              label="Nombre"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="form.name"
                autocomplete="off"
              />
              <has-error
                :form="form"
                field="name"
                style="color:red"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item
              label="Categoría"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="form.category"
                autocomplete="off"
                autofocus="true"
              />
              <has-error
                :form="form"
                field="category"
                style="color:red"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item
              label="Área"
              :label-width="formLabelWidth"
            >
              <el-select
                v-model="form.area_id"
                placeholder="Select"
                clearable
                filterable
              >
                <el-option
                  v-for="area in areas"
                  :key="area.id"
                  :label="area.name"
                  :value="area.id"
                />
              </el-select>
              <has-error
                :form="form"
                field="area_id"
                style="color:red"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item
              label="Marca"
              :label-width="formLabelWidth"
            >
              <el-select
                v-model="form.brand_id"
                placeholder="Select"
                clearable
                filterable
              >
                <el-option
                  v-for="brand in brands"
                  :key="brand.id"
                  :label="brand.name"
                  :value="brand.id"
                />
              </el-select>
              <has-error
                :form="form"
                field="brand_id"
                style="color:red"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item
              label="Descripción"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="form.description"
                autocomplete="off"
              />
              <has-error
                :form="form"
                field="description"
                style="color:red"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item
              label="Precio"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="form.price"
                autocomplete="off"
                autofocus="true"
              />
              <has-error
                :form="form"
                field="price"
                style="color:red"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item
              label="Color"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="form.color"
                autocomplete="off"
                autofocus="true"
              />
              <has-error
                :form="form"
                field="color"
                style="color:red"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item
              label="Transport guide"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="form.transport_guide"
                autocomplete="off"
                autofocus="true"
              />
              <has-error
                :form="form"
                field="transport_guide"
                style="color:red"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-container>
    </el-form>
    <span
      slot="footer"
      class="dialog-footer"
    >
      <el-button @click="closeModal()">
        Cancel
      </el-button>
      <el-button
        type="primary"
        icon="el-icon-check"
        @click="saveProduct()"
      >
        Guardar
      </el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import { Form } from 'vform'

export default {
  data () {
    return {
      labelPosition: 'left',
      form: new Form({
        part_number: '',
        code: '',
        name: '',
        category: '',
        price: '',
        description: '',
        area_id: '',
        brand_id: '',
        color: '',
        transport_guide: ''
      }),
      formLabelWidth: '120px'
    }
  },
  methods: {
    ...mapActions('products', ['createProduct', 'updateStateModal']),
    closeModal () {
      this.updateStateModal(!this.modalOpenCreate).then(() => {
        this.form.clear()
        this.form.reset()
      })
    },
    saveProduct () {
      this.createProduct(this.form).then(() => {
        this.$swal.fire('', 'El producto ha sido creado', 'success')
      })
    }
  },
  computed: {
    ...mapState('products', ['modalOpenCreate']),
    ...mapState('brands', ['brands']),
    ...mapState('areas', ['areas'])
  }
}
</script>

<style scoped>
.el-row {
  width: 100%;
}
.error-color {
  border-color: red;
}
.el-select {
  width: 100%;
}
</style>
