<template>
  <div id="appPacientes" class="container">
        <!-- Tabla donde se muestran los datos -->
        <section class="data">
            <caption>Products</caption>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">codigo</th>
                        <th scope="col">Producto</th>
                        <th scope="col">observation</th>
                        <th scope="col">state</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(paciente, index) in pacientes" :key="index.id">
                        <td>{{ paciente.id }}</td>
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                <!-- Formulario para actualizar -->
                                <input v-model="nombreActualizar" type="text" class="form-control">
                            </span>
                            <span v-else>
                                <!-- Dato nombre -->
                                {{ paciente.nombre }}
                            </span>
                        </td>
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                <!-- Formulario para actualizar -->
                                <input v-model="edadActualizar" type="text" class="form-control">
                            </span>
                            <span v-else>
                                <!-- Dato edad -->
                                {{ paciente.edad }}
                            </span>
                        </td>
                        <td>
                            <!-- Botón para guardar la información actualizada -->
                            <span v-if="formActualizar && idActualizar == index">
                                <button @click="guardarActualizacion(index)" class="btn btn-success">Guardar</button>
                            </span>
                            <span v-else>
                                <!-- Botón para mostrar el formulario de actualizar -->
                                <button @click="verFormActualizar(index)" class="btn btn-warning">Actualizar</button>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>

<script>
  export default {
    el: '#appPacientes',
                data: {
                    // Input nombre
                    nombre: '',
                    // Input edad
                    edad: '',
                    // Ver o no ver el formulario de actualizar
                    formActualizar: false,
                    // La posición de tu lista donde te gustaría actualizar 
                    idActualizar: -1,
                    // Input nombre dentro del formulario de actualizar
                    nombreActualizar: '',
                    // Input edad dentro del formulario de actualizar
                    edadActualizar: '',
                    // Lista de pacientes
                    pacientes: [] 
                },
                methods: {
                    verFormActualizar: function (paciente_id) {
                        // Antes de mostrar el formulario de actualizar, rellenamos sus campos
                        this.idActualizar = paciente_id;
                        this.nombreActualizar = this.pacientes[paciente_id].nombre;
                        this.edadActualizar = this.pacientes[paciente_id].edad;
                        // Mostramos el formulario
                        this.formActualizar = true;
                    },
                    guardarActualizacion: function (paciente_id) {
                        // Ocultamos nuestro formulario de actualizar
                        this.formActualizar = false;
                        // Actualizamos los datos
                        this.pacientes[paciente_id].nombre = this.nombreActualizar;
                        this.pacientes[paciente_id].edad = this.edadActualizar;
                    }
                }
  }
</script>
<style>
@import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css');
</style>

