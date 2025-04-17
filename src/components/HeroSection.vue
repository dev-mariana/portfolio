<!-- components/HeroSection.vue -->
<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1>Hello, I'm <span class="highlight">Mariana</span>.</h1>
      <p class="subtitle">Full Stack Developer & UI Enthusiast</p>
      <p class="description">
        Crafting elegant solutions to complex problems with clean code and
        thoughtful design.
      </p>
      <div class="cta-buttons">
        <Button label="View My Work" class="p-button-success" />
        <Button
          label="Contact Me"
          class="p-button-outlined p-button-success ml-2"
        />
      </div>
      <div class="scroll-indicator">
        <i class="pi pi-chevron-down"></i>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "primevue/button";
</script>

<style scoped>
.hero-section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 1rem;
}

.hero-content {
  max-width: 800px;
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
}

.highlight {
  color: #4ade80;
}

.subtitle {
  font-size: 1.5rem;
  color: #cccccc;
  margin-bottom: 1.5rem;
}

.description {
  font-size: 1.1rem;
  color: #a0a0a0;
  margin-bottom: 2rem;
}

.cta-buttons {
  margin-bottom: 4rem;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  animation: bounce 2s infinite;
}

.scroll-indicator i {
  font-size: 1.5rem;
  color: #4ade80;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}
</style>
