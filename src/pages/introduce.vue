<script setup lang="ts">

</script>

<template>
  <div class='relative h-screen w-screen'>
    <div class="relative left-2/4 top-2/4 -translate-2/4 w-full flex justify-center gap-x-30">
      <div>
        <h1 class="text">Hello,</h1>
        <h1 class="text">I'm Lyx.</h1>
      </div>
      <div class="flex flex-col justify-center">
        <p class="moto">DO WHAT YOU LOVE</p>
        <p class="moto">LOVE WHAT YOU DO</p>
      </div>
    </div>
    <div class=" border-box absolute w-25 h-25 bottom-3 left-2/4 -translate-x-2/4">DOWN</div>
  </div>
</template>

<style scoped lang="less">
.text {
  font-family: 'Caveat', cursive;
  /* font-family: 'Inspiration', cursive; */
  /* font-family: 'Space Mono', monospace; */
  font-size: 150px;

}

.moto {
  display: block;
  font-size: 36px;
  font-family: 'Space Mono', monospace;

  &:nth-child(2) {
    text-indent: 2em;
  }
}
</style>