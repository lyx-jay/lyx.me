<script setup lang="ts">
const navItems = [
  { name: 'Post', link: '/' },
  { name: 'Projects', link: '/' },
]
</script>

<template>
  <header>
    <div class="logo">Lyx</div>
    <div class="nav-list">
      <div class="nav-list__item" v-for="item in navItems">
        {{ item.name }}
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
  // position: absolute;
  // width: 43px;
  // height: 31px;
  font-family: 'Inter';
  font-style: italic;
  font-weight: 600;
  font-size: 26px;
  // line-height: 31px;

  color: #000000;

}

.nav-list {
  display: flex;
  align-items: center;

  &__item {

    font-family: 'Inter';
    // font-style: italic;
    font-weight: 600;
    font-size: 16px;
    color: #000000;
    margin-right: 29px;

  }
}
</style>