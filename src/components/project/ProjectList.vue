<script setup lang="ts">
const projects = [
  { title: 'simple Cover', link: '/', desc: 'This is my own personal project, I hope I will be lie antfummmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm' },
  { title: 'simple Cover', link: '/#', desc: 'This is my own personal project, I hope I will be lie antfu' },
  { title: 'simple Cover', link: '/#', desc: 'This is my own personal project, I hope I will be lie antfu' },
  { title: 'simple Cover', link: '/', desc: 'This is my own personal project, I hope I will be lie antfu' },
  { title: 'simple Cover', link: '/', desc: 'This is my own personal project, I hope I will be lie antfu' },
  { title: 'simple Cover', link: '/', desc: 'This is my own personal project, I hope I will be lie antfu' },
  { title: 'simple Cover', link: '/', desc: 'This is my own personal project, I hope I will be lie antfu' },
  { title: 'simple Cover', link: '/', desc: 'This is my own personal project, I hope I will be lie antfu' },
  { title: 'simple Cover', link: '/', desc: 'This is my own personal project, I hope I will be lie antfu' },
  { title: 'simple Cover', link: '/', desc: 'This is my own personal project, I hope I will be lie antfu' },
]
</script>

<template>
  <div class="project-list">
    <div v-for="p in projects">
      <a :href="p.link">
        <div class="project-list__item">
          <div class="project-list__item__img"></div>
          <div class="project-list__item__info">
            <span class="project-list__item__info__title">{{ p.title }}</span>
            <span class="project-list__item__info__desc">{{ p.desc }}</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped lang="less">
.project-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;

  &__item {
    display: flex;
    align-items: center;
    width: 300px;
    height: 80px;
    border-radius: 5px;
    padding: 10px;

    &__img {
      width: 50px;
      height: 50px;
      border: 1px solid pink;
      margin-right: 13px;
    }

    &__info {
      flex: 1;
      display: flex;
      flex-direction: column;
      width: 0;
      height: 100%;

      &__title {
        height: 20px;
        line-height: 20px;
      }

      &__desc {
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }

  &__item:hover {
    background-color: lightgray;
    transition: backgroud-color ease 0.3s;
  }
}
</style>