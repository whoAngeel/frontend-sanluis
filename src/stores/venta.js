import axios from 'axios'
import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

export const useVentaStore = defineStore('venta', () => {
    let venta = ref({})
    let carrito = ref([])
    const token = $cookies.get('user')?.token
    const idEmployee = $cookies.get('user')?.id
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

    }

    return {
        createVenta, venta,
        carrito
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useVentaStore, import.meta.hot))
}
