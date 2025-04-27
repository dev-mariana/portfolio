<template>
  <section id="skills" class="skills-section">
    <h2>{{ $t("skills.title") }}</h2>
    <div class="skills-grid">
      <div v-for="(skill, index) in skills" :key="index" class="skill-card">
        <div class="skill-icon">
          <i :class="skill.icon"></i>
        </div>
        <h3>{{ $t("skills.list." + skill.key) }}</h3>
        <ul>
          <li v-for="(item, i) in skill.items" :key="i">
            <i class="pi pi-check"></i> {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Skill {
  key: string;
  icon: string;
  items: string[];
}

const skills = ref<Skill[]>([
  {
    key: "backend",
    icon: "pi pi-server",
    items: [
      "Node.js",
      "Nest.js / Fastify / Express",
      "PostgreSQL / MySQL / Redis",
      "RESTful APIs",
      "GraphQL",
      "Java / Spring Boot",
      "Golang",
    ],
  },
  {
    key: "frontend",
    icon: "pi pi-desktop",
    items: [
      "HTML / CSS / SCSS",
      "JavaScript / TypeScript",
      "Angular",
      "Vue.js / Nuxt.js",
      "Responsive Design",
    ],
  },
  {
    key: "tools",
    icon: "pi pi-cog",
    items: [
      "Git / GitHub",
      "GitLab / Bitbucket",
      "Jest / Vitest",
      "Mocha / Chai",
      "CI/CD Pipelines",
      "Docker",
      "AWS / Azure",
    ],
  },
  {
    key: "mobile",
    icon: "pi pi-mobile",
    items: ["Ionic", "Java / Kotlin (Android)", "Responsive Layouts"],
  },
  {
    key: "pm",
    icon: "pi pi-chart-bar",
    items: ["Scrum", "Kanban", "Jira", "Trello", "ClickUp"],
  },
]);
</script>

<style scoped>
.skills-section {
  padding: 5rem 2rem;
  background-color: #121212;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #4ade80;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.skill-card {
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
}

.skill-icon {
  width: 50px;
  height: 50px;
  background-color: #2a2a2a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.skill-icon i {
  font-size: 1.5rem;
  color: #4ade80;
}

h3 {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: #ffffff;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  color: #cccccc;
}

li i {
  color: #4ade80;
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
