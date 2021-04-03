<template>
  <div class="container">
    <div class="row">
      <div class="col-12" v-if="!isLoading">
        <h1>Просмотр расчета {{entry.id}}</h1>
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th class="text-center">#</th>
              <th v-for="(e, index) in entry.matrix" v-bind:key="index" class="text-center">
                {{ index + 1}}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(e, index) in entry.matrix">
              <td class="text-center">{{ index + 1}}</td>
              <td class="text-center" v-for="(m,i) in e" v-bind:key="i">
                {{e[i]}}
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CalcView",
  data() {
    return {
      isLoading: true,
      entry: null
    }
  },
  mounted() {
    this.loadEntry(this.$route.params['id']);
  },
  methods: {
    loadEntry(id) {
      axios.get('/api/view/' + id).then(result => {
        this.entry = result.data.data;
        this.isLoading = false;
      })
    }
  }
}
</script>

<style scoped>

</style>
