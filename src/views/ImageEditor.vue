<template>
  <ImageEditor :imageInfo="{
    url: imgUrl,
    width: 88,
    height: 88,
  }" :aspectRatio="1" @use="url => imgUrl = url"></ImageEditor>
</template>

<script setup>
import { ref } from 'vue'
import ImageEditor from "@/components/ImageEditor.vue";

const imgUrl = ref("")
</script>

<style></style>