import { defineStore } from 'pinia'
import { ref } from 'vue'


const useUsuarioStore = defineStore('usuario', () =>{

    const datos = ref({
        nombreUsuario: '',
        correo: ''
    })





    return {
        datos
    }


})


export default useUsuarioStore