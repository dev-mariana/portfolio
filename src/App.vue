<template>
  <div class="app-container">
    <NavBar />
    <main v-if="!showMoreProjects">
      <HeroSection />
      <AboutSection />
      <ProjectsSection @view-more-projects="showMoreProjects = true" />
      <SkillsSection />
      <ContactSection />
    </main>
    <MoreProjectsPage v-else @back="showMoreProjects = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AboutSection from "./components/AboutSection.vue";
import ContactSection from "./components/ContactSection.vue";
import HeroSection from "./components/HeroSection.vue";
import MoreProjectsPage from "./components/MoreProjectsPage.vue";
import NavBar from "./components/NavBar.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import SkillsSection from "./components/SkillsSection.vue";

const showMoreProjects = ref(false);
</script>

<style>
.app-container {
  background-color: #121212;
  color: #ffffff;
  min-height: 100vh;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>
