<script setup lang="ts">
const posts = [
  { title: 'hahahha' },
  { title: 'hahahha' },
  { title: 'hahahha' },
  { title: 'hahahha' },
  { title: 'hahahha' },
  { title: 'hahahha' },
  { title: 'hahahha' },
  { title: 'hahahha' },
]
</script>

<template>
  <div v-for="post in posts">
    <div>{{ post.title }}</div>
  </div>
</template>

<style scoped>

</style>