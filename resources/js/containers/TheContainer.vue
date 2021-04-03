<template>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" to="/calcs">Мои расчеты</router-link>
            <router-link class="nav-item nav-link" to="/create">Добавить расчет</router-link>
          </div>
        </div>
      </nav>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
name: "TheContainer"
}
</script>

<style scoped>

</style>
