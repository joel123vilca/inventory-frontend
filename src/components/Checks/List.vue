<template>
  <el-tabs
    type="border-card"
    @tab-click="handleClick"
  >
    <el-tab-pane label="checks">
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
                  Area: {{ this.area.name }} / checks
                </h2>
              </div>
            </el-col>
            <el-col :span="14">
              <el-button
                type="warning"
                round
                icon="el-icon-plus"
                @click="handleCreate()"
              >
                Crear Check
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
                @click="handleDetail(scope.$index, scope.row)"
              >
                <i class="el-icon-view" />
              </el-button>
            </template>
          </el-table-column>
        </el-table>

        <AddModalProduct />
      </div>
    </el-tab-pane>
    <el-tab-pane label="products">
      <ListProduct />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import ListProduct from '@/components/Product/List.vue'
export default {
  components: {
    ListProduct
  },
  data () {
    return {
      search: '',
      loading: 'false'
    }
  },
  computed: {
    ...mapState('checks', ['checks', 'checkId']),
    ...mapState('areas', ['area'])
  },
  created () {
    this.getChecks(this.$route.params.id)
    this.getDetailArea(this.$route.params.id)
    this.getProductsByArea(this.$route.params.id)
  },
  beforeRouteUpdate (to, from, next) {
    next()
    this.getChecks(this.$route.params.id)
    this.getDetailArea(this.$route.params.id)
    this.getProductsByArea(this.$route.params.id)
  },
  methods: {
    ...mapActions('checks', ['getChecks', 'createCheck']),
    ...mapActions('areas', ['getDetailArea']),
    ...mapActions('products', ['getProductsByArea']),
    handleDetail (index, row) {
      var id = row.id
      this.$router.push({ name: 'details', params: { id } })
    },
    handleCreate () {
      this.$swal
        .fire({
          title: 'Deseas Crear nuevo Check?',
          text: 'continua el siguiente paso',
          type: 'question',
          showCancelButton: true,
          showCloseButton: true,
          confirmButtonColor: 'green',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, Continuar!'
        })
        .then(result => {
          var id = {
            idarea: this.area.id,
            user_id: 1
          }
          if (result.value) {
            console.log('dsfsdfsdfds1213')
            this.createCheck(id).then(() => {
              this.$swal.fire('', 'El check ha sido creado', 'success')
              const checkId = this.checkId
              console.log('hola mundo checkid')
              console.log(this.checkId)
              const Id = this.area.id
              this.$router.push({ name: 'AddCheck', params: { Id } })
            })
          } else if (result.dismiss == this.$swal.DismissReason.cancel) {
            this.$swal.fire(
              'Cancelled',
              'La operación ha sido cancelada'
            )
          }
        })
    }

  }

}
</script>
