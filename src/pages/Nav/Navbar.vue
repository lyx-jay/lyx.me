<script setup lang="ts">
import routerPath from '../../router/path'
const navItems = [
  { name: 'Projects', link: routerPath.projects },
  { name: 'Post', link: routerPath.post },
  { name: '掘金', link: routerPath.juejin },
  { name: 'Github', link: routerPath.github },
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

  width: 100%;
  height: 3em;
  line-height: 3em;

  font-size: 2rem;
  font-family: 'Space Mono', monospace;

  &__item {
    font-weight: 600;
    font-size: 18px;
    color: #000000;
    margin-right: 29px;
  }
}
</style>