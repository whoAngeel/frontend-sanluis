import axios from 'axios'
import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

export const useProveedoresStore = defineStore('proveedores', () => {
    let proveedores = ref([])
    const token = $cookies.get('user')?.token
    const toast = useToast()

    const fetchProveedores = () => {
        axios.request({
            headers: {
                Authorization: `Bearer ${token}`
            },
            method: "GET",
            url: "/api/providers"
        }).then(res => {
            proveedores.value = res.data
        }).then(err => {
            toast.error("Error al cargar los proveedores")
            console.log(err);
        })
    }

    return {//regresr todos los metodos
        proveedores,
        fetchProveedores
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useProveedoresStore, import.meta.hot))
}
