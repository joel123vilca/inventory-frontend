<template>
  <el-dialog
    title="Add product"
    :visible.sync="modalOpenCreate"
    :close-on-click-modal="false"
    width="90%"
    center
    top="15vh"
    :show-close="false"
  >
    <el-form
      ref="form"
      :model="form"
      :label-position="labelPosition"
      status-icon
      :rules="rules"
      class="formulario-creación"
    >
      <el-container>
        <el-row :gutter="30">
          <el-col
            :span="12"
            :xs="24"
          >
            <el-form-item
              label="Part number"
              prop="part_number"
              :label-width="formLabelWidth"
              :show-message="submitErrors.part_number"
              :error="submitErrors.part_number ? submitErrors.part_number[0] : ''"
            >
              <el-input
                v-model="form.part_number"
                autocomplete="off"
                autofocus="true"
                @keyup.native="clearError('part_number')"
              />
              <has-error
                :form="form"
                field="part_number"
                style="color:red"
              />
            </el-form-item>
          </el-col>

          <el-col
            :span="12"
            :xs="24"
          >
            <el-form-item
              label="Code"
              prop="code"
              :label-width="formLabelWidth"
              :show-message="submitErrors.part_number"
              :error="submitErrors.part_number ? submitErrors.part_number[0] : ''"
            >
              <el-input
                ref="text"
                v-model="form.code"
                autocomplete="off"
                @keyup.native="clearError('part_number')"
              />
              <has-error
                :form="form"
                field="code"
                style="color:red"
              />
            </el-form-item>
          </el-col>

          <el-col
            :span="12"
            :xs="24"
          >
            <el-form-item
              label="Name"
              prop="name"
              :label-width="formLabelWidth"
              :show-message="submitErrors.name"
              :error="submitErrors.name ? submitErrors.name[0] : ''"
            >
              <el-input
                v-model="form.name"
                autocomplete="off"
                @keyup.native="clearError('name')"
              />
              <has-error
                :form="form"
                field="name"
                style="color:red"
              />
            </el-form-item>
          </el-col>

          <el-col
            :span="12"
            :xs="24"
          >
            <el-form-item
              label="Categoría"
              prop="category"
              :label-width="formLabelWidth"
              :show-message="submitErrors.category"
              :error="submitErrors.category ? submitErrors.category[0] : ''"
            >
              <el-input
                v-model="form.category"
                autocomplete="off"
                autofocus="true"
                @keyup.native="clearError('category')"
              />
              <has-error
                :form="form"
                field="category"
                style="color:red"
              />
            </el-form-item>
          </el-col>

          <el-col
            :span="12"
            :xs="24"
          >
            <el-form-item
              label="Área"
              prop="area_id"
              :label-width="formLabelWidth"
              :show-message="submitErrors.area_id"
              :error="submitErrors.area_id ? submitErrors.area_id[0] : ''"
            >
              <el-select
                v-model="form.area_id"
                placeholder="Select area"
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

          <el-col
            :span="12"
            :xs="24"
          >
            <el-form-item
              label="Brand"
              prop="brand_id"
              :label-width="formLabelWidth"
              :show-message="submitErrors.brand_id"
              :error="submitErrors.brand_id ? submitErrors.brand_id[0] : ''"
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

          <el-col
            :span="12"
            :xs="24"
          >
            <el-form-item
              label="Descriptión"
              prop="description"
              :label-width="formLabelWidth"
              :show-message="submitErrors.area_id"
              :error="submitErrors.area_id ? submitErrors.area_id[0] : ''"
            >
              <el-input
                v-model="form.description"
                autocomplete="off"
                @keyup.native="clearError('description')"
              />
              <has-error
                :form="form"
                field="description"
                style="color:red"
              />
            </el-form-item>
          </el-col>

          <el-col
            :span="12"
            :xs="24"
          >
            <el-form-item
              label="Price"
              prop="price"
              :label-width="formLabelWidth"
              :show-message="submitErrors.price"
              :error="submitErrors.price ? submitErrors.price[0] : ''"
            >
              <el-input
                v-model="form.price"
                autocomplete="off"
                autofocus="true"
                @keyup.native="clearError('price')"
              />
              <has-error
                :form="form"
                field="price"
                style="color:red"
              />
            </el-form-item>
          </el-col>

          <el-col
            :span="12"
            :xs="24"
          >
            <el-form-item
              label="Color"
              prop="color"
              :label-width="formLabelWidth"
              :show-message="submitErrors.color"
              :error="submitErrors.color ? submitErrors.color[0] : ''"
            >
              <el-input
                v-model="form.color"
                autocomplete="off"
                autofocus="true"
                @keyup.native="clearError('color')"
              />
              <has-error
                :form="form"
                field="color"
                style="color:red"
              />
            </el-form-item>
          </el-col>

          <el-col
            :span="12"
            :xs="24"
          >
            <el-form-item
              label="Transport"
              :label-width="formLabelWidth"
              prop="transport_guide"
              :show-message="submitErrors.transpor_guide"
              :error="submitErrors.transport_guide ? submitErrors.transport_guide[0] : ''"
            >
              <el-input
                v-model="form.transport_guide"
                autocomplete="off"
                autofocus="true"
                @keyup.native="clearError('transport_guide')"
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
        @click="saveProduct('form')"
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
      formLabelWidth: '120px',
      submitErrors: {},
      rules: {
        part_number: [
          {
            required: true,
            message: 'Part number is required',
            trigger: 'change'
          }
        ],
        code: [
          {
            required: true,
            message: 'Code is required',
            trigger: 'change'
          }
        ],
        category: [
          {
            required: true,
            message: 'Category is required',
            trigger: 'change'
          }
        ],
        name: [
          {
            required: true,
            message: 'Name is required',
            trigger: 'change'
          }
        ],
        area_id: [
          {
            required: true,
            message: 'Area is required',
            trigger: 'change'
          }
        ],
        brand_id: [
          {
            required: true,
            message: 'Brand is required',
            trigger: 'change'
          }
        ],
        price: [
          {
            required: true,
            message: 'Price is required',
            trigger: 'change'
          }
        ],
        description: [
          {
            required: true,
            message: 'Description is required',
            trigger: 'change'
          }
        ],
        color: [
          {
            required: true,
            message: 'Color is required',
            trigger: 'change'
          }
        ],
        transport_guide: [
          {
            required: true,
            message: 'Transport guide is required',
            trigger: 'change'
          }
        ]
      }
    }
  },
  computed: {
    ...mapState('products', ['modalOpenCreate']),
    ...mapState('brands', ['brands']),
    ...mapState('areas', ['areas'])
  },
  methods: {
    ...mapActions('products', ['createProduct', 'updateStateModal']),
    closeModal () {
      this.updateStateModal(!this.modalOpenCreate).then(() => {
        this.form.clear()
        this.form.reset()
      })
    },
    saveProduct (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.createProduct(this.form).then(() => {
            this.$swal.fire('', 'El producto ha sido creado', 'success')
          }).catch(() => {
            this.$notify.error({
              title: 'Error',
              message: 'This is an error message 3'
            })
          })
        } else {
          console.log('error submit!!')
          this.$notify.error({
            title: 'Error',
            message: 'Verify the fields'
          })
          return false
        }
      })
    }
  }

}
</script>

<style>
.el-row {
  width: 100%;
}
.error-color {
  border-color: red;
}
.el-select {
  width: 100%;
}
.invalid-feedback {
  display: block;
}
</style>
