<template>
  <div class="nav">
    <router-link v-for="nav in navs" :key="nav.link" :to="nav.link">{{ nav.name }}</router-link>
  </div>

  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const navs = reactive([
  {
    name: "Apps",
    link: "/",
  },
  {
    name: "图片编辑器",
    link: "/image-editor",
  },
  {
    name: "Markdown编辑器",
    link: "/markdown-editor",
  },
  {
    name: "贡献度",
    link: "/contribution",
  }
])
</script>

<style lang="less" scoped>
.nav {
  padding: 10px 12px;
  box-shadow: 0 5px 15px #eee;

  a {
    color: #000;
    margin-right: 16px;

    &.router-link-active {
      position: relative;
      color: #1677ff;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -8px;
        width: 100%;
        height: 3px;
        background-color: #1677ff;
      }
    }
  }
}
.container {
  padding: 20px 0 0;
}
</style>
