import { defineStore, acceptHMRUpdate } from 'pinia'
import { computed, ref } from 'vue'
import axios from 'axios'
import { useToast } from 'vue-toastification'

const toast = useToast()

export const useCategoriesStore = defineStore('categories', {
    state: () => ({
        categories: [],
        loading: false,
        total: 0
    }),
    getters: {
        getCategories(state) {
            return state.categories
        },
        getTotalCategories(state) {
            return state.total
        }
    },
    actions: {
        addCategory(data, token) {
            this.loading = true
            if (this.categories.length < 5) {
                this.categories.push(data)
            }
            axios.post('/api/categories', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(res => {
                // console.log(res);
                toast.success("Categoria creada correctamente")
                this.loading = false
            }).catch(error => {
                console.log(error);
                this.categories.pop()
                toast.error("Error al crear una categoria")
                this.loading = false
            })
        },
        async deleteCategory(id, token) {
            this.loading = true

            this.categories = this.categories.filter(cat => cat.id !== id)
            try {
                const response = await axios.delete(`/api/categories/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                console.log(response.data);
                toast.info("Categoria eliminada correctamente")
            } catch (error) {
                toast.error("Error al eliminar una categoria")
                console.log(error)

            }
        },
        async fetchCategories(token) {
            try {
                const response = await axios.get('/api/categories', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    // params: {
                    //     limit: limit,     // Número de página actual
                    //     offset: offset // Elementos por página
                    // }
                })
                // console.log(response.data);
                this.categories = response.data.categorias
                this.total = response.data.total
            } catch (error) {
                toast.error("Error al cargar las categorias")
                console.log(error);
            }
        }

    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCategoriesStore, import.meta.hot))
}
