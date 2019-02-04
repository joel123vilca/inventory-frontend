<template>
  <el-dialog
    title="Editar marca"
    :visible="modalOpenEdit"
    :close-on-click-modal="false"
    center
    :show-close="false"
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
  methods: {
    ...mapActions('brands', ['updateBrand', 'updateStateModalEdit']),
    modalClose () {
      this.updateStateModalEdit(!this.modalOpenEdit).then(() => {
        this.form.reset()
        this.form.clear()
      })
    },
    enviar (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('asdas')
          this.form.id = this.brand.id
          this.form.name = this.brand.name
          this.updateBrand(this.form).then(() => {
            this.$swal.fire('', 'La marca ha sido actualizada', 'success')
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

<style scoped>
.el-row {
  width: 100%;
}
</style>
