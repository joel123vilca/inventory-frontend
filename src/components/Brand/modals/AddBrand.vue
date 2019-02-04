<template>
  <el-dialog
    title="Add brand"
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
        @click="saveBrand()"
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
    ...mapState('brands', ['modalOpenCreate'])
  },
  methods: {
    ...mapActions('brands', ['createBrand', 'updateStateModal']),
    closeModal () {
      this.updateStateModal(!this.modalOpenCreate).then(() => {
        this.form.reset()
        this.form.clear()
      })
    },
    saveBrand () {
      this.createBrand(this.form).then(() => {
        this.$swal.fire('', 'La marca ha sido creada', 'success')
      })
    }
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
</style>
