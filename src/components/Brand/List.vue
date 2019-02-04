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
              Marcas
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
        <el-col :span="3">
          <download-excel
            :data="brands"
            name="brands.xls"
            title="Reporte de marcas"
          >
            <el-button
              type="success"
              round
              icon="el-icon-download"
            >
              Excel
            </el-button>
          </download-excel>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-input
              v-model="search"
              placeholder="Escribe algo"
              prefix-icon="el-icon-search"
            />
          </div>
        </el-col>
      </el-row>
    </el-container>

    <el-table
      v-loading="loadingTable"
      element-loading-text="Cargando ..."
      :data="brands.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column
        label="ID"
        prop="id"
      />
      <el-table-column
        label="Name"
        prop="name"
      />

      <el-table-column label="Acciones">
        <template slot-scope="scope">
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

    <AddBrand />
    <EditBrand />
  </div>
</template>

<script>
import AddBrand from '@/components/Brand/modals/AddBrand'
import EditBrand from '@/components/Brand/modals/EditBrand'
// import axios from "axios";
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    AddBrand,
    EditBrand
  },
  data () {
    return {
      search: '',
      loading: 'false'
    }
  },
  computed: {
    ...mapState('brands', ['brands', 'loadingTable']),
    modalCreate: {
      get () {
        return this.$store.getters.getModalCreate
      },
      set (value) {
        this.$store.dispatch('brands/updateStateModal', value)
      }
    },
    modalEdit: {
      get () {
        return this.$store.getters.getModalEdit
      },
      set (value) {
        this.$store.dispatch('brands/updateStateModalEdit', value)
      }
    }
  },
  created () {
    this.getBrands()
  },
  methods: {
    ...mapActions('brands', ['getBrands', 'getDetailBrand', 'deleteBrand']),
    handleEdit (index, row) {
      this.getDetailBrand(row.id)
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
            this.deleteBrand(row.id).then(() => {
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
</style>
