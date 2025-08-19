<template>
  <section id="projects" class="projects-section">
    <h2>{{ $t("projects.title") }}</h2>
    <div class="projects-grid">
      <Card v-for="project in projects" :key="project.id" class="project-card">
        <template #header>
          <img :src="project.image" :alt="project.key" class="project-img" />
        </template>
        <template #title>
          <div class="project-title">
            {{ $t("projects.list." + project.key + ".title") }}
          </div>
        </template>
        <template #content>
          <p class="project-desc">
            {{ $t("projects.list." + project.key + ".description") }}
          </p>
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
              :label="$t('projects.details')"
              icon="pi pi-github"
              class="p-button-sm p-button-success"
              @click="openLink(project.repoUrl)"
            />
          </div>
        </template>
      </Card>
    </div>
    <div class="view-all">
      <Button
        :label="$t('projects.viewAll')"
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

const openLink = (url: string) => {
  window.open(url, "_blank");
};

interface Project {
  id: number;
  key: string;
  image: string;
  technologies: string[];
  repoUrl: string;
}

const projects = ref<Project[]>([
  {
    id: 1,
    key: "konsi",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*5tJzgSzvi7xff-gmFGoxJw.png",
    technologies: [
      "Node.js",
      "TypeScript",
      "Fastify",
      "Redis",
      "Elasticsearch",
      "Docker",
    ],
    repoUrl: "https://github.com/dev-mariana/konsi",
  },
  {
    id: 2,
    key: "primo",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAlm-KNR2iFOFp6Jnvh7pWqVIBroMLSGmvYQ&s",
    technologies: [
      "Node.js",
      "TypeScript",
      "Fastify",
      "Prisma",
      "PostgreSQL",
      "Docker",
    ],
    repoUrl: "https://github.com/dev-mariana/grupo-primo",
  },
  {
    id: 3,
    key: "coopersystem",
    image:
      "https://www.aceinfoway.com/blog/wp-content/uploads/2020/05/Latest-Features-in-Angular-10.jpg",
    technologies: [
      "Angular 10",
      "TypeScript",
      "HTML5",
      "SCSS",
      "Angular Material",
    ],
    repoUrl: "https://github.com/dev-mariana/desafio-coopersystem",
  },
  {
    id: 4,
    key: "task-tracker",
    image: "https://doc.vaden.dev/img/vaden-social-card.jpg",
    technologies: ["Dart", "Vaden Framework", "Dio", "UUID", "Collection"],
    repoUrl: "https://github.com/dev-mariana/task_tracker",
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
  font-size: 1.2rem;
  color: #ffffff;
  text-align: center;
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
  justify-content: center;
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
