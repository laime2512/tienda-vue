<template>


<div style="border: 1px solid #fff ;">

    <ul>
        <li v-for="(item, index) in carritoStore.carritoCompras" :key="item.id">
            <a href="#">{{ item.producto }} x 1 </a>
        </li>
    </ul>
    <h5>Total Bs. {{ carritoStore.total }}</h5>

</div>




</template>

<script setup>

import useCarritoStore from '@/store/useCarritoStore';

const carritoStore = useCarritoStore()

console.log(carritoStore.carritoCompras)


</script>