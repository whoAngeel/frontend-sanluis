import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import axios from 'axios'

export const useProductsStore = defineStore('products', () => {
    const toast = useToast()
    let productos = ref([])
    const token = $cookies.get('user')?.token

    const fetchProductos = () => {
        axios.request({
            headers: {
                Authorization: `Bearer ${token}`
            },
            method: "GET",
            url: `/api/products`,

        }).then(res => {
            productos.value = res.data
        }).catch(err => {
            toast.error("Error al cargar los productos")
            console.log(err);
        })
    }


    return {
        productos,
        fetchProductos
    }
})
