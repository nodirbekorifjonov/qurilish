<script lang="ts" setup></script>

<template>
  <a-carousel autoplay>
    <div></div>
    <div></div>
    <div></div>
  </a-carousel>
</template>

<style scoped>
:deep(.slick-slide) {
  text-align: center;
  height: 650px;
  line-height: 500px;
  overflow: hidden;

  background-image: url(../assets/first.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
:deep(.slick-slide h3) {
  color: #000;
}
</style>
