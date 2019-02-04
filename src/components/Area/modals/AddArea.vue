<template>
  <el-dialog
    title="Nueva Area"
    :visible.sync="modalOpenCreate"
    :close-on-click-modal="false"
    center
    :show-close="false"
  >
    <el-form
      :model="form"
      class="formulario-creación"
      :label-position="labelPosition"
    >
      <el-container>
        <el-row style="width:100%">
          <el-col :span="24">
            <el-form-item
              label="Nombre"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="form.name"
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
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="form.person_in_charge"
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
              label="Codigo"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="form.code"
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
      <el-button @click="closeModal()">
        Cancel
      </el-button>
      <el-button
        type="primary"
        icon="el-icon-check"
        @click="createArea(form)"
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
      formLabelWidth: '120px'
    }
  },
  methods: {
    ...mapActions('areas', ['createArea', 'updateStateModal']),
    closeModal () {
      this.updateStateModal(!this.modalOpenCreate).then(() => {
        this.form.reset()
        this.form.clear()
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
