<template>
  <div>
    <el-container class="nombre-container">
      <el-row
        type="flex"
        class="row-bg"
        justify="space-around"
        :gutter="20"
      >
        <el-col :span="15">
          <div class="grid-content">
            <h2 class="texto-principal">
              Area: {{ this.area.name }}/ checks
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
      </el-row>
    </el-container>

    <el-table
      v-loading="false"
      :data="checks.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column
        label="Fecha - Revision"
        prop="data"
      />
      <el-table-column
        label="Encargado"
        prop="user"
      />
      <el-table-column label="Acciones">
        <template slot-scope="scope">
          <el-button
            size="small"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)"
          >
            <i class="el-icon-view" />
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <AddModalProduct />
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
export default {
  components: {

  },
  data () {
    return {
      search: '',
      loading: 'false'
    }
  },
  created () {
    this.getChecks(this.$route.params.id)
    this.getDetailArea(this.$route.params.id)
  },
  beforeRouteUpdate (to, from, next) {
    next()
    this.getChecks(this.$route.params.id)
    this.getDetailArea(this.$route.params.id)
  },
  methods: {
    ...mapActions('checks', ['getChecks']),
    ...mapActions('areas', ['getDetailArea'])
  },
  computed: {
    ...mapState('checks', ['checks']),
    ...mapState('areas', ['area'])
  }
}
</script>

<style>
</style>
