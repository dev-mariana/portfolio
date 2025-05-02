<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1>{{ $t("hero.greeting", { name: "Mariana" }) }}</h1>
      <p class="subtitle">{{ $t("hero.subtitle") }}</p>
      <p class="description">{{ $t("hero.description") }}</p>
      <div class="cta-buttons">
        <Button
          :label="$t('hero.projects')"
          class="p-button-success view-work-btn"
          @click="navigateToProjects"
        />
        <Button
          :label="$t('hero.contact')"
          class="p-button-outlined contact-btn"
          @click="navigateToContact"
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

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const navigateToProjects = () => scrollToSection("projects");
const navigateToContact = () => scrollToSection("contact");
</script>

<style scoped>
.hero-section {
  height: 50vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  padding: 3rem 1rem 0;
  margin-bottom: 14rem;
}

.hero-content {
  max-width: 800px;
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
}

.highlight {
  color: var(--primary-color);
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
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.view-work-btn {
  min-width: 120px;
  background-color: var(--primary-color) !important;
  border: none !important;
  color: #000000 !important;
  font-weight: 500;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  font-size: 0.95rem;
}

.view-work-btn:hover {
  background-color: #22c55e !important;
}

.contact-btn {
  min-width: 120px;
  background-color: transparent !important;
  border: 1px solid var(--primary-color) !important;
  color: var(--primary-color) !important;
  font-weight: 500;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  font-size: 0.95rem;
}

.contact-btn:hover {
  background-color: rgba(74, 222, 128, 0.1) !important;
}

.scroll-indicator {
  position: absolute;
  top: 36rem;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

.scroll-indicator i {
  font-size: 1.5rem;
  color: var(--primary-color);
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

@media (max-width: 768px) {
  .hero-section {
    margin-bottom: 8rem;
  }

  .scroll-indicator {
    top: 44rem;
  }
}
</style>
