<template>
  <div class="app-container">
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  </div>
</template>

<script setup lang="ts">
import AboutSection from "./components/AboutSection.vue";
import ContactSection from "./components/ContactSection.vue";
import HeroSection from "./components/HeroSection.vue";
import NavBar from "./components/NavBar.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
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
