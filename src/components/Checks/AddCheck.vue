<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Codigo</th>
          <th>Producto</th>
          <th>observacion</th>
          <th>estado</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(product, index) in products"
          :key="product.id"
          class="status"
        >
          <td>{{ product.code }}</td>
          <td>{{ product.name }}</td>
          <td>
            <input
              v-model="observation"
              class="form-control"
            >
          </td>
          <td>
            <input
              v-model="state"
              type="checkbox"
              class="check"
            >
          </td>
          <td>
            <button
              class="btn btn-success"
              @click="sendCheck(index)"
            >
              Save
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('checks', ['products', 'checks', 'checkId'])
  },
  created () {
    this.getProducts(this.$route.params.id)
    this.getChecks(this.$route.params.id)
  },
  methods: {
    ...mapActions('checks', ['getProducts', 'getChecks', 'saveCheck']),
    sendCheck (index) {
      var detail = {
        check_id: this.checkId,
        state: this.state,
        observation: this.observation,
        product_id: this.products[index].id
      }

      this.saveCheck(detail)
    }
  }

}
</script>

<style>
.check {
  margin-left: 50%;
}
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");
</style>
