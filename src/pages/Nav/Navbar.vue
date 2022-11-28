<script setup lang="ts">
import routerPath from '../../router/path'
const navItems = [
  { name: 'Post', link: routerPath.post },
  { name: 'Projects', link: routerPath.projects },
]
</script>

<template>
  <header>
    <div class="logo">Lyx</div>
    <div class="nav-list">
      <div class="nav-list__item" v-for="item in navItems">
        <router-link :to="item.link">{{ item.name }}</router-link>
      </div>
    </div>
  </header>
</template>

<style scoped lang="less">
header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 43px 47px 76px 47px;
}

.logo {
  font-family: 'Inter';
  font-style: italic;
  font-weight: 600;
  font-size: 26px;
  color: #000000;

}

.nav-list {
  display: flex;
  align-items: center;

  &__item {
    font-family: 'Inter';
    font-weight: 600;
    font-size: 16px;
    color: #000000;
    margin-right: 29px;
  }
}
</style>