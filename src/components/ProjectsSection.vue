<!-- components/ProjectsSection.vue -->
<template>
  <section id="projects" class="projects-section">
    <h2>Featured Projects</h2>
    <div class="projects-grid">
      <Card v-for="project in projects" :key="project.id" class="project-card">
        <template #header>
          <img :src="project.image" :alt="project.title" class="project-img" />
        </template>
        <template #title>
          <div class="project-title">{{ project.title }}</div>
        </template>
        <template #content>
          <p class="project-desc">{{ project.description }}</p>
          <div class="tech-tags">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="tech-tag"
              >{{ tech }}</span
            >
          </div>
          <div class="project-links">
            <Button
              label="View Details"
              icon="pi pi-external-link"
              class="p-button-sm p-button-success"
            />
            <Button
              label="Source Code"
              icon="pi pi-github"
              class="p-button-sm p-button-outlined p-button-success ml-2"
            />
          </div>
        </template>
      </Card>
    </div>
    <div class="view-all">
      <Button
        label="View All Projects"
        icon="pi pi-arrow-right"
        iconPos="right"
        class="p-button-success"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import Card from "primevue/card";
import { ref } from "vue";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

const projects = ref<Project[]>([
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Complete e-commerce solution with product management, user authentication, and payment processing.",
    image:
      "https://placehold.co/600x400/1e1e1e/4ade80?text=E-commerce+Platform",
    technologies: ["Vue.js", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Real-time Chat App",
    description:
      "Instant messaging application with real-time updates, user presence, and channel management.",
    image: "https://placehold.co/600x400/1e1e1e/4ade80?text=Chat+App",
    technologies: ["Vue.js", "Socket.io", "Express"],
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description:
      "Interactive data visualization dashboard with customizable widgets and real-time analytics.",
    image:
      "https://placehold.co/600x400/1e1e1e/4ade80?text=Analytics+Dashboard",
    technologies: ["Vue.js", "D3.js", "Firebase"],
  },
]);
</script>

<style scoped>
.projects-section {
  padding: 5rem 2rem;
  background-color: #0f0f0f;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #4ade80;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  background-color: #1e1e1e !important;
  border: none !important;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
}

.project-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-title {
  font-size: 1.5rem;
  color: #ffffff;
}

.project-desc {
  color: #cccccc;
  margin-bottom: 1.5rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background-color: #2a2a2a;
  color: #4ade80;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.project-links {
  display: flex;
  margin-top: 1rem;
}

.view-all {
  margin-top: 3rem;
  text-align: center;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
