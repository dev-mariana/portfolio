<!-- components/ContactSection.vue -->
<template>
  <section id="contact" class="contact-section">
    <h2>Get In Touch</h2>
    <div class="contact-container">
      <div class="contact-info">
        <Card>
          <template #content>
            <h3>Contact Information</h3>
            <div class="info-item">
              <i class="pi pi-envelope"></i>
              <span>example@example.com</span>
            </div>
            <div class="info-item">
              <i class="pi pi-phone"></i>
              <span>+1 (555) 123-4567</span>
            </div>
            <div class="info-item">
              <i class="pi pi-map-marker"></i>
              <span>San Francisco, CA</span>
            </div>
            <h3>Connect With Me</h3>
            <div class="social-links">
              <a href="#" class="social-link"><i class="pi pi-facebook"></i></a>
              <a href="#" class="social-link"><i class="pi pi-twitter"></i></a>
              <a href="#" class="social-link"><i class="pi pi-linkedin"></i></a>
              <a href="#" class="social-link"
                ><i class="pi pi-instagram"></i
              ></a>
            </div>
          </template>
        </Card>
      </div>
      <div class="contact-form">
        <Card>
          <template #content>
            <h3>Send Me a Message</h3>
            <form @submit.prevent="submitForm">
              <span class="p-float-label mb-4">
                <InputText
                  id="name"
                  v-model="form.name"
                  :class="{ 'p-invalid': errors.name }"
                  class="w-full"
                />
                <label for="name">Your Name</label>
              </span>
              <small v-if="errors.name" class="error-text">{{
                errors.name
              }}</small>

              <span class="p-float-label mb-4">
                <InputText
                  id="email"
                  v-model="form.email"
                  :class="{ 'p-invalid': errors.email }"
                  class="w-full"
                />
                <label for="email">Email Address</label>
              </span>
              <small v-if="errors.email" class="error-text">{{
                errors.email
              }}</small>

              <span class="p-float-label mb-4">
                <InputText
                  id="subject"
                  v-model="form.subject"
                  :class="{ 'p-invalid': errors.subject }"
                  class="w-full"
                />
                <label for="subject">Subject</label>
              </span>
              <small v-if="errors.subject" class="error-text">{{
                errors.subject
              }}</small>

              <span class="p-float-label mb-4">
                <Textarea
                  id="message"
                  v-model="form.message"
                  :class="{ 'p-invalid': errors.message }"
                  rows="5"
                  class="w-full"
                />
                <label for="message">Your Message</label>
              </span>
              <small v-if="errors.message" class="error-text">{{
                errors.message
              }}</small>

              <Button
                type="submit"
                label="Send Message"
                class="p-button-success w-full"
              />
            </form>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import { reactive } from "vue";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const form = reactive<FormData>({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const errors = reactive<FormErrors>({});

const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validateForm = (): boolean => {
  let isValid = true;

  // Reset errors
  errors.name = undefined;
  errors.email = undefined;
  errors.subject = undefined;
  errors.message = undefined;

  if (!form.name.trim()) {
    errors.name = "Name is required";
    isValid = false;
  }

  if (!form.email.trim()) {
    errors.email = "Email is required";
    isValid = false;
  } else if (!validateEmail(form.email)) {
    errors.email = "Please enter a valid email";
    isValid = false;
  }

  if (!form.subject.trim()) {
    errors.subject = "Subject is required";
    isValid = false;
  }

  if (!form.message.trim()) {
    errors.message = "Message is required";
    isValid = false;
  }

  return isValid;
};

const submitForm = () => {
  if (validateForm()) {
    // Here you would typically send the form data to a server
    console.log("Form submitted:", form);

    // Reset form
    form.name = "";
    form.email = "";
    form.subject = "";
    form.message = "";
  }
};
</script>

<style scoped>
.contact-section {
  padding: 5rem 2rem;
  background-color: #0f0f0f;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #4ade80;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

:deep(.p-card) {
  background-color: #1e1e1e !important;
  color: #ffffff !important;
  border: none !important;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #ffffff;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.info-item i {
  font-size: 1.25rem;
  color: #4ade80;
  margin-right: 1rem;
  width: 24px;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #2a2a2a;
  border-radius: 50%;
  color: #ffffff;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: #4ade80;
  color: #121212;
}

.error-text {
  color: #ff6b6b;
  display: block;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
}

.mb-4 {
  margin-bottom: 1.5rem;
  display: block;
}

.w-full {
  width: 100%;
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
}
</style>
