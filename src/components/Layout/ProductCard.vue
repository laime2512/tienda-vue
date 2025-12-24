<template>
  <div class="col mb-5">
    <div class="card h-100">
      <!-- Sale badge-->
      <div v-if="producto.oferta" class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">
        Oferta
      </div>
      <!-- Product image-->
      <img class="card-img-top" :src="producto.imagen" :alt="producto.nombre" />
      <!-- Product details-->
      <div class="card-body p-4">
        <div class="text-center">
          <!-- Product name-->
          <h5 class="fw-bolder">{{ producto.nombre }}</h5>
          <!-- Product reviews-->
          <div v-if="producto.rating" class="d-flex justify-content-center small text-warning mb-2">
            <div v-for="n in producto.rating" :key="n" class="bi-star-fill"></div>
          </div>
          <!-- Product price-->
          <div>
            <span v-if="producto.precioOriginal" class="text-muted text-decoration-line-through">
              Bs. {{ producto.precioOriginal }}
            </span>
            <span class="fw-bold">Bs. {{ producto.precio }}</span>
          </div>
        </div>
      </div>
      <!-- Product actions-->
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
          <a class="btn btn-outline-dark mt-auto" href="#" @click.prevent="agregarAlCarrito">
            Añadir al carrito
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useCarritoStore from '@/store/useCarritoStore';

const props = defineProps({
  producto: {
    type: Object,
    required: true
  }
});

const carritoStore = useCarritoStore();

const agregarAlCarrito = () => {
  const itemCarrito = {
    id: props.producto.id,
    producto: props.producto.nombre,
    precio: props.producto.precio
  };
  carritoStore.agregarItem(itemCarrito);
  alert(`${props.producto.nombre} añadido al carrito`);
};
</script>