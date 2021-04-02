<template>
  <div class="container">
    <div class="row">
      <div class="col-12" v-if="!isLoading">
        <h1>Просмотр расчета </h1>


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
      isLoading: false,
      entry: null
    }
  },
  mounted() {
    this.loadEntry(this.$route.params['id']);
  },
  methods: {
    loadEntry(id) {
      axios.get('/api/view/' + id).then(result => {
        console.log(result.data.data);
        this.entry = result.data.data;
        this.isLoading = false;
      })
    }
  }
}
</script>

<style scoped>

</style>
