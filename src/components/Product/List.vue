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
              Productos
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
            :data="products"
            name="products.xls"
            :fields="json_fields"
            title="Reporte de productos"
          >
            <el-button
              type="success"
              round
              icon="el-icon-download"
            >
              Excel
              <!-- <img src="@/assets/excel.png" style="width:10%"> -->
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
      :data="products.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()) || data.category.toLowerCase().includes(search.toLowerCase()) )"
      style="width: 100%"
    >
      <!-- <el-table-column label="ID" prop="id"></el-table-column> -->
      <el-table-column
        type="index"
        width="50"
      />
      <el-table-column
        label="Name"
        prop="name"
      />
      <el-table-column
        label="Categoria"
        prop="category"
      />
      <el-table-column
        label="Marca"
        prop="brand.name"
        sortable
      />
      <el-table-column
        label="Area"
        prop="area.name"
        sortable
      />
      <el-table-column label="Acciones">
        <template slot-scope="scope">
          <el-button
            size="small"
            type="primary"
            @click="handleShow(scope.$index, scope.row)"
          >
            <i class="el-icon-view" />
          </el-button>

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

    <AddProduct />
    <EditProduct />
    <ShowProduct />
  </div>
</template>

<script>
import AddProduct from '@/components/Product/modals/AddProduct'
import EditProduct from '@/components/Product/modals/EditProduct'
import ShowProduct from '@/components/Product/modals/ShowProduct.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    AddProduct,
    EditProduct,
    ShowProduct
  },
  data () {
    return {
      search: '',
      json_fields: {
        Nombre: 'name',
        Código: 'code',
        Categoria: 'category',
        'Part number': 'part_number',
        'Precio (S/.)': 'price',
        Descripción: 'description',
        Area: 'area.name',
        Marca: 'brand.name'
      }
      // loading: "false"
    }
  },
  computed: {
    ...mapState('products', ['products', 'loadingTable']),
    ...mapState('brands', ['brands']),
    modalCreate: {
      get () {
        return this.$store.getters.getModalCreate
      },
      set (value) {
        this.$store.dispatch('products/updateStateModal', value)
      }
    },
    modalShow: {
      get () {
        return this.$store.getters.getModalShow
      },
      set (value) {
        this.$store.dispatch('products/updateStateModalShow', value)
      }
    },
    modalEdit: {
      get () {
        return this.$store.getters.getModalEdit
      },
      set (value) {
        this.$store.dispatch('products/updateStateModalEdit', value)
      }
    }
  },
  created () {
    this.getProducts()
    this.getBrands()
    this.getAreas()
  },
  methods: {
    ...mapActions('products', [
      'getProducts',
      'getDetailProduct',
      'deleteProduct'
    ]),
    ...mapActions('brands', ['getBrands']),
    ...mapActions('areas', ['getAreas']),
    handleShow (index, row) {
      this.getDetailProduct(row.id)
      this.modalShow = !this.modalShow
    },
    handleEdit (index, row) {
      this.getDetailProduct(row.id)
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
            this.deleteProduct(row.id).then(() => {
              this.$swal.fire('', 'El producto ha sido eliminado.', 'success')
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
.invalid-feedback {
  display: block;
}
</style>
