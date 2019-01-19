<template>
  <div id="app">
    <el-container>
      <el-aside width="230px">
        <div class="logo-container">
          <img src="http://idw.com.pe/image/logo.png" class="image">
        </div>

        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
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
            </el-submenu>
          </el-menu>
        </el-header>

        <el-main class="contenedor-principal">
          <el-container class="nombre-container">
            <el-row type="flex" class="row-bg" justify="space-around" :gutter="20">
              <el-col :span="4">
                <div class="grid-content">
                  <h2 class="texto-principal">Productos</h2>
                </div>
              </el-col>
              <el-col :span="14">
                <el-button
                  type="warning"
                  round
                  icon="el-icon-plus"
                  @click="dialogFormVisible = true"
                >Añadir</el-button>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <el-input
                    placeholder="Type something"
                    prefix-icon="el-icon-search"
                    v-model="input21"
                  ></el-input>
                </div>
              </el-col>
            </el-row>
          </el-container>

          <el-table
            v-loading="false"
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%"
          >
            <el-table-column label="Date" prop="date"></el-table-column>

            <el-table-column label="Name" prop="name"></el-table-column>

            <el-table-column label="Name" prop="name"></el-table-column>

            <el-table-column label="Name" prop="name"></el-table-column>

            <el-table-column label="Acciones">
              <template slot-scope="scope">
                <el-button size="small" type="primary" @click="handleEdit(scope.$index, scope.row)">
                  <i class="el-icon-view"></i>
                </el-button>

                <el-button size="small" type="warning" @click="handleEdit(scope.$index, scope.row)">
                  <i class="el-icon-edit"></i>
                </el-button>

                <el-button
                  size="small"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                >
                  <i class="el-icon-delete"></i>
                </el-button>
              </template>
            </el-table-column>
          </el-table>

          <el-dialog title="Nuevo producto" :visible.sync="dialogFormVisible" center top="8vh">
            <el-form :model="form" class="formulario-creación" :label-position="labelPosition">
              <el-container>
                <el-row :gutter="30">
                  <el-col :span="12">
                    <el-form-item label="Part number" :label-width="formLabelWidth">
                      <el-input v-model="form.name" autocomplete="off" autofocus="true"></el-input>
                    </el-form-item>
                  </el-col>

                  <el-col :span="12">
                    <el-form-item label="Código" :label-width="formLabelWidth">
                      <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                  </el-col>

                  <el-col :span="12">
                    <el-form-item label="Nombre" :label-width="formLabelWidth">
                      <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                  </el-col>

                  <el-col :span="12">
                    <el-form-item label="Categoría" :label-width="formLabelWidth">
                      <el-input v-model="form.name" autocomplete="off" autofocus="true"></el-input>
                    </el-form-item>
                  </el-col>

                  <el-col :span="12">
                    <el-form-item label="Marca" :label-width="formLabelWidth">
                      <el-select v-model="form.region" placeholder="please select your zone">
                        <el-option label="Zone one" value="shanghai"></el-option>
                        <el-option label="Zone two" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>

                  <el-col :span="12">
                    <el-form-item label="Área" :label-width="formLabelWidth">
                      <el-select v-model="form.region" placeholder="please select your zone">
                        <el-option label="Zone one" value="shanghai"></el-option>
                        <el-option label="Zone two" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>

                  <el-col :span="12">
                    <el-form-item label="Imagen" :label-width="formLabelWidth">
                      <el-input v-model="form.name" autocomplete="off" autofocus="true"></el-input>
                    </el-form-item>
                  </el-col>

                  <el-col :span="12">
                    <el-form-item label="Descripción" :label-width="formLabelWidth">
                      <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                  </el-col>

                  <el-col :span="12">
                    <el-form-item label="Activity zone" :label-width="formLabelWidth">
                      <el-select v-model="form.region" placeholder="please select your zone">
                        <el-option label="Zone one" value="shanghai"></el-option>
                        <el-option label="Zone two" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-container>
            </el-form>

            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">Cancel</el-button>
              <el-button
                type="primary"
                @click="dialogFormVisible = false"
                icon="el-icon-check"
              >Guardar</el-button>
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
      labelPosition: "left",
      variable: 0,
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-02",
          name: "John",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-04",
          name: "Morgan",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-01",
          name: "Jessy",
          address: "No. 189, Grove St, Los Angeles"
        }
      ],
      search: "",
      loading: "false",
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleLoading() {
      while (this.variable < 100) {
        this.variable++;
      }
    },
    handleLoadTable() {
      this.loading = false;
    }
  },
  mounted() {
    this.handleLoading();
  }
};
</script>

<style scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.image {
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
  min-height: 90vh;
}
.logo-container {
  padding: 12px;
  background: white;
}
.el-menu {
  border-right: 0 !important;
}
.el-main {
  background: #eef1f4;
}
.breadcrumb-container {
  margin-top: 20px;
  margin-bottom: 40px;
}
.button-container {
  margin-top: 20px;
}
.nombre-container {
  height: 70px;
  background: white;
  padding: 10px;
}
.bg-purple {
  background: #d3dce6;
}
.row-bg {
  width: 100%;
}

.texto-principal {
  margin: 5px;
}
.contenedor-principal {
  padding: 10px;
}

.formulario-creación {
  margin-bottom: 100px;
}
</style>