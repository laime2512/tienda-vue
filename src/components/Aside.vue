<template>
    <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Contacto</a></li>
    </ul>

    <p>
        usuario: {{usuarioStore.datos.nombreUsuario}}
        correo: {{ usuarioStore.datos.correo}}
    </p>



</template>


<script setup>

import useUsuarioStore from '@/store/usuarioStore';

const usuarioStore =  useUsuarioStore()

</script>