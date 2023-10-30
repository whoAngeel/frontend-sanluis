import { defineStore, acceptHMRUpdate } from 'pinia'
import { computed, ref } from 'vue'
import axios from 'axios'

export const useCategoriesStore = defineStore('categories', () => {
    const categories = ref([])

    const fetchCategories = (token) => {
        axios.request({
            headers: {
                Authorization: `Bearer ${token}`
            },
            method: "GET",
            url: `/api/categories`
        }).then(res => {
            // console.log(res.data);
            categories.value = res.data;
        }).catch(error => {
            console.log(error);
        })

    }
    const getCategories = computed(() => {
        return categories.value
    })

    const addCategory = (data) => {
        categories.value.push(data)
    }

    return { categories, getCategories, fetchCategories, addCategory }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCategoriesStore, import.meta.hot))
}
