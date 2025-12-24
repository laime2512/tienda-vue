import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// USANDO export default (para compatibilidad con tu código)
export default defineStore('carrito', () => {
  const carritoCompras = ref([])
  
  const total = computed(() => {
    return carritoCompras.value.reduce((sum, item) => sum + item.precio, 0)
  })
  
  const cantidadItems = computed(() => {
    return carritoCompras.value.length
  })
  
  const agregarItem = (item) => {
    carritoCompras.value.push(item)
  }
  
  const limpiarCarrito = () => {
    carritoCompras.value = []
  }
  
  // Para agrupar productos iguales
  const carritoAgrupado = computed(() => {
    const agrupado = {}
    carritoCompras.value.forEach(item => {
      if (!agrupado[item.id]) {
        agrupado[item.id] = {
          ...item,
          cantidad: 1
        }
      } else {
        agrupado[item.id].cantidad++
      }
    })
    return Object.values(agrupado)
  })
  
  return {
    carritoCompras,
    total,
    cantidadItems,
    carritoAgrupado,
    agregarItem,
    limpiarCarrito
  }
})