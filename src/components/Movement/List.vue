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
              Movements
            </h2>
          </div>
        </el-col>
        <el-col :span="14">
          <el-button
            type="warning"
            round
            icon="el-icon-plus"
            @click="cambiarRuta()"
          >
            Añadir
          </el-button>
        </el-col>
        <el-col :span="3">
          <download-excel
            :data="movements"
            name="Reporte de movimientos"
            :fields="json_fields"
            title="Reporte de movimientos"
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
              placeholder="Type something"
              prefix-icon="el-icon-search"
            />
          </div>
        </el-col>
      </el-row>
    </el-container>
    <el-table
      v-loading="loadingTable"
      element-loading-text="Cargando ..."
      :data="movements.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()) || data.category.toLowerCase().includes(search.toLowerCase()) )"
      style="width: 100%"
    >
      <el-table-column
        label="ID"
        prop="id"
      />
      <el-table-column
        label="Name"
        prop="product.id"
      />
      <el-table-column
        label="Nombre producto"
        prop="product.name"
      />
      <el-table-column
        label="Area anterior"
        prop="area_anterior.name"
      />
      <el-table-column
        label="Area actual"
        prop="area_actual.name"
      />
      <el-table-column
        label="Fecha"
        prop="created_at"
      />
    </el-table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      json_fields: {
        ID: 'id',
        Code: 'product.code',
        Nombre: 'product.name',
        'Area anterior': 'area_anterior.name',
        'Area actual': 'area_actual.name',
        Fecha: 'created_at'
      }
    }
  },
  computed: {
    ...mapState('movements', ['movements'])
  },
  created () {
    this.getMovements()
  },
  methods: {
    ...mapActions('movements', ['getMovements']),
    cambiarRuta () {
      this.$router.push('/movements/new')
    }
  }

}
</script>

<style>
</style>
