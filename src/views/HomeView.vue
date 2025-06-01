<script lang="ts" setup>
import Carousel from "@/components/Carousel.vue";
import ProjectCard from "@/components/ProjectCard.vue";

import data from "@/assets/data/projects.json";

data.buildings.map((e) => {
  console.log(e);
});
</script>

<template>
  <div class="hero">
    <Carousel />
  </div>
  <div class="projects py-10">
    <div class="site-container">
      <h1 class="text-4xl font-bold mb-6">Bizning loyihalarimiz</h1>
      <div class="grid grid-cols-3 gap-3">
        <ProjectCard
          v-for="building in data.buildings"
          :key="building.id"
          :building="building"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
