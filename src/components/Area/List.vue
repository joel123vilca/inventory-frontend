<template>
  <div>
    <nav class="navbar">
      <a class="navbar-brand">
        Areas
      </a>
      <button
        class="btn btn-primary"
        type="submit"
        @click="modalCreate=!modalCreate"
      >
        + Añadir
      </button>
      <div class="form-inline">
        <input
          v-model="search"
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        >
      </div>
    </nav>

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
  },
  created () {
    this.getAreas().then(() => {
      this.$notify({
        title: 'Success',
        message: 'Areas were loaded succesfully',
        type: 'success'
      })
    })
      .catch(() => {
        this.$notify.error({
          title: 'Error',
          message: 'A error ocurrs when loading data'
        })
      })
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
  }

}
</script>

<style>
.navbar {
  background-color: #ffa940;
}
</style>
