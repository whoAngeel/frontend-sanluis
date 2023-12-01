import axios from 'axios'
import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

export const useVentaStore = defineStore('venta', () => {
    let venta = ref({})
    let carrito = ref([])
    let busqueda = ref([])
    const token = $cookies.get('user')?.token
    const idEmployee = $cookies.get('employeeId')
    const toast = useToast()

    const createVenta = async () => {
        // console.log(idEmployee);
        try {
            const response = await axios.request({
                headers: {
                    Authorization: `Bearer ${token}`
                },
                method: "POST",
                url: "/api/sales",
                data: {
                    employeeId: idEmployee,
                }
            })
            venta.value = response.data

            toast.success("Venta generada")
        } catch (error) {
            console.log(error);
            toast.error("Error al generar la venta")
        }
    }

    const agregarProducto = (producto) => {
        carrito.value.push(producto)
        toast.info('Producto agregado')
    }

    const buscarByName = async (nombre) => {
        try {
            const response = await axios.request({
                headers: {
                    Authorization: `Bearer ${token}`
                },
                method: "GET",
                url: "/api/products/search",
                data: JSON.stringify({
                    name: nombre,
                })
            })

            console.log(response.data)
            // busqueda.value = response.data
        } catch (error) {
            console.log(error);
            toast.error("Hubo un problema al buscar el producto")
        }
    }


    return {
        createVenta,
        venta,
        carrito,
        busqueda,
        agregarProducto,
        buscarByName
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useVentaStore, import.meta.hot))
}
