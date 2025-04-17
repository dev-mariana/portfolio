<!-- components/AboutSection.vue -->
<template>
  <section id="about" class="about-section">
    <h2>About Me</h2>
    <Card class="about-card">
      <template #content>
        <div class="about-content">
          <div class="profile-image">
            <img src="../assets/profile.jpg" alt="Profile photo" />
          </div>
          <div class="about-info">
            <p class="about-intro">
              I'm a passionate full-stack developer and specialist in creating
              responsive web applications. I've been trained in computer
              science, focusing on web technologies like JS, TS, and Vue.js.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source, or helping others learn to code.
            </p>
            <ul class="skill-list">
              <li><i class="pi pi-check"></i> JavaScript/TypeScript</li>
              <li><i class="pi pi-check"></i> React/Redux</li>
              <li><i class="pi pi-check"></i> Vue.js/Vuex</li>
              <li><i class="pi pi-check"></i> Node.js/Express</li>
              <li><i class="pi pi-check"></i> UI/UX Design</li>
            </ul>
            <Button
              label="View Full Resume"
              icon="pi pi-file"
              class="p-button-success"
            />
          </div>
        </div>
      </template>
    </Card>
  </section>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import Card from "primevue/card";
</script>

<style scoped>
.about-section {
  padding: 5rem 2rem;
  background-color: #121212;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #4ade80;
}

.about-card {
  max-width: 1000px;
  margin: 0 auto;
  background-color: #1e1e1e !important;
  border: none !important;
}

.about-content {
  display: flex;
  gap: 2rem;
}

.profile-image {
  flex: 0 0 40%;
}

.profile-image img {
  width: 100%;
  border-radius: 8px;
  opacity: 0.8;
  filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.5));
}

.about-info {
  flex: 1;
}

.about-intro {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.skill-list {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
}

.skill-list li {
  display: flex;
  align-items: center;
}

.skill-list i {
  color: #4ade80;
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
  }

  .skill-list {
    grid-template-columns: 1fr;
  }
}
</style>
