<template>
  <el-table
    :data="details"
    style="width: 100%"
  >
    <el-table-column type="expand">
      <template slot-scope="props">
        <p>Estado: {{ props.row.state }}</p>
      </template>
    </el-table-column>
    <el-table-column
      label="Product"
      prop="product"
    />
    <el-table-column
      label="Observation"
      prop="observation"
    />
  </el-table>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  methods: {
    ...mapActions('checks', ['getDetails'])
  },
  computed: {
    ...mapState('checks', ['details'])
  },
  created () {
    this.getDetails(this.$route.params.id)
  }
}
</script>
