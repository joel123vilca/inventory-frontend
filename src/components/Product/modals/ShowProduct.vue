<template>
  <el-dialog
    title="Mostrar detalle de  producto"
    :visible.sync="modalOpenShow"
    :close-on-click-modal="false"
    center
    :show-close="false"
  >
    <el-form
      :model="form"
      class="formulario-creación"
      :label-position="labelPosition"
      disabled
    >
      <el-container>
        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item
              label="Part number"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="product.part_number"
                autocomplete="off"
                autofocus="true"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item
              label="Código"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="product.code"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item
              label="Nombre"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="product.name"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item
              label="Categoría"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="product.category"
                autocomplete="off"
                autofocus="true"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item
              label="Area"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="product.area.name"
                autocomplete="off"
                autofocus="true"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item
              label="Marca"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="product.brand.name"
                autocomplete="off"
                autofocus="true"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item
              label="Descripción"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="product.description"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item
              label="Precio"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="product.price"
                autocomplete="off"
                autofocus="true"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item
              label="Color"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="product.color"
                autocomplete="off"
                autofocus="true"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item
              label="Color"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="product.transport_guide"
                autocomplete="off"
                autofocus="true"
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
      <el-button @click="updateStateModalShow(!modalOpenShow)">
        Cerrar
      </el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      labelPosition: 'left',
      formLabelWidth: '120px'
    }
  },
  computed: {
    ...mapState('products', ['product', 'modalOpenShow'])
  },
  methods: {
    ...mapActions('products', ['updateStateModalShow'])
  }
}
</script>

<style>
</style>
