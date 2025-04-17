<!-- components/Navbar.vue -->
<template>
  <header class="navbar">
    <div class="logo">
      <a href="#">Dev<span>Portfolio</span></a>
    </div>
    <nav>
      <ul>
        <li v-for="item in navItems" :key="item.href">
          <a :href="item.href">{{ item.name }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const navItems = ref([
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]);
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #121212;
}

.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

.logo span {
  color: #4ade80;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 2rem;
}

nav a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

nav a:hover {
  color: #4ade80;
}
</style>
