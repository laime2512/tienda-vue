<template>
  <div>
    <Navigation />
    <div class="container mt-5">
      <h1>📖 Sobre Nosotros</h1>
      <p>Somos tu tienda de abarrotes de confianza...</p>
      <router-link to="/" class="btn btn-primary">
        ← Volver al inicio
      </router-link>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Navigation from '@/components/Layout/Navigation.vue'
import Footer from '@/components/Layout/Footer.vue'
</script>