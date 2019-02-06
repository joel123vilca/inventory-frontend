<template>
  <el-dialog
    title="Edit brand"
    :visible="modalOpenEdit"
    :close-on-click-modal="false"
    center
    :show-close="false"
    :width="widthWindow"
  >
    <el-form
      ref="brand"
      :model="brand"
      class="formulario-creación"
      :label-position="labelPosition"
      status-icon
      :rules="rules"
    >
      <el-container>
        <el-row>
          <el-col :span="24">
            <el-form-item
              label="Name"
              prop="name"
              :label-width="formLabelWidth"
              :show-message="submitErrors.name"
              :error="submitErrors.name ? submitErrors.name[0] : ''"
            >
              <el-input
                v-model="brand.name"
                autocomplete="off"
                autofocus
              />
              <has-error
                :form="form"
                field="name"
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
      <el-button @click="modalClose()">
        Cancel
      </el-button>
      <el-button
        type="primary"
        icon="el-icon-check"
        @click="enviar('brand')"
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
      widthWindow: '',
      form: new Form({
        name: ''
      }),
      formLabelWidth: '120px',
      submitErrors: {},
      rules: {
        name: [
          {
            required: true,
            message: 'Name is required',
            trigger: 'change'
          }
        ]
      }
    }
  },
  computed: {
    ...mapState('brands', ['modalOpenEdit', 'brand'])
  },
  mounted: function () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    ...mapActions('brands', ['updateBrand', 'updateStateModalEdit']),
    modalClose () {
      this.updateStateModalEdit(!this.modalOpenEdit).then(() => {
        this.form.reset()
        this.form.clear()
      })
    },
    handleResize () {
      if (this.$currentViewport.label === 'mobile' || this.$currentViewport.label === 'tablet') {
        // from 768px (included) to 1024px (excluded)
        this.widthWindow = '90%'
        console.log('esats vista')
      } else {
        this.widthWindow = '50%'
        // anything else
      }
    },
    enviar (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('asdas')
          this.form.id = this.brand.id
          this.form.name = this.brand.name
          this.updateBrand(this.form).then(() => {
            this.$swal.fire('', 'La marca ha sido actualizada', 'success')
          }).catch(() => {
            this.$notify.error({
              title: 'Error',
              message: 'This is an error message'
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

<style scoped>
.el-row {
  width: 100%;
}
</style>
