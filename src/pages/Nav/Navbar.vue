<script setup lang="ts">
import routerPath from '../../router/path'
const navItems = [
  { name: 'Post', link: routerPath.post },
  { name: 'Projects', link: routerPath.projects },
]
</script>

<template>
  <div class="nav-list">
    <div class="nav-list__item" v-for="item in navItems">
      <router-link :to="item.link">{{ item.name }}</router-link>
    </div>
  </div>
</template>

<style scoped lang="less">
.nav-list {
  display: flex;
  align-items: center;
  margin: 3em 0;

  width: 100%;
  height: 2em;
  line-height: 2em;

  font-size: 2rem;
  font-family: 'Space Mono', monospace;

  &__item {
    font-weight: 600;
    font-size: 16px;
    color: #000000;
    margin-right: 29px;
  }
}
</style>