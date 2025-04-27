<template>
  <header class="navbar">
    <div class="logo">
      <a href="#">Dev<span>Portfolio</span></a>
    </div>
    <button
      class="hamburger"
      @click="toggleMenu"
      :aria-expanded="isMenuOpen"
      aria-label="Toggle navigation"
    >
      <template v-if="!isMenuOpen">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </template>
      <template v-else>
        <span class="close-x">&times;</span>
      </template>
    </button>
    <transition name="menu-slide">
      <nav
        v-if="isMenuOpen || !isMobile"
        :class="{ open: isMenuOpen, mobile: isMobile }"
        ref="menuRef"
      >
        <ul>
          <li v-for="item in navItems" :key="item.key">
            <a :href="item.href" @click="closeMenu">{{
              $t("navbar." + item.key)
            }}</a>
          </li>
        </ul>
      </nav>
    </transition>
    <transition name="fade">
      <div
        v-if="isMenuOpen && isMobile"
        class="menu-backdrop"
        @click="closeMenu"
      ></div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const navItems = [
  { key: "about", href: "#about" },
  { key: "projects", href: "#projects" },
  { key: "skills", href: "#skills" },
  { key: "contact", href: "#contact" },
];

const isMenuOpen = ref(false);
const isMobile = ref(false);
const menuRef = ref<HTMLElement | null>(null);

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 900;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;

  if (isMenuOpen.value) {
    setTimeout(() => {
      menuRef.value?.focus();
    }, 100);
  }
};

const handleKeydown = (e: KeyboardEvent) => {
  if (isMenuOpen.value && e.key === "Escape") {
    closeMenu();
  }
};

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
  window.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkMobile);
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #121212;
  position: relative;
  z-index: 30;
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

nav {
  outline: none;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin: 0;
}

nav a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s, background 0.3s;
  padding: 0.4em 0.9em;
  border-radius: 6px;
  display: block;
}

nav a:hover {
  background: #4ade80;
  color: #121212;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 40;
}

.hamburger .bar {
  display: block;
  width: 26px;
  height: 3px;
  margin: 4px 0;
  background: #fff;
  border-radius: 2px;
  transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.hamburger .close-x {
  font-size: 1.8rem;
  color: #fff;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 35;
}

.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s;
}

.menu-slide-enter-from,
.menu-slide-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}

.menu-slide-enter-to,
.menu-slide-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

@media (max-width: 900px) {
  .hamburger {
    display: flex;
    width: 40px;
    height: 40px;
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #121212;
    width: 100vw;
    border-radius: 0 0 12px 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    z-index: 38;
    padding-top: 4.5rem;
    padding-bottom: 2rem;
    opacity: 1;
    pointer-events: auto;
  }

  nav ul {
    flex-direction: column;
    gap: 1.2rem;
    padding: 0 1.5rem;
    font-size: 1.1rem;
  }

  nav ul li a {
    padding: 1rem 0.5rem;
    text-align: center;
    font-size: 1.1rem;
  }
}
</style>
