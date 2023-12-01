import axios from 'axios'
import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

export const useCategoriasStore = defineStore('categorias', () => {

    const toast = useToast()
    const token = $cookies.get('user')?.token
    const categorias = ref([])

    const fetchCategorias = () => {
        axios.request({
            headers: {
                Authorization: `Bearer ${token}`
            },
            method: "GET",
            url: `/api/categories`,

        }).then(res => {
            // console.log(res.data.categorias);
            categorias.value = res.data?.categorias
        }).catch(err => {
            console.log(err);
        })
    }

    return {
        categorias,
        fetchCategorias
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCategoriasStore, import.meta.hot))
}
