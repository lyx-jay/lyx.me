<script setup lang="ts">
import Navbar from './Nav/Navbar.vue';

</script>

<template>
  <div class="home">
    <div class="intro">
      <div class="intro_left">
        <h1 class="intro_text">Hello,</h1>
        <h1 class="intro_text">I'm Lyx.</h1>
      </div>
      <div class="intro_right">
        <p class="intro_text moto">DO WHAT YOU LOVE</p>
        <P class="intro_text moto">LOVE WHAT YOU DO</P>
      </div>
    </div>
    <Navbar />
  </div>
</template>

<style scoped lang="less">
.home {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  width: 100%;
  height: 60%;
  padding: 0 18%;
}

.intro {
  display: flex;

  &_left {}

  &_right {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: nowrap;
  }

  &_text {
    font-family: 'Caveat', cursive;
    // font-family: 'Inspiration', cursive;
    // font-family: 'Space Mono', monospace;
    font-size: 150px;

  }

  &_text.moto {
    font-size: 36px;
    font-family: 'Space Mono', monospace;
  }

}

.intro-text {
  font-family: 'Caveat', cursive;
  // font-family: 'Inspiration', cursive;
  // font-family: 'Space Mono', monospace;
  font-size: 48px;
}
</style>