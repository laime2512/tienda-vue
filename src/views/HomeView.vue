<template>
  <div>
    <!-- Navigation Component -->
    <Navigation />
    
    <!-- Header Banner Component -->
    <HeaderBanner />
    
    <!-- Section-->
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <!-- Carrito actual -->
        <div class="mb-4 p-3 bg-light rounded" v-if="carritoStore.carritoCompras.length > 0">
          <h5>Tu Carrito ({{ carritoStore.cantidadItems }} productos)</h5>
          <p>Total: <strong>Bs. {{ carritoStore.total }}</strong></p>
          <button class="btn btn-success btn-sm" @click="finalizarCompra">Finalizar Compra</button>
        </div>
        
        <!-- Productos -->
        <h2 class="mb-4">Nuestros Productos</h2>
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <ProductCard 
            v-for="producto in productosAbarrotes" 
            :key="producto.id" 
            :producto="producto" 
          />
        </div>
      </div>
    </section>
    
    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navigation from '@/components/Layout/Navigation.vue'
import HeaderBanner from '@/components/Layout/HeaderBanner.vue'
import ProductCard from '@/components/Layout/ProductCard.vue'
import Footer from '@/components/Layout/Footer.vue'
import useCarritoStore from '@/store/useCarritoStore'

const carritoStore = useCarritoStore()

// Datos de productos para abarrotes
const productosAbarrotes = ref([
  { 
    id: 1, 
    nombre: "Leche Entera", 
    precio: 12.50, 
    precioOriginal: 15.00,
    imagen: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=450&h=300&fit=crop",
    rating: 4,
    oferta: true 
  },
  { 
    id: 2, 
    nombre: "Arroz 5kg", 
    precio: 45.00, 
    imagen: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=450&h=300&fit=crop",
    rating: 5 
  },
  { 
    id: 3, 
    nombre: "Aceite Vegetal", 
    precio: 28.00, 
    precioOriginal: 32.00,
    imagen: "https://images.unsplash.com/photo-1536939459926-301728717817?w=450&h=300&fit=crop",
    oferta: true 
  },
  { 
    id: 4, 
    nombre: "Atún en Lata", 
    precio: 8.50, 
    imagen: "https://images.unsplash.com/photo-1572817514251-761d3c7a5df9?w=450&h=300&fit=crop",
    rating: 4 
  },
  { 
    id: 5, 
    nombre: "Detergente", 
    precio: 18.00, 
    imagen: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=450&h=300&fit=crop",
    rating: 3 
  },
  { 
    id: 6, 
    nombre: "Coca-Cola 2L", 
    precio: 15.00, 
    precioOriginal: 18.00,
    imagen: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=450&h=300&fit=crop",
    oferta: true,
    rating: 5 
  },
  { 
    id: 7, 
    nombre: "Galletas", 
    precio: 6.50, 
    imagen: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=450&h=300&fit=crop",
    rating: 4 
  },
  { 
    id: 8, 
    nombre: "Café Molido", 
    precio: 42.00, 
    precioOriginal: 50.00,
    imagen: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=450&h=300&fit=crop",
    oferta: true,
    rating: 5 
  }
])

const finalizarCompra = () => {
  if (carritoStore.carritoCompras.length === 0) {
    alert("Tu carrito está vacío");
    return;
  }
  
  alert(`Compra finalizada! Total: Bs. ${carritoStore.total}\nGracias por tu compra.`);
  carritoStore.limpiarCarrito();
}
</script>