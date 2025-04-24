<template>
  <section id="contact" class="contact-section">
    <h2>Get In Touch</h2>
    <div class="contact-container">
      <div class="contact-info">
        <Card>
          <template #content>
            <h3>Contact Information</h3>
            <div class="contact-details">
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="pi pi-envelope"></i>
                </div>
                <div class="contact-text">
                  <h4>Email</h4>
                  <a href="mailto:m.b.rodrigues1998@gmail.com"
                    >m.b.rodrigues1998@gmail.com</a
                  >
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="pi pi-map-marker"></i>
                </div>
                <div class="contact-text">
                  <h4>Location</h4>
                  <p>Brazil</p>
                </div>
              </div>
            </div>
            <div class="social-section">
              <h4>Connect with me</h4>
              <div class="social-links">
                <a
                  href="https://www.linkedin.com/in/dev-mariana/"
                  target="_blank"
                  class="social-link"
                  title="LinkedIn"
                >
                  <i class="pi pi-linkedin"></i>
                </a>
                <a
                  href="https://github.com/dev-mariana"
                  target="_blank"
                  class="social-link"
                  title="GitHub"
                >
                  <i class="pi pi-github"></i>
                </a>
              </div>
            </div>
          </template>
        </Card>
      </div>
      <div class="contact-form">
        <Card>
          <template #content>
            <h3 class="text-center">Send Me a Message</h3>
            <form @submit.prevent="submitForm">
              <div class="form-group mb-4">
                <label for="name">Name</label>
                <InputText
                  id="name"
                  v-model="form.name"
                  :class="{ 'p-invalid': errors.name }"
                  class="w-full"
                  placeholder="Your name"
                />
                <small v-if="errors.name" class="error-text">{{
                  errors.name
                }}</small>
              </div>

              <div class="form-group mb-4">
                <label for="email">Email</label>
                <InputText
                  id="email"
                  v-model="form.email"
                  :class="{ 'p-invalid': errors.email }"
                  class="w-full"
                  placeholder="your@email.com"
                />
                <small v-if="errors.email" class="error-text">{{
                  errors.email
                }}</small>
              </div>

              <div class="form-group mb-4">
                <label for="subject">Subject</label>
                <InputText
                  id="subject"
                  v-model="form.subject"
                  :class="{ 'p-invalid': errors.subject }"
                  class="w-full"
                  placeholder="Subject"
                />
                <small v-if="errors.subject" class="error-text">{{
                  errors.subject
                }}</small>
              </div>

              <div class="form-group mb-4">
                <label for="message">Message</label>
                <Textarea
                  id="message"
                  v-model="form.message"
                  :class="{ 'p-invalid': errors.message }"
                  rows="5"
                  class="w-full"
                  placeholder="Your message..."
                />
                <small v-if="errors.message" class="error-textarea">{{
                  errors.message
                }}</small>
              </div>

              <Button
                type="submit"
                label="Send Message"
                class="p-button-success w-full submit-button"
              />
            </form>
            <div class="toast-success">
              <Toast />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { init, send } from "@emailjs/browser";
import { useToast } from "primevue";
import Button from "primevue/button";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Toast from "primevue/toast";
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
const toast = useToast();

const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validateForm = (): boolean => {
  let isValid = true;

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

const submitForm = async () => {
  if (validateForm()) {
    await sendEmail(form);

    console.log("Form submitted:", form);

    form.name = "";
    form.email = "";
    form.subject = "";
    form.message = "";
  }
};

const sendEmail = async (form: FormData) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;

  init(apiKey);

  await send(serviceId, templateId, {
    name: form.name,
    email: form.email,
    subject: form.subject,
    message: form.message,
  })
    .then((response) => {
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Your message was sent!",
      });

      console.log("Email sent successfully:", response);
    })
    .catch((error) => {
      toast.add({
        severity: "error",
        summary: "Error",
        detail: "Failed to send email. Please try again later.",
      });

      console.error("Error sending email:", error);
    });
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

.contact-details {
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #2a2a2a;
  border-radius: 50%;
  margin-right: 1rem;
  flex-shrink: 0;
}

.contact-icon i {
  color: #4ade80;
  font-size: 1.25rem;
}

.contact-text h4 {
  margin: 0 0 0.25rem 0;
  color: #4ade80;
  font-size: 1rem;
}

.contact-text a {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-text a:hover {
  color: #4ade80;
}

.contact-text p {
  margin: 0;
  color: #ffffff;
}

.social-section {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #2a2a2a;
}

.social-section h4 {
  margin: 0 0 1rem 0;
  color: #4ade80;
  font-size: 1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
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
  text-decoration: none;
}

.social-link:hover {
  background-color: #4ade80;
  color: #121212;
}

.error-text {
  color: #ff6b6b;
  display: block;
  margin-top: 4px;
  margin-bottom: 1rem;
}

.error-textarea {
  color: #ff6b6b;
  display: block;
  margin-top: 0px;
  margin-bottom: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.form-group label {
  color: #ffffff;
  font-weight: 500;
  margin-bottom: 1rem;
}

.mb-4 {
  margin-bottom: 1.5rem;
  display: block;
}

.w-full {
  width: 100%;
}

:deep(.p-inputtext) {
  margin-top: 6px;
}

.submit-button {
  border-radius: 8px !important;
}

:deep(textarea) {
  background: #2a2a2a !important;
  color: #ffffff !important;
  margin-top: 6px;
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
}

.text-center {
  text-align: center;
}

:deep(.p-inputtext),
:deep(.p-inputtextarea) {
  padding: 0.75rem 1rem !important;
}
</style>
