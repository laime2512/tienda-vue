<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
      <a class="navbar-brand" href="#!">🏪 Tienda de Abarrotes</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">🏠 Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">📖 Nosotros</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" 
               role="button" data-bs-toggle="dropdown" aria-expanded="false">
              🛍️ Categorías
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">🥫 Todos los Productos</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">🥛 Lácteos</a></li>
              <li><a class="dropdown-item" href="#">🥫 Enlatados</a></li>
              <li><a class="dropdown-item" href="#">🥤 Bebidas</a></li>
              <li><a class="dropdown-item" href="#">🧼 Limpieza</a></li>
            </ul>
          </li>
        </ul>
        <div class="d-flex">
          <button class="btn btn-outline-dark position-relative" 
                  type="button" 
                  @click="verCarrito">
            <i class="bi-cart-fill me-1"></i>
            Carrito
            <span v-if="carritoStore.cantidadItems > 0" 
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {{ carritoStore.cantidadItems }}
              <span class="visually-hidden">productos en carrito</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
// IMPORTACIÓN CORREGIDA - sin llaves cuando es export default
import useCarritoStore from '@/store/useCarritoStore'

const carritoStore = useCarritoStore()

const verCarrito = () => {
  if (carritoStore.cantidadItems === 0) {
    alert("🛒 Tu carrito está vacío")
  } else {
    alert(`🛒 Tienes ${carritoStore.cantidadItems} productos en el carrito\nTotal: Bs. ${carritoStore.total}`)
  }
}
</script>

<style scoped>
.navbar-brand {
  font-weight: bold;
  color: #28a745 !important;
}

.badge {
  font-size: 0.7em;
  padding: 0.4em 0.6em;
}
</style>