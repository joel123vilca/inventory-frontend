<template>
  <el-dialog
    title="Editar producto"
    :visible.sync="modalOpenEdit"
    :close-on-click-modal="false"
    :show-close="false"
  >
    <el-form
      ref="product"
      :model="product"
      class="formulario-creación"
      :label-position="labelPosition"
      status-icon
      :rules="rules"
    >
      <el-container>
        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item
              label="Part number"
              prop="part_number"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="product.part_number"
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
              label="Code"
              prop="code"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="product.code"
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
              label="Name"
              prop="name"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="product.name"
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
              label="Category"
              prop="category"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="product.category"
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
                v-model="product.area"
                placeholder="Select"
                clearable
                filterable
                disabled
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
              label="Brand"
              prop="brand"
              :label-width="formLabelWidth"
            >
              <el-select
                v-model="product.brand.id"
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
              label="Description"
              prop="description"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="product.description"
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
              label="Price"
              prop="price"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="product.price"
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
              prop="color"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="product.color"
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
              prop="transport_guide"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="product.transport_guide"
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
        @click="enviar('product')"
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
        name: [
          {
            required: true,
            message: 'Name is required',
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
        ],

        brand_id: [
          {
            required: true,
            message: 'Brand is required',
            trigger: 'change'
          }
        ]

      }
    }
  },

  computed: {
    ...mapState('products', ['product', 'modalOpenEdit']),
    ...mapState('brands', ['brands']),
    ...mapState('areas', ['areas'])
  },
  methods: {
    ...mapActions('products', ['updateStateModalEdit', 'updateProduct']),
    closeModal () {
      this.updateStateModalEdit(!this.modalOpenEdit).then(() => {
        this.form.clear()
        this.form.reset()
      })
    },
    enviar (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.form.id = this.product.id
          this.form.name = this.product.name
          this.form.part_number = this.product.part_number
          this.form.code = this.product.code
          this.form.category = this.product.category
          this.form.price = this.product.price
          this.form.description = this.product.description
          this.form.area_id = this.product.area.id
          this.form.brand_id = this.product.brand.id
          this.form.color = this.product.color
          this.form.transport_guide = this.product.transport_guide
          this.updateProduct(this.form).then(() => {
            this.$swal.fire('', 'El producto ha sido actualizado', 'success')
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style>
.help-block.invalid-feedback {
  display: block;
}
</style>
