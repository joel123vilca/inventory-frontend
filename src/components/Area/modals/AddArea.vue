<template>
  <el-dialog
    title="New Area"
    :visible.sync="modalOpenCreate"
    :close-on-click-modal="false"
    center
    :show-close="false"
  >
    <el-form
      ref="form"
      :model="form"
      class="formulario-creación"
      :label-position="labelPosition"
      status-icon
      :rules="rules"
    >
      <el-container>
        <el-row style="width:100%">
          <el-col :span="24">
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
                autofocus
                @keyup.native="clearError('name')"
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
                v-model="form.person_in_charge"
                autocomplete="off"
                autofocus
                @keyup.native="clearError('person_in_charge')"
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
                v-model="form.code"
                autocomplete="off"
                autofocus
                @keyup.native="clearError('code')"
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
      <el-button @click="closeModal()">
        Cancel
      </el-button>
      <el-button
        type="primary"
        icon="el-icon-check"
        @click="saveArea('form')"
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
  methods: {
    ...mapActions('areas', ['createArea', 'updateStateModal']),
    closeModal () {
      this.updateStateModal(!this.modalOpenCreate).then(() => {
        this.form.reset()
        this.form.clear()
      })
    },
    saveArea (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.createArea(this.form).then(() => {
            this.$swal.fire('', 'El area ha sido creada', 'success')
          }).catch(() => {
            this.$notify.error({
              title: 'Error',
              message: 'This is an error message 5'
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
  },

  computed: {
    ...mapState('areas', ['modalOpenCreate'])
  }
}
</script>

<style scoped>
.el-row {
  width: 100%;
}
</style>
