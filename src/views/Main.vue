<template>
<div>
  <el-container class="nombre-container">
      <el-row type="flex" class="row-bg" justify="space-around" :gutter="20">
        <el-col :span="15">
          <div class="grid-content">
            <h2 class="texto-principal">Check - formulario</h2>
          </div>
        </el-col>
      </el-row>
    </el-container>
  <el-table :data="myData" stripe="stripe">
    <el-table-column prop="name" label="Col 1">
        <template slot-scope="scope">
            <el-input-number v-model="scope.row.name" :min="1" :max="99" size="small" controls-position="right" />
        </template>
    </el-table-column>
    <el-table-column prop="address" label="Col 2"></el-table-column>
</el-table>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">Cambia el estado de selección de la segunda y tercera fila.</el-button>
    <el-button @click="toggleSelection()">Limpiar selección</el-button>
  </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>