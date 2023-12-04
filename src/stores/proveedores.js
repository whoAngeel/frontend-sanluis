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
            url: `/api/providers`
        }).then(res => {
            proveedores.value = res.data
        }).catch(err => {
            toast.error("Error al cargar los proveedores" + err)
            console.log(err);
        })
    }

    const crear = async (body) => {
        try {
            const response = await axios.request({
                headers: {
                    Authorization: `Bearer ${token}`
                },
                method: "POST",
                url: "/api/providers",
                data: body
            })
            const nuevoProveedor = response.data
            proveedores.value.push(nuevoProveedor)
            toast.success("Proveedor creado correctamente")
        } catch (error) {
            console.log(error.response);
            toast.error("Error al crear un producto")
        }
    }

    return {
        proveedores,
        fetchProveedores
        , crear
    }
})
/*
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useProveedoresStore, import.meta.hot))
}
*/
