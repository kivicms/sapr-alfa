<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <table class="table table-bordered table-hover">
          <thead>
          <tr>
            <th>#</th>
            <th>Матрица</th>
            <th>Главная</th>
            <th>Побочная</th>
            <th>Операции</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item, index) in items" v-bind:key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.matrix }}</td>
            <td>{{ item.main_value }}</td>
            <td>{{ item.diagonal_value }}</td>
            <td>
              <router-link :to="'/calc/' + item.id">Детально</router-link>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "CalcIndex",
  data() {
    return {
      isLoading: true,
      items: []
    }
  },
  mounted() {
    this.loadItems();
  },
  methods: {
    loadItems() {
      axios.get('/api/calcs').then(result => {
        console.log(result.data);
        this.items = result.data;
        this.isLoading = false;
      })
    }
  }
}
</script>

<style scoped>

</style>
