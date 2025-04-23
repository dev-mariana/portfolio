<template>
  <section id="about" class="about-section">
    <h2>About Me</h2>
    <Card class="about-card">
      <template #content>
        <div class="about-content">
          <div class="profile-image">
            <img src="../assets/profile.jpeg" alt="Profile photo" />
          </div>
          <div class="about-info">
            <p class="about-intro">
              I'm a software developer with over 6 years of experience,
              currently focused on backend development. I specialize in building
              reliable and scalable APIs with Node.js, TypeScript, and NestJS.
              My background in frontend helps me understand full-stack needs and
              collaborate efficiently with product teams.
            </p>
            <ul class="skill-list">
              <li><i class="pi pi-check"></i> JavaScript/TypeScript</li>
              <li><i class="pi pi-check"></i> Node.js</li>
              <li><i class="pi pi-check"></i> Angular</li>
              <li><i class="pi pi-check"></i> Vue.js</li>
            </ul>
            <Button
              label="Resume"
              icon="pi pi-file"
              class="p-button-success"
              @click="downloadCV"
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
import resume from "../assets/resume.pdf";

const downloadCV = () => {
  window.open(resume, "_blank");
};
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
