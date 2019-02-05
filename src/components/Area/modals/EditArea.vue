<template>
  <el-dialog
    title="Edit area"
    :visible="modalOpenEdit"
    :close-on-click-modal="false"
    center
    :show-close="false"
  >
    <el-form
      ref="area"
      :model="area"
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
                v-model="area.name"
                autocomplete="off"
                autofocus
              />
              <has-error
                :form="form"
                field="name"
                style="color:red"
              />
            </el-form-item>
            <el-form-item
              label="Encargado"
              prop="person_in_charge"
              :label-width="formLabelWidth"
              :show-message="submitErrors.person_in_charge"
              :error="submitErrors.person_in_charge ? submitErrors.person_in_charge[0] : ''"
            >
              <el-input
                v-model="area.person_in_charge"
                autocomplete="off"
                autofocus
              />
              <has-error
                :form="form"
                field="person_in_charge"
                style="color:red"
              />
            </el-form-item>
            <el-form-item
              label="Code"
              prop="code"
              :label-width="formLabelWidth"
              :show-message="submitErrors.code"
              :error="submitErrors.code ? submitErrors.code[0] : ''"
            >
              <el-input
                v-model="area.code"
                autocomplete="off"
                autofocus
              />
              <has-error
                :form="form"
                field="code"
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
        @click="enviar('area')"
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
        id: '',
        name: '',
        person_in_charge: '',
        code: ''
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
        ],
        person_in_charge: [
          {
            required: true,
            message: 'Person in charge is required',
            trigger: 'change'
          }
        ],
        code: [
          {
            required: true,
            message: 'Code is required',
            trigger: 'change'
          }
        ]
      }
    }
  },
  computed: {
    ...mapState('areas', ['modalOpenEdit', 'area'])
  },
  methods: {
    ...mapActions('areas', ['updateArea', 'updateStateModalEdit']),
    modalClose () {
      this.updateStateModalEdit(!this.modalOpenEdit).then(() => {
        this.form.reset()
        this.form.clear()
      })
    },
    enviar (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.form.id = this.area.id
          this.form.name = this.area.name
          this.form.person_in_charge = this.area.person_in_charge
          this.form.code = this.area.code
          this.updateArea(this.form).then(() => {
            this.$swal.fire('', 'El área ha sido actualizada', 'success')
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
.el-dialog {
  width: 100%;
}
</style>
