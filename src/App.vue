<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
/* Reset y estilos base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Asegurar que el footer se quede abajo */
main {
  flex: 1;
}
</style>