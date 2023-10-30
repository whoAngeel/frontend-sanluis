import axios from 'axios'
import { ref, reactive, toRefs, computed } from 'vue'

export default function () {
    const endpoint = '/api/categories'
    const pagination = reactive({
        loaded: false,
        containerRef: null,
        page: 0,
        totalPages: 0,
        limit: 5,
        results: []
    })

    const paginate = async (token) => {
        try {
            pagination.loaded = false
            const { data } = await axios.get('/api/categories', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    limit: pagination.limit,     // Número de página actual
                    offset: pagination.page // Elementos por página
                }
            })
            pagination.results = data.categorias
            pagination.totalPages = Math.ceil(data.total / pagination.limit)
            const top = pagination.containerRef.offsetTop
            window.scrollTo({
                top,
                behavior: 'smooth'
            })
        } catch (error) {
            console.log("ERROR usePagination");
            console.log(error);
        } finally {
            pagination.loaded = true
        }
    }

    const setPage = async (isNext = true, token) => {
        const currentPage = pagination.page
        const totalPages = pagination.totalPages
        if (isNext) {
            if (currentPage < totalPages) {
                paginate.page = pagination.page + 1
            }
        } else {
            if (currentPage > 0) {
                paginate.page = pagination.page - 1
            }
        }
        await paginate(token)
    }

    const isFirstPage = computed(() => pagination.page === 0)
    const isLastPage = computed(() => pagination.page === pagination.totalPages)

    return {
        ...toRefs(pagination),
        isFirstPage,
        isLastPage,
        setPage,
        paginate

    }
}
