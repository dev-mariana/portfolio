<template>
  <div class="more-projects-page">
    <div class="page-header">
      <h1>{{ $t("moreProjects.title") }}</h1>
      <p class="page-subtitle">{{ $t("moreProjects.subtitle") }}</p>
    </div>

    <div class="filters-section">
      <div class="search-container">
        <InputText
          v-model="searchQuery"
          :placeholder="$t('moreProjects.searchPlaceholder')"
          class="search-input"
        />
        <i class="pi pi-search search-icon"></i>
      </div>

      <div class="filter-tabs">
        <Button
          v-for="category in categories"
          :key="category"
          :label="$t('moreProjects.categories.' + category)"
          :class="['filter-tab', { active: selectedCategory === category }]"
          @click="selectedCategory = category"
        />
      </div>
    </div>

    <div class="projects-container">
      <div v-if="filteredProjects.length === 0" class="no-results">
        <i
          class="pi pi-search"
          style="font-size: 3rem; color: #666; margin-bottom: 1rem"
        ></i>
        <h3>{{ $t("moreProjects.noResults") }}</h3>
        <p>{{ $t("moreProjects.noResultsDesc") }}</p>
      </div>

      <div v-else class="projects-grid">
        <Card
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card"
        >
          <template #header>
            <div class="project-image-container">
              <img
                :src="project.image"
                :alt="project.key"
                class="project-img"
              />
              <div class="project-overlay">
                <Button
                  :label="$t('moreProjects.viewProject')"
                  icon="pi pi-external-link"
                  class="p-button-sm p-button-success"
                  @click="openLink(project.repoUrl)"
                />
              </div>
            </div>
          </template>
          <template #title>
            <div class="project-title">
              {{ $t("moreProjects.list." + project.key + ".title") }}
            </div>
          </template>
          <template #content>
            <p class="project-desc">
              {{ $t("moreProjects.list." + project.key + ".description") }}
            </p>
            <div class="tech-tags">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="tech-tag"
                >{{ tech }}</span
              >
            </div>
            <div class="project-meta">
              <div class="project-category">
                <i class="pi pi-tag"></i>
                <span>{{
                  $t("moreProjects.categories." + project.category)
                }}</span>
              </div>
              <div class="project-year">
                <i class="pi pi-calendar"></i>
                <span>{{ project.year }}</span>
              </div>
            </div>
            <div class="project-links">
              <Button
                :label="$t('moreProjects.viewCode')"
                icon="pi pi-github"
                class="p-button-sm p-button-outlined"
                @click="openLink(project.repoUrl)"
              />
              <Button
                v-if="project.demoUrl"
                :label="$t('moreProjects.viewDemo')"
                icon="pi pi-play"
                class="p-button-sm p-button-success"
                @click="openLink(project.demoUrl)"
              />
            </div>
          </template>
        </Card>
      </div>
    </div>

    <div class="back-section">
      <Button
        :label="$t('moreProjects.backToHome')"
        icon="pi pi-arrow-left"
        iconPos="left"
        class="p-button-success"
        @click="goBack"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import { computed, ref } from "vue";

const emit = defineEmits<{
  back: [];
}>();

const searchQuery = ref("");
const selectedCategory = ref("all");

const categories = ["all", "backend", "frontend", "mobile", "fullstack"];

const openLink = (url: string) => {
  window.open(url, "_blank");
};

const goBack = () => {
  emit("back");
};

interface Project {
  id: number;
  key: string;
  image: string;
  technologies: string[];
  repoUrl: string;
  demoUrl?: string;
  category: string;
  year: string;
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
    category: "backend",
    year: "2024",
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
    category: "backend",
    year: "2024",
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
    category: "frontend",
    year: "2021",
  },
  {
    id: 4,
    key: "task-tracker",
    image: "https://doc.vaden.dev/img/vaden-social-card.jpg",
    technologies: ["Dart", "Vaden Framework", "Dio", "UUID", "Collection"],
    repoUrl: "https://github.com/dev-mariana/task_tracker",
    category: "backend",
    year: "2025",
  },
  {
    id: 5,
    key: "users-crud",
    image: "https://miro.medium.com/1*p-zoott5uZ8YR3ntSfz5vA.png",
    technologies: [
      "Node.js",
      "TypeScript",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Docker",
    ],
    repoUrl: "https://github.com/dev-mariana/users-crud",
    category: "backend",
    year: "2025",
  },
]);

const filteredProjects = computed(() => {
  let filtered = projects.value;

  if (selectedCategory.value !== "all") {
    filtered = filtered.filter(
      (project) => project.category === selectedCategory.value
    );
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter((project) => {
      const title = project.key.toLowerCase();
      const technologies = project.technologies.join(" ").toLowerCase();
      return title.includes(query) || technologies.includes(query);
    });
  }

  return filtered;
});
</script>

<style scoped>
.more-projects-page {
  min-height: 100vh;
  background-color: #0f0f0f;
  color: #ffffff;
  padding: 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 3rem;
  color: #4ade80;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #cccccc;
  max-width: 600px;
  margin: 0 auto;
}

.filters-section {
  max-width: 1200px;
  margin: 0 auto 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.search-container {
  position: relative;
  max-width: 400px;
  margin: 0 auto;
}

.search-input {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background-color: #1e1e1e;
  border: 2px solid #333;
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
}

.search-input:focus {
  border-color: #4ade80;
  outline: none;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
}

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.filter-tab {
  background-color: #1e1e1e !important;
  border: 2px solid #333 !important;
  color: #cccccc !important;
  transition: all 0.3s ease;
}

.filter-tab:hover {
  border-color: #4ade80 !important;
  color: #4ade80 !important;
}

.filter-tab.active {
  background-color: #4ade80 !important;
  border-color: #4ade80 !important;
  color: #000000 !important;
}

.projects-container {
  max-width: 1200px;
  margin: 0 auto;
}

.no-results {
  text-align: center;
  padding: 4rem 2rem;
  color: #666;
}

.no-results h3 {
  color: #cccccc;
  margin-bottom: 1rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: #1e1e1e !important;
  border: none !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(74, 222, 128, 0.2);
}

.project-image-container {
  position: relative;
  overflow: hidden;
}

.project-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-image-container:hover .project-overlay {
  opacity: 1;
}

.project-image-container:hover .project-img {
  transform: scale(1.1);
}

.project-title {
  font-size: 1.3rem;
  color: #ffffff;
  text-align: center;
  margin-bottom: 1rem;
}

.project-desc {
  color: #cccccc;
  margin-bottom: 1.5rem;
  line-height: 1.6;
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

.project-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: #999;
}

.project-category,
.project-year {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.project-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.back-section {
  text-align: center;
  margin-top: 4rem;
}

@media (max-width: 768px) {
  .more-projects-page {
    padding: 1rem;
  }

  .page-header h1 {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .filter-tabs {
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }

  .project-links {
    flex-direction: column;
  }
}
</style>
