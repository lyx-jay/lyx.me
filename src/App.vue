<script setup lang="ts">
import Navbar from './pages/Nav/Navbar.vue'
</script>

<template>
  <Navbar />
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped lang="less">
main {
  width: fit-content;
  max-width: 800px;
  margin: 0 auto;
}
</style>
