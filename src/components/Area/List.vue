<template>
  <div>
    <el-container class="nombre-container">
      <el-row
        type="flex"
        class="row-bg"
        justify="space-around"
        :gutter="20"
      >
        <el-col :span="4">
          <div class="grid-content">
            <h2 class="texto-principal">
              Areas
            </h2>
          </div>
        </el-col>
        <el-col :span="14">
          <el-button
            type="warning"
            round
            icon="el-icon-plus"
            @click="modalCreate=!modalCreate"
          >
            Añadir
          </el-button>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-input
              v-model="search"
              placeholder="Buscar Area"
              prefix-icon="el-icon-search"
            />
          </div>
        </el-col>
      </el-row>
    </el-container>

    <el-table
      v-loading="false"
      :data="areas.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column
        type="index"
        width="50"
      />
      <el-table-column
        label="Name"
        prop="name"
      />
      <el-table-column
        label="Encargado"
        prop="person_in_charge"
      />
      <el-table-column label="Acciones">
        <template slot-scope="scope">
          <!-- <el-button size="small" type="primary" @click="handleEdit(scope.$index, scope.row)">
            <i class="el-icon-view"></i>
          </el-button>-->
          <el-button
            size="small"
            type="warning"
            @click="handleEdit(scope.$index, scope.row)"
          >
            <i class="el-icon-edit" />
          </el-button>

          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            <i class="el-icon-delete" />
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <AddArea />
    <EditArea />
  </div>
</template>

<script>
import AddArea from '@/components/Area/modals/AddArea'
import EditArea from '@/components/Area/modals/EditArea'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    AddArea,
    EditArea
  },
  data () {
    return {
      search: '',
      loading: 'false'
    }
  },
  created () {
    this.getAreas()
  },
  methods: {
    ...mapActions('areas', ['getAreas', 'getDetailArea', 'deleteArea']),
    handleEdit (index, row) {
      this.getDetailArea(row.id)
      this.modalEdit = !this.modalEdit
    },
    handleDelete (index, row) {
      this.$swal
        .fire({
          title: 'Estas seguro?',
          text: 'No seras capaz de revertir esto!',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, eliminalo!'
        })
        .then(result => {
          if (result.value) {
            this.deleteArea(row.id).then(() => {
              this.$swal.fire('', 'La marca ha sido eliminada.', 'success')
            })
          } else if (result.dismiss === this.$swal.DismissReason.cancel) {
            this.$swal.fire(
              'Cancelled',
              'La operación ha sido cancelada',
              'error'
            )
          }
        })
    }
  },
  computed: {
    ...mapState('areas', ['areas']),
    modalCreate: {
      get () {
        return this.$store.getters.getModalCreate
      },
      set (value) {
        this.$store.dispatch('areas/updateStateModal', value)
      }
    },
    modalEdit: {
      get () {
        return this.$store.getters.getModalEdit
      },
      set (value) {
        this.$store.dispatch('areas/updateStateModalEdit', value)
      }
    }
  }
}
</script>

<style>
</style>
