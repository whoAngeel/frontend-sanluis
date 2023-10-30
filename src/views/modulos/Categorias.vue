<template>
    <NavBar titleModule="Categorias" />
    <div class="w-4/6 mx-auto items-center">
        <div class="flex justify-center h-full w-full my-12">
            <label for="crearCategoria" class="btn btn-primary">open modal</label>
            <CreateCategory />
        </div>

        <div class="flex justify-center h-full w-full overflow-x-auto">
            <div class="">
                <TableCategories :categories="getCategories" />
            </div>
        </div>


    </div>
</template>

<script setup>
import NavBar from '@/components/navbars/NavBar.vue';
import TableCategories from '../../components/tables/Categories.vue'
import { useUserStore } from '../../stores/userStore'
import { useCategoriesStore } from '../../stores/categories'
import { onMounted } from 'vue';
import CreateCategory from '../../components/forms/CreateCategory.vue';

const userStore = useUserStore()
const catStore = useCategoriesStore()

const { getCategories, categories } = catStore

onMounted(() => {
    catStore.fetchCategories(userStore.state.token)
})

</script>
