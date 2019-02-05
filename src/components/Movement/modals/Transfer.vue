<template>
  <el-dialog
    title="Nuevo movimiento"
    :visible.sync="modalOpenTransfer"
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
                v-model="product.name"
                autocomplete="off"
                autofocus
                disabled
                :class="form.errors.has('name') ? 'error-color' : ''"
              />
              <has-error
                :form="form"
                field="name"
                style="color:red"
              />
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item
              label="Area actual"
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="product.area.name"
                autocomplete="off"
                autofocus="true"
                disabled
              />
              <has-error
                :form="form"
                field="category"
                style="color:red"
              />
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item
              label="Área nueva"
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
        </el-row>
      </el-container>
    </el-form>

    <span
      slot="footer"
      class="dialog-footer"
    >
      <el-button @click="updateStateModalTransfer(!modalOpenTransfer)">
        Cancel
      </el-button>
      <el-button
        type="primary"
        icon="el-icon-check"
        @click="createMovementSend()"
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
        area_id: ''
      }),
      formLabelWidth: '120px'
    }
  },
  computed: {
    ...mapState('movements', ['modalOpenTransfer']),
    ...mapState('products', ['product']),
    ...mapState('areas', ['areas'])
  },
  created () {
    this.getAreas()
  },
  methods: {
    ...mapActions('movements', ['updateStateModalTransfer', 'createMovement']),
    ...mapActions('areas', ['getAreas']),
    createMovementSend () {
      this.form.id = this.product.id
      this.createMovement(this.form).then(() => {
        this.$swal.fire('', ` El ${this.product.name} se ha movido con éxito`, 'success')
        this.$router.push('/movements/')
      }).catch(() => {
        this.$notify.error({
          title: 'Error',
          message: 'This is an error message'
        })
      })
    }
  }

}
</script>

<style>
</style>
