# Dev Portfolio

A modern, responsive developer portfolio built with **Vue 3**, **TypeScript**, **Vite**, and **PrimeVue**.  
Showcase your skills, projects, and contact information with a beautiful UI and multi-language support (English & Brazilian Portuguese).

---

## Demo

![](https://github.com/dev-mariana/portfolio/src/assets/screenshot.png)

---

## Features

- **Vue 3 + TypeScript + Vite**: Modern, type-safe codebase.
- **PrimeVue UI**: Stylish, accessible components and icons.
- **Responsive Design**: Looks great on all devices.
- **Multi-language**: English and Brazilian Portuguese (i18n with vue-i18n).
- **Contact Form**: EmailJS integration for direct contact.
- **Sectioned Layout**: Hero, About, Projects, Skills, and Contact sections.
- **Easy Customization**: Update your info, projects, and styles easily.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
git clone https://github.com/your-username/your-repo.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## Configuration

### Environment Variables

To enable the contact form, create a `.env` file in the root with your [EmailJS](https://www.emailjs.com/) credentials:

```
VITE_API_KEY=your_emailjs_public_key
VITE_SERVICE_ID=your_emailjs_service_id
VITE_TEMPLATE_ID=your_emailjs_template_id
```

### Localization

- Edit `src/locales/en.json` and `src/locales/pt-br.json` to update or add translations.
- The app auto-detects the browser language and falls back to English.

---

## Project Structure

```
src/
  components/        # Vue components for each section
  locales/           # i18n translation files
  assets/            # Images, icons, etc.
  App.vue            # Main app layout
  main.ts            # App entry point
```

---

## Customization

- **Sections**: Edit or add content in `src/components/`.
- **Projects**: Update your projects in `ProjectsSection.vue`.
- **Skills**: Update your skills in `SkillsSection.vue`.
- **Contact Info**: Update your info and social links in `ContactSection.vue`.
- **Styling**: Customize styles in component `<style>` blocks or `src/style.css`.

---

## Dependencies

- [Vue 3](https://vuejs.org/)
- [PrimeVue](https://primevue.org/)
- [PrimeIcons](https://primefaces.org/primevue/showcase/#/icons)
- [vue-i18n](https://vue-i18n.intlify.dev/)
- [EmailJS](https://www.emailjs.com/)

---

## License

MIT

---

## Credits

Created by [Mariana Bastos](https://github.com/dev-mariana).
