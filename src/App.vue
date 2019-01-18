<template>
  <div id='app'>
    <el-container>
      <el-aside width="230px">

        <div class="logo-container">
          <img src="http://idw.com.pe/image/logo.png" class="image" />
        </div>

        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
            
            <el-menu-item index="1" active>
              <i class="el-icon-menu"></i>
              <span>Productos</span>
            </el-menu-item>

            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span>Marcas</span>
            </el-menu-item>

            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <span>Areas</span>
            </el-menu-item>

            <el-menu-item index="4">
              <i class="el-icon-menu"></i>
              <span>Movimientos</span>
            </el-menu-item>

            <el-menu-item index="5">
              <i class="el-icon-setting"></i>
              <span>Perfil</span>
            </el-menu-item>

            <el-menu-item index="6">
              <i class="el-icon-document"></i>
              <span>Reportes</span>
            </el-menu-item>

        </el-menu>
    
      </el-aside>
      
      <el-container>
        <el-header>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">Processing Center</el-menu-item>
            <el-submenu index="2">
              <template slot="title">Workspace</template>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-2">item two</el-menu-item>
              <el-menu-item index="2-3">item three</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>Info</el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
          </el-menu>
        </el-header>
    <el-main>
            
        <el-progress :percentage="variable" color="#8e71c7"></el-progress>
        <el-button type="success" @click="handleLoadTable()">Success</el-button>

          <el-table
            v-loading="loading"
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
          <el-table-column
              label="Date"
              prop="date">
          </el-table-column>
          <el-table-column
              label="Name"
              prop="name">
          </el-table-column>

    <el-table-column
              label="Name"
              prop="name">
    </el-table-column>
    <el-table-column
      label="Name">
      <template slot-scope="scope">
        
        <el-button
          size="small"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)">
          <i class="el-icon-view"></i>
        </el-button>

        <el-button
          size="small"
          type="warning"
          @click="handleEdit(scope.$index, scope.row)">
          <i class="el-icon-edit"></i>
        </el-button>
        
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">
          <i class="el-icon-delete"></i>
        </el-button>
      
      </template>
    </el-table-column>
          
  </el-table>
    
    <el-button type="text" @click="dialogFormVisible = true">open a Form nested Dialog</el-button>

<el-dialog title="Shipping address" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="Promotion name" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="Zones" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="Please select a zone">
        <el-option label="Zone No.1" value="shanghai"></el-option>
        <el-option label="Zone No.2" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">Cancel</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
  </span>
</el-dialog>


        </el-main>
      </el-container>
    </el-container>
  </div>  
</template>


<script>
  export default {
    data() {
      return {
        variable:0,
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'John',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Morgan',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Jessy',
          address: 'No. 189, Grove St, Los Angeles'
        }],
        search: '',
        loading:'true',
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleLoading(){
        while(this.variable<100){
          this.variable++;
        };
      },
      handleLoadTable(){
        this.loading=false;
      },
    },
    mounted(){
        this.handleLoading();//method1 will execute at pageload
        // this.variable=0
    },
  }
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.image{
  width: 43%;
  display: block;
  margin: 0 auto;
}
.container {
  max-width: 1200px;
  margin: auto;
}
.el-aside {
  background: white;
  color: white;
  min-height: 100vh;
}
.logo-container {
  padding: 12px;
  background:white;
}
.el-menu {
  border-right: 0 !important;
}
.el-main {
  background: #EEF1F4;
}
.breadcrumb-container {
  margin-top: 20px;
  margin-bottom: 40px;
}
.button-container {
  margin-top: 20px;
}
</style>
